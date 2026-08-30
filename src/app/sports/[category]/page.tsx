import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { ResourceCard } from "@/components/sports/ResourceCard";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  SPORT_CATEGORIES,
  type SportCategory,
} from "@/types/resource";

import {
  getResourcesByCategory,
  getBookedSlotIds,
  getReservedSlotIds,
  getDisabledSlotMap,
} from "@/lib/firestore";

import { generateSlotsForDate } from "@/lib/slots";
import { todayKey } from "@/lib/utils";


// ---------------------------------------------------------
// Static routes
// /sports/turf
// /sports/badminton
// /sports/playstation
// /sports/cricket
// ---------------------------------------------------------

export function generateStaticParams() {
  return SPORT_CATEGORIES.map((sport) => ({
    category: sport.id,
  }));
}


// ---------------------------------------------------------
// Metadata
// ---------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  const sport = SPORT_CATEGORIES.find(
    (item) => item.id === category
  );

  if (!sport) {
    return {
      title: "Sport not found",
    };
  }

  return {
    title: `${sport.label} Booking`,
    description: `Browse and book ${sport.label.toLowerCase()} venues on Playzo.`,
  };
}


// ---------------------------------------------------------
// Page
// ---------------------------------------------------------

export default async function SportCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Check category
  const sport = SPORT_CATEGORIES.find(
    (item) => item.id === category
  );

  if (!sport) {
    notFound();
  }

  const resources = await getResourcesByCategory(
    category as SportCategory
  );

  const today = todayKey();

  // -------------------------------------------------------
  // Calculate today's available slots
  // -------------------------------------------------------

  const availability = await Promise.all(
    resources.map(async (resource) => {
      const [
        bookedSlotIds,
        reservedSlotIds,
        disabledSlotMap,
      ] = await Promise.all([
        getBookedSlotIds(resource.id, today),
        getReservedSlotIds(resource.id, today),
        getDisabledSlotMap(resource.id, today),
      ]);

      const slots = generateSlotsForDate({
        resource,
        date: today,
        bookedSlotIds,
        reservedSlotIds,
        disabledSlotIds: disabledSlotMap,
      });

      return slots.filter(
        (slot) => slot.status === "AVAILABLE"
      ).length;
    })
  );

  // -------------------------------------------------------
  // UI
  // -------------------------------------------------------

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Back */}
      <Link
        href="/sports"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary"
      >
        <ChevronLeft className="h-4 w-4" />
        All sports
      </Link>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-ink">
          {sport.label} venues
        </h1>

        <p className="mt-1 text-sm text-muted">
          {sport.description}. Pick a resource to see live slot
          availability.
        </p>
      </div>

      {/* Empty */}
      {resources.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title={`No ${sport.label.toLowerCase()} resources yet`}
            description="There are currently no active resources in this category."
            action={
              <Link
                href="/sports"
                className="text-sm font-semibold text-primary"
              >
                Browse other sports
              </Link>
            }
          />
        </div>
      ) : (
        /* Resources */
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              availableToday={availability[index]}
            />
          ))}
        </div>
      )}

    </main>
  );
}
