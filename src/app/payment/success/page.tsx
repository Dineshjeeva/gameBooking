import Link from "next/link";
import { CheckCircle2, CalendarDays, Home } from "lucide-react";

import {
  getBooking,
  updateBookingStatus,
} from "@/lib/firestore";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-xl font-bold text-red-600">
          Payment ID missing
        </h1>
      </main>
    );
  }

  const booking = await getBooking(id);

  if (!booking) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-xl font-bold text-red-600">
            Booking not found
          </h1>
        </div>
      </main>
    );
  }

  /*
   * Dummy payment:
   * Mark payment as successful and booking as confirmed.
   */
  await updateBookingStatus(
    booking.id,
    "CONFIRMED",
    "PAID"
  );

  return (
    <main className="min-h-[70vh] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-9 w-9 text-green-600" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
            Payment successful!
          </h1>

          <p className="mt-2 text-sm text-muted">
            Your booking has been confirmed successfully.
          </p>

          <div className="mt-6 rounded-xl bg-bg p-4 text-left">
            <p className="text-sm font-semibold text-ink">
              {booking.resourceName}
            </p>

            <p className="mt-1 text-sm text-muted">
              {booking.date}
            </p>

            <p className="mt-1 text-sm text-muted">
              {booking.startTime} – {booking.endTime}
            </p>

            <div className="mt-4 flex justify-between border-t border-border pt-3">
              <span className="text-sm font-semibold text-ink">
                Paid
              </span>

              <span className="text-lg font-bold text-primary">
                ₹{Number(booking.total || 0).toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              href="/bookings"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              <CalendarDays className="h-4 w-4" />
              My bookings
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink hover:bg-bg"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}
