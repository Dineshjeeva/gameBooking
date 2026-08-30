import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResource, getVenue, getBookedSlotIds, getReservedSlotIds, getDisabledSlotMap } from "@/lib/firestore";
import { generateSlotsForDate } from "@/lib/slots";
import { todayKey } from "@/lib/utils";

import { BookingHeader } from "@/components/booking/BookingHeader";
import { BookingLegend } from "../BookingLegend";
import { BookingClient } from "../BookingClient";

interface PageProps {
  params: Promise<{
    resourceId: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { resourceId } = await params;

  const resource = await getResource(resourceId);

  if (!resource) {
    return {
      title: "Resource not found",
    };
  }

  return {
    title: `Book ${resource.name}`,
    description: `Book ${resource.name} on Playzo.`,
  };
}

export default async function BookingPage({ params }: PageProps) {
  const { resourceId } = await params;

  const resource = await getResource(resourceId);

  if (!resource) {
    notFound();
  }

  const venue = await getVenue(resource.venueId);

  if (!venue) {
    notFound();
  }

  const date = todayKey();

  const [bookedSlotIds, reservedSlotIds, disabledSlotMap] =
    await Promise.all([
      getBookedSlotIds(resource.id, date),
      getReservedSlotIds(resource.id, date),
      getDisabledSlotMap(resource.id, date),
    ]);

  const slots = generateSlotsForDate({
    resource,
    date,
    bookedSlotIds,
    reservedSlotIds,
    disabledSlotIds: disabledSlotMap,
  });

  return (
    <main className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
      <BookingHeader
        resource={resource}
        venue={venue}
      />

      <div className="mt-6">
        <BookingLegend />
      </div>

      <div className="mt-8">
        <BookingClient
          resource={resource}
          venue={venue}
          initialDate={date}
          initialSlots={slots}
        />
      </div>
    </main>
  );
}

