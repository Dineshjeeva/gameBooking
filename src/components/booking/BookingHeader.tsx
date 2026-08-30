import Link from "next/link";
import { ChevronLeft, MapPin, Clock, Tag, Users } from "lucide-react";
import type { Resource } from "@/types/resource";
import type { Venue } from "@/types/venue";
import { formatTime12h } from "@/lib/utils";

export function BookingHeader({
  resource,
  venue,
  recentBookings,
}: {
  resource: Resource;
  venue: Venue;
  recentBookings?: number;
}) {
  return (
    <div className="pz-fade-up">
      <Link
        href={`/sports/${resource.category}`}
        className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary"
      >
        <ChevronLeft className="h-4 w-4" /> {resource.category}
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">{resource.name}</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4 shrink-0" /> {venue.location}
          </p>
        </div>
        {typeof recentBookings === "number" && recentBookings > 0 && (
          <span className="flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary-dark">
            <Users className="h-3.5 w-3.5" /> {recentBookings} recent bookings
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {formatTime12h(resource.openingTime)} – {formatTime12h(resource.closingTime)}
        </span>
        <span className="flex items-center gap-1.5">
          <Tag className="h-4 w-4" /> {resource.type}
        </span>
      </div>
    </div>
  );
}
