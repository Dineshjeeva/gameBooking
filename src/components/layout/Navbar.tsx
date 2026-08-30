"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, CircleUserRound, LogOut, LayoutDashboard, Zap } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sports", label: "Sports" },
  { href: "/bookings", label: "My Bookings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOutUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display" aria-label="Playzo home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">Playzo</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-primary-light text-primary-dark" : "text-muted hover:bg-bg hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-ink hover:bg-bg"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                <CircleUserRound className="h-5 w-5 text-primary" />
                {user.name.split(" ")[0]}
              </button>
              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-card p-1.5 shadow-lg pz-fade-up"
                >
                  <Link
                    href="/bookings"
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-bg"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      role="menuitem"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink hover:bg-bg"
                      onClick={() => setMenuOpen(false)}
                    >
                      <LayoutDashboard className="h-4 w-4" /> Admin dashboard
                    </Link>
                  )}
                  <button
                    role="menuitem"
                    onClick={async () => {
                      await signOutUser();
                      setMenuOpen(false);
                      router.push("/");
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-danger hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-bg"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
              >
                {link.label}
              </Link>
            ))}
            {user?.role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
              >
                Admin dashboard
              </Link>
            )}
            <div className="my-2 h-px bg-border" />
            {user ? (
              <button
                onClick={async () => {
                  await signOutUser();
                  setOpen(false);
                  router.push("/");
                }}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-danger hover:bg-red-50"
              >
                Log out
              </button>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-ink"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Sign up
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
