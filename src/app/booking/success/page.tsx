import Link from "next/link";
import { CheckCircle2, Home, CalendarDays } from "lucide-react";

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  return (
    <main className="min-h-[70vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-9 w-9 text-green-600" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
            Booking confirmed!
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Your booking has been successfully confirmed.
          </p>

          {id && (
            <div className="mx-auto mt-5 max-w-md rounded-xl bg-bg p-4">
              <p className="text-xs text-muted">
                Booking ID
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-ink">
                {id}
              </p>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <Home className="h-4 w-4" />
              Go to Home
            </Link>

            <Link
              href="/sports"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:bg-bg"
            >
              <CalendarDays className="h-4 w-4" />
              Book another slot
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
