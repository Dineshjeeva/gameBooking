import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { BookingDraftProvider } from "@/lib/bookingDraft";
import { ToastProvider } from "@/components/ui/Toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Playzo — Book your game. Play your best.",
    template: "%s · Playzo",
  },
  description:
    "Playzo is a sports and gaming venue booking platform. Book turf, badminton courts, PlayStation lounges and cricket grounds in minutes.",
  keywords: [
    "Playzo",
    "sports booking",
    "turf booking",
    "badminton booking",
    "PlayStation booking",
    "cricket ground booking",
    "Madurai turf",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <AuthProvider>
          <BookingDraftProvider>
            <ToastProvider>
              <Navbar />
              <main className="flex-1 flex flex-col">{children}</main>
              <Footer />
            </ToastProvider>
          </BookingDraftProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
