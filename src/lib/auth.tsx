"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "./firebase";
import * as mock from "./mockStore";
import { generateId, isValidEmail } from "./utils";
import type { AppUser } from "@/types/user";

interface AuthContextValue {
  user: AppUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_SESSION_KEY = "playzo_mock_session_uid";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsub = onAuthStateChanged(auth, async (fbUser) => {
        if (!fbUser) {
          setUser(null);
          setLoading(false);
          return;
        }
        try {
          const snap = await getDoc(doc(db!, "users", fbUser.uid));
          if (snap.exists()) {
            setUser({ id: fbUser.uid, ...(snap.data() as Omit<AppUser, "id">) });
          } else {
            const fallback: AppUser = {
              id: fbUser.uid,
              name: fbUser.displayName ?? "Player",
              email: fbUser.email ?? "",
              role: "user",
              createdAt: new Date().toISOString(),
            };
            setUser(fallback);
          }
        } finally {
          setLoading(false);
        }
      });
      return unsub;
    }

    // Mock session restore
    const uid = typeof window !== "undefined" ? window.localStorage.getItem(MOCK_SESSION_KEY) : null;
    if (uid) {
      mock.mockGetUserById(uid).then((u) => {
        setUser(u);
        setLoading(false);
      });
    } else {
      Promise.resolve().then(() => setLoading(false));
    }
  }, []);

  async function signIn(email: string, password: string) {
    if (isFirebaseConfigured && auth) {
      await signInWithEmailAndPassword(auth, email, password);
      return;
    }
    if (!isValidEmail(email)) throw new Error("Enter a valid email address.");
    const existing = await mock.mockFindUserByEmail(email);
    if (!existing || existing.password !== password) {
      throw new Error("Invalid email or password.");
    }
    window.localStorage.setItem(MOCK_SESSION_KEY, existing.id);
    const rest: AppUser = {
      id: existing.id,
      name: existing.name,
      email: existing.email,
      phone: existing.phone,
      role: existing.role,
      createdAt: existing.createdAt,
    };
    setUser(rest);
  }

  async function signUp(name: string, email: string, password: string, phone?: string) {
    if (isFirebaseConfigured && auth && db) {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      const newUser: Omit<AppUser, "id"> = {
        name,
        email,
        phone,
        role: "user",
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "users", cred.user.uid), newUser);
      return;
    }
    if (!isValidEmail(email)) throw new Error("Enter a valid email address.");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");
    const existing = await mock.mockFindUserByEmail(email);
    if (existing) throw new Error("An account with this email already exists.");
    const newUser: AppUser & { password: string } = {
      id: generateId("user"),
      name,
      email,
      phone,
      role: "user",
      createdAt: new Date().toISOString(),
      password,
    };
    await mock.mockCreateUser(newUser);
    window.localStorage.setItem(MOCK_SESSION_KEY, newUser.id);
    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      createdAt: newUser.createdAt,
    });
  }

  async function signOutUser() {
    if (isFirebaseConfigured && auth) {
      await fbSignOut(auth);
      return;
    }
    window.localStorage.removeItem(MOCK_SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
