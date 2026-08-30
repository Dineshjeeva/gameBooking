import Link from "next/link";
import { Clock, IndianRupee, Sparkles } from "lucide-react";
import { SportVisual } from "@/components/ui/SportVisual";
import type { Resource } from "@/types/resource";
import { formatINR } from "@/lib/utils";

export function ResourceCard({ resource, availableToday }: { resource: Resource; availableToday?: number }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <SportVisual category={resource.category} className="h-36 w-full" />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{resource.name}</h3>
          {!resource.active && (
            <span className="shrink-0 rounded-full bg-border px-2 py-0.5 text-[11px] font-medium text-muted">
              Unavailable
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs font-medium text-primary">{resource.type}</p>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{resource.description}</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          <span className="flex items-center gap-1">
            <IndianRupee className="h-3.5 w-3.5" /> {formatINR(resource.pricePerSlot)} / {resource.slotDuration} min
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {resource.openingTime}–{resource.closingTime}
          </span>
        </div>

        {typeof availableToday === "number" && (
          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> {availableToday} slots open today
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {resource.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full bg-bg px-2.5 py-1 text-[11px] font-medium text-muted">
              {a}
            </span>
          ))}
        </div>

        <div className="mt-4">
          {resource.active ? (
            <Link
              href={`/booking/${resource.id}`}
              className="block w-full rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Book Now
            </Link>
          ) : (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl bg-border py-2.5 text-center text-sm font-semibold text-muted"
            >
              Currently unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
