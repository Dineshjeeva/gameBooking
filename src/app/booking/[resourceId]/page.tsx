import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import {
  getResource,
  getVenue,
  getBookedSlotIds,
  getReservedSlotIds,
  getDisabledSlotMap,
} from "@/lib/firestore";

import { generateSlotsForDate } from "@/lib/slots";
import { todayKey } from "@/lib/utils";
import { BookingClient } from "@/components/booking/BookingClient";

export default async function BookingPage({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) {
  const { resourceId } = await params;

  console.log("BOOKING RESOURCE ID:", resourceId);

  const resource = await getResource(resourceId);

  console.log("BOOKING RESOURCE:", resource);

  if (!resource) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">
          Resource not found
        </h1>

        <p className="mt-2 text-sm text-muted">
          Resource ID: {resourceId}
        </p>
      </main>
    );
  }

  const venue = await getVenue(resource.venueId);

  console.log("BOOKING VENUE:", venue);

  if (!venue) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">
          Venue not found
        </h1>

        <p className="mt-2 text-sm text-muted">
          Resource: {resource.name}
        </p>

        <p className="mt-1 text-sm text-muted">
          Venue ID: {resource.venueId}
        </p>
      </main>
    );
  }

  const today = todayKey();

  const [booked, reserved, disabled] = await Promise.all([
    getBookedSlotIds(resource.id, today),
    getReservedSlotIds(resource.id, today),
    getDisabledSlotMap(resource.id, today),
  ]);

  const slots = generateSlotsForDate({
    resource,
    date: today,
    bookedSlotIds: booked,
    reservedSlotIds: reserved,
    disabledSlotIds: disabled,
  });

  return (
    <main className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">

      <Link
        href={`/sports/${resource.category}`}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to {resource.category}
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink">
          {resource.name}
        </h1>

        <p className="mt-1 text-sm text-muted">
          {venue.location}
        </p>

        <p className="mt-2 text-sm text-muted">
          ₹{resource.pricePerSlot} / {resource.slotDuration} minutes
        </p>
      </div>

      <BookingClient
        resource={resource}
        venue={venue}
        initialDate={today}
        initialSlots={slots}
      />

    </main>
  );
}
