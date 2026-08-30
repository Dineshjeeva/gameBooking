import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { getUserBookings } from "@/lib/firestore";

export default async function MyBookingsPage() {
  /*
   * Replace this with the Firebase Auth user ID
   * once authentication is connected.
   */
  const userId = "guest";

  const bookings = await getUserBookings(userId);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">
          My bookings
        </h1>

        <p className="mt-1 text-sm text-muted">
          View your upcoming and previous bookings.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bg">
            <CalendarDays className="h-7 w-7 text-muted" />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-ink">
            No bookings yet
          </h2>

          <p className="mx-auto mt-1 max-w-md text-sm text-muted">
            You haven't made any bookings yet. Choose a sport and book your
            first slot.
          </p>

          <Link
            href="/sports"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Browse sports
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-ink">
                    {booking.resourceName}
                  </h2>

                  <p className="mt-1 text-sm text-muted">
                    {booking.venueName}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.bookingStatus === "CONFIRMED"
                      ? "bg-green-100 text-green-700"
                      : booking.bookingStatus === "COMPLETED"
                        ? "bg-blue-100 text-blue-700"
                        : booking.bookingStatus === "CANCELLED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {booking.bookingStatus}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div className="flex items-center gap-3 rounded-xl bg-bg p-3">
                  <CalendarDays className="h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <p className="text-xs text-muted">
                      Date
                    </p>

                    <p className="text-sm font-semibold text-ink">
                      {booking.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-bg p-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <p className="text-xs text-muted">
                      Time
                    </p>

                    <p className="text-sm font-semibold text-ink">
                      {booking.startTime} – {booking.endTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-bg p-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />

                  <div className="min-w-0">
                    <p className="text-xs text-muted">
                      Venue
                    </p>

                    <p className="truncate text-sm font-semibold text-ink">
                      {booking.venueName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs text-muted">
                    Booking ID
                  </p>

                  <p className="max-w-full break-all text-xs font-medium text-ink">
                    {booking.id}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-xs text-muted">
                    Total
                  </p>

                  <p className="text-lg font-bold text-primary">
                    ₹{Number(booking.total || 0).toLocaleString("en-IN")}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
