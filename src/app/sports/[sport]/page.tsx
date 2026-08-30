import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ResourceCard } from "@/components/sports/ResourceCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SPORT_CATEGORIES, type SportCategory } from "@/types/resource";
import { getResourcesByCategory, getBookedSlotIds, getReservedSlotIds, getDisabledSlotMap } from "@/lib/firestore";
import { generateSlotsForDate } from "@/lib/slots";
import { todayKey } from "@/lib/utils";

export function generateStaticParams() {
  return SPORT_CATEGORIES.map((s) => ({ sport: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sport: string }>;
}): Promise<Metadata> {
  const { sport } = await params;
  const meta = SPORT_CATEGORIES.find((s) => s.id === sport);
  if (!meta) return { title: "Sport not found" };
  return {
    title: `${meta.label} Booking`,
    description: `Browse and book ${meta.label.toLowerCase()} venues on Playzo. ${meta.description}.`,
  };
}

export default async function SportResourcesPage({
  params,
}: {
  params: Promise<{ sport: string }>;
}) {
  const { sport } = await params;
  const meta = SPORT_CATEGORIES.find((s) => s.id === sport);
  if (!meta) notFound();

  const resources = await getResourcesByCategory(sport as SportCategory);
  const today = todayKey();

  const availability = await Promise.all(
    resources.map(async (r) => {
      const [booked, reserved, disabled] = await Promise.all([
        getBookedSlotIds(r.id, today),
        getReservedSlotIds(r.id, today),
        getDisabledSlotMap(r.id, today),
      ]);
      const slots = generateSlotsForDate({
        resource: r,
        date: today,
        bookedSlotIds: booked,
        reservedSlotIds: reserved,
        disabledSlotIds: disabled,
      });
      return slots.filter((s) => s.status === "AVAILABLE").length;
    })
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/sports" className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary">
        <ChevronLeft className="h-4 w-4" /> All sports
      </Link>

      <h1 className="text-3xl font-bold text-ink">{meta.label} venues</h1>
      <p className="mt-1 text-sm text-muted">{meta.description}. Pick a court to see live slot availability.</p>

      {resources.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No venues in this category yet"
            description="Check back soon, or browse another sport."
            action={
              <Link href="/sports" className="text-sm font-semibold text-primary">
                Browse other sports
              </Link>
            }
          />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <ResourceCard key={r.id} resource={r} availableToday={availability[i]} />
          ))}
        </div>
      )}
    </div>
  );
}
