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
  signUp: (
    name: string,
    email: string,
    password: string,
    phone?: string
  ) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_SESSION_KEY = "playzo_mock_session_uid";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Check Firebase configuration
  useEffect(() => {
    console.log("🔥 Firebase configured:", isFirebaseConfigured);
    console.log("🔥 Firebase auth:", auth);
    console.log("🔥 Firebase db:", db);
  }, []);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsub = onAuthStateChanged(auth, async (fbUser) => {
        if (!fbUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        try {
          console.log("🔥 Auth state changed. UID:", fbUser.uid);

          const snap = await getDoc(
            doc(db!, "users", fbUser.uid)
          );

          console.log(
            "🔥 Firestore user document exists:",
            snap.exists()
          );

          if (snap.exists()) {
            console.log(
              "🔥 Firestore user data:",
              snap.data()
            );

            setUser({
              id: fbUser.uid,
              ...(snap.data() as Omit<AppUser, "id">),
            });
          } else {
            console.log(
              "⚠️ No Firestore document found. Using fallback user."
            );

            const fallback: AppUser = {
              id: fbUser.uid,
              name: fbUser.displayName ?? "Player",
              email: fbUser.email ?? "",
              role: "user",
              createdAt: new Date().toISOString(),
            };

            setUser(fallback);
          }
        } catch (error) {
          console.error(
            "❌ Error loading Firestore user:",
            error
          );
        } finally {
          setLoading(false);
        }
      });

      return unsub;
    }

    // Mock session restore
    const uid =
      typeof window !== "undefined"
        ? window.localStorage.getItem(MOCK_SESSION_KEY)
        : null;

    if (uid) {
      mock.mockGetUserById(uid).then((u) => {
        setUser(u);
        setLoading(false);
      });
    } else {
      Promise.resolve().then(() => setLoading(false));
    }
  }, []);

  // --------------------------------------------------
  // SIGN IN
  // --------------------------------------------------

  async function signIn(email: string, password: string) {
    if (isFirebaseConfigured && auth) {
      try {
        console.log("🔥 Firebase login:", email);

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log("✅ Firebase login successful");

        return;
      } catch (error: any) {
        console.error("❌ Firebase login failed");
        console.error("Code:", error?.code);
        console.error("Message:", error?.message);

        throw error;
      }
    }

    // Mock login
    if (!isValidEmail(email)) {
      throw new Error("Enter a valid email address.");
    }

    const existing =
      await mock.mockFindUserByEmail(email);

    if (!existing || existing.password !== password) {
      throw new Error("Invalid email or password.");
    }

    window.localStorage.setItem(
      MOCK_SESSION_KEY,
      existing.id
    );

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

  // --------------------------------------------------
  // SIGN UP
  // --------------------------------------------------

  async function signUp(
    name: string,
    email: string,
    password: string,
    phone?: string
  ) {
    if (isFirebaseConfigured && auth && db) {
      try {
        console.log("🔥 Starting Firebase signup...");
        console.log("Email:", email);
        console.log("Name:", name);

        // 1. Create Firebase Authentication user
        const cred =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        console.log(
          "✅ Firebase Auth user created"
        );
        console.log(
          "🔥 Firebase UID:",
          cred.user.uid
        );

        // 2. Update Firebase display name
        await updateProfile(cred.user, {
          displayName: name,
        });

        console.log(
          "✅ Firebase profile updated"
        );

        // 3. Prepare Firestore user data
        const newUser: Omit<AppUser, "id"> = {
  name,
  email,
  ...(phone ? { phone } : {}),
  role: "user",
  createdAt: new Date().toISOString(),
};

        console.log(
          "🔥 Firestore data:",
          newUser
        );

        // 4. Create Firestore document
        console.log(
          "🔥 Writing Firestore document..."
        );

        await setDoc(
          doc(db, "users", cred.user.uid),
          newUser
        );

        console.log(
          "✅ Firestore document created successfully!"
        );

        console.log(
          "🔥 Document path:",
          `users/${cred.user.uid}`
        );

        // 5. Verify Firestore document
        console.log(
          "🔥 Verifying Firestore document..."
        );

        const check = await getDoc(
          doc(db, "users", cred.user.uid)
        );

        console.log(
          "🔥 Document exists:",
          check.exists()
        );

        console.log(
          "🔥 Document data:",
          check.data()
        );

        if (!check.exists()) {
          throw new Error(
            "Firestore document was not created."
          );
        }

        console.log(
          "🎉 Firebase signup completed successfully!"
        );

        return;
      } catch (error: any) {
        console.error(
          "❌❌❌ FIREBASE SIGNUP ERROR ❌❌❌"
        );

        console.error(
          "Error code:",
          error?.code
        );

        console.error(
          "Error message:",
          error?.message
        );

        console.error(
          "Full error:",
          error
        );

        throw error;
      }
    }

    // --------------------------------------------------
    // MOCK SIGNUP
    // --------------------------------------------------

    if (!isValidEmail(email)) {
      throw new Error(
        "Enter a valid email address."
      );
    }

    if (password.length < 6) {
      throw new Error(
        "Password must be at least 6 characters."
      );
    }

    const existing =
      await mock.mockFindUserByEmail(email);

    if (existing) {
      throw new Error(
        "An account with this email already exists."
      );
    }

    const newUser: AppUser & {
      password: string;
    } = {
      id: generateId("user"),
      name,
      email,
      phone,
      role: "user",
      createdAt: new Date().toISOString(),
      password,
    };

    await mock.mockCreateUser(newUser);

    window.localStorage.setItem(
      MOCK_SESSION_KEY,
      newUser.id
    );

    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      createdAt: newUser.createdAt,
    });
  }

  // --------------------------------------------------
  // SIGN OUT
  // --------------------------------------------------

  async function signOutUser() {
    if (isFirebaseConfigured && auth) {
      await fbSignOut(auth);
      return;
    }

    window.localStorage.removeItem(
      MOCK_SESSION_KEY
    );

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return ctx;
}
