import { MapPin, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-light blur-2xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary-light/70 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
        <div className="pz-fade-up">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">
            <Sparkles className="h-3.5 w-3.5" /> Madurai&rsquo;s #1 sports venue app
          </span>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Book your game.
            <br />
            <span className="text-primary">Play your best.</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-muted">
            Real-time slots for turf, badminton, PlayStation and cricket — reserve in
            under a minute, no phone calls needed.
          </p>

          <form
            action="/sports"
            className="mt-7 flex flex-col gap-2 rounded-2xl border border-border bg-bg p-2 shadow-sm sm:flex-row"
          >
            <label className="flex flex-1 items-center gap-2 rounded-xl bg-card px-3 py-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <input
                type="text"
                name="location"
                placeholder="Madurai, Tamil Nadu"
                defaultValue="Madurai, Tamil Nadu"
                aria-label="Location"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
            </label>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Browse sports <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Instant confirmation
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> Pre-book up to 30 days ahead
            </span>
          </div>
        </div>

        <div className="pz-fade-up relative hidden md:block" style={{ animationDelay: "80ms" }}>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-dark p-6 shadow-xl">
            <p className="text-xs font-medium uppercase tracking-wide text-white/70">Live availability</p>
            <p className="mt-1 text-lg font-semibold text-white">Turf 2.0 · Today</p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30"].map((t, i) => (
                <div
                  key={t}
                  className={`rounded-lg px-2 py-2.5 text-center text-xs font-medium ${
                    i === 2 || i === 3
                      ? "bg-white text-primary-dark"
                      : i === 5
                        ? "bg-red-500/80 text-white"
                        : "bg-white/15 text-white"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
              <span className="text-sm text-white">7:00 PM – 8:00 PM</span>
              <span className="text-sm font-bold text-white">₹1,270</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
