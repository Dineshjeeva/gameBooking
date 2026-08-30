import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { SportVisual } from "@/components/ui/SportVisual";
import type { Venue } from "@/types/venue";
import type { Resource } from "@/types/resource";
import { formatINR } from "@/lib/utils";

export default function FeaturedVenues({ venue, resources }: { venue: Venue; resources: Resource[] }) {
  const priceFrom = Math.min(...resources.map((r) => r.pricePerSlot));

  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-ink">Featured venue</h2>
        <p className="mt-1 text-sm text-muted">Handpicked and verified by the Playzo team.</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm md:grid md:grid-cols-5">
          <SportVisual category="turf" className="h-48 w-full md:col-span-2 md:h-full" />
          <div className="flex flex-col justify-center p-6 md:col-span-3">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-primary">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.8 rating · 1,200+ bookings
            </div>
            <h3 className="text-xl font-bold text-ink">{venue.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted">
              <MapPin className="h-4 w-4 shrink-0" /> {venue.location}
            </p>
            <p className="mt-3 text-sm text-muted">{venue.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {resources.slice(0, 4).map((r) => (
                <span
                  key={r.id}
                  className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-ink"
                >
                  {r.name}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-muted">
                Starting from <span className="font-semibold text-ink">{formatINR(priceFrom)}</span>/slot
              </p>
              <Link
                href="/sports/turf"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                View availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
