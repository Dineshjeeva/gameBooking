import type { Metadata } from "next";
import { SportCard } from "@/components/sports/SportCard";
import { SPORT_CATEGORIES } from "@/types/resource";
import { getResources } from "@/lib/firestore";

export const metadata: Metadata = {
  title: "Browse Sports",
  description: "Browse turf, badminton, PlayStation and cricket venues available to book on Playzo.",
};

export default async function SportsPage() {
  const resources = await getResources();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="pz-fade-up">
        <h1 className="text-3xl font-bold text-ink">Browse sports</h1>
        <p className="mt-1 text-sm text-muted">Choose a category to see venues and live availability.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SPORT_CATEGORIES.map((sport) => (
          <SportCard
            key={sport.id}
            category={sport.id}
            label={sport.label}
            description={sport.description}
            resourceCount={resources.filter((r) => r.category === sport.id).length}
          />
        ))}
      </div>
    </div>
  );
}
