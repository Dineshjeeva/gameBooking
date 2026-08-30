import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SportVisual } from "@/components/ui/SportVisual";
import type { SportCategory } from "@/types/resource";

export function SportCard({
  category,
  label,
  description,
  resourceCount,
}: {
  category: SportCategory;
  label: string;
  description: string;
  resourceCount: number;
}) {
  return (
    <Link
      href={`/sports/${category}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <SportVisual
        category={category}
        className="h-32 w-full"
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-ink">
          {label}
        </h3>

        <p className="mt-1 flex-1 text-sm text-muted">
          {description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-muted">
            {resourceCount}{" "}
            {resourceCount === 1 ? "option" : "options"}
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-1.5">
            Book Now
            <ArrowRight className="h-4 w-4 transition-all" />
          </span>
        </div>
      </div>
    </Link>
  );
}
