import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedVenues from "@/components/home/FeaturedVenues";
import { SportCard } from "@/components/sports/SportCard";
import { SPORT_CATEGORIES } from "@/types/resource";
import { getResources, getVenues } from "@/lib/firestore";

export default async function HomePage() {
  const [resources, venues] = await Promise.all([getResources(), getVenues()]);
  const venue = venues[0];

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-ink">Sports categories</h2>
        <p className="mt-1 text-sm text-muted">Pick a sport to see live availability.</p>
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
      </section>

      {venue && <FeaturedVenues venue={venue} resources={resources} />}

      <HowItWorks />
    </>
  );
}
