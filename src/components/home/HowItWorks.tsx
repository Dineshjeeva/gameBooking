import { Search, CalendarCheck2, CreditCard } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Pick your sport & venue",
    description: "Choose from turf, badminton, PlayStation or cricket, then pick your favourite court.",
  },
  {
    icon: CalendarCheck2,
    title: "Select a date & time",
    description: "See real-time slot availability and select one or more consecutive slots.",
  },
  {
    icon: CreditCard,
    title: "Pay & get confirmed",
    description: "Secure checkout with UPI, card or cash — get instant booking confirmation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-ink">How it works</h2>
      <p className="mt-1 text-sm text-muted">Three steps between you and your next game.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <div key={step.title} className="relative rounded-2xl border border-border bg-card p-5">
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
              <step.icon className="h-5 w-5" />
            </span>
            <h3 className="text-sm font-semibold text-ink">
              {i + 1}. {step.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
