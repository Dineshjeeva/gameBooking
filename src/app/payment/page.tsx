import Link from "next/link";
import { CreditCard, ShieldCheck } from "lucide-react";

import { getBooking } from "@/lib/firestore";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <main className="mx-auto w-full max-w-2xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-xl font-bold text-ink">
            Payment details missing
          </h1>

          <Link
            href="/sports"
            className="mt-5 inline-block text-sm font-semibold text-primary"
          >
            Browse sports
          </Link>
        </div>
      </main>
    );
  }

  const booking = await getBooking(id);

  if (!booking) {
    return (
      <main className="mx-auto w-full max-w-2xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-xl font-bold text-red-600">
            Booking not found
          </h1>

          <p className="mt-2 text-sm text-muted break-all">
            Booking ID: {id}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-ink">
              Complete payment
            </h1>

            <p className="text-sm text-muted">
              Demo payment gateway
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-bg p-4">
          <p className="text-sm font-semibold text-ink">
            {booking.resourceName}
          </p>

          <p className="mt-1 text-xs text-muted">
            {booking.date}
          </p>

          <p className="mt-1 text-xs text-muted">
            {booking.startTime} – {booking.endTime}
          </p>

          <div className="mt-4 flex justify-between border-t border-border pt-3">
            <span className="text-sm font-semibold text-ink">
              Amount
            </span>

            <span className="text-xl font-bold text-primary">
              ₹{Number(booking.total || 0).toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-sm font-semibold text-yellow-800">
            Demo payment
          </p>

          <p className="mt-1 text-xs text-yellow-700">
            This is a dummy payment screen. No real money will be charged.
          </p>
        </div>

        <form
          action={`/payment/success?id=${booking.id}`}
          className="mt-6"
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            <ShieldCheck className="h-4 w-4" />
            Pay ₹{Number(booking.total || 0).toLocaleString("en-IN")}
          </button>
        </form>

        <Link
          href={`/booking/${booking.resourceId}`}
          className="mt-4 block text-center text-sm font-medium text-muted hover:text-primary"
        >
          Cancel payment
        </Link>

      </div>
    </main>
  );
}
