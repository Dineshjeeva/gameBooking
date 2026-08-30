import Link from "next/link";
import { Zap, AtSign, Share2, MessageCircle } from "lucide-react";
import { SPORT_CATEGORIES } from "@/types/resource";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-base font-bold text-ink">Playzo</span>
          </Link>
          <p className="mt-3 text-sm text-muted">
            Book your game. Play your best. Turf, badminton, PlayStation and cricket — all in one place.
          </p>
          <div className="mt-4 flex gap-3 text-muted">
            <AtSign className="h-5 w-5" />
            <Share2 className="h-5 w-5" />
            <MessageCircle className="h-5 w-5" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Sports</h4>
          <ul className="mt-3 space-y-2">
            {SPORT_CATEGORIES.map((s) => (
              <li key={s.id}>
                <Link href={`/sports/${s.id}`} className="text-sm text-muted hover:text-primary">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Company</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/sports" className="text-sm text-muted hover:text-primary">Browse venues</Link></li>
            <li><Link href="/bookings" className="text-sm text-muted hover:text-primary">My bookings</Link></li>
            <li><Link href="/login" className="text-sm text-muted hover:text-primary">Log in</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Support</h4>
          <ul className="mt-3 space-y-2">
            <li className="text-sm text-muted">support@playzo.app</li>
            <li className="text-sm text-muted">+91 90000 00000</li>
            <li className="text-sm text-muted">Madurai, Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Playzo. All rights reserved.
      </div>
    </footer>
  );
}
