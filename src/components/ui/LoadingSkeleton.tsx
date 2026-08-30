import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-border/70", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <Skeleton className="mb-3 h-32 w-full rounded-xl" />
      <Skeleton className="mb-2 h-4 w-2/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}

export function CardSkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function DateSelectorSkeleton() {
  return (
    <div className="flex gap-2 overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton key={i} className="h-20 w-16 shrink-0 rounded-xl" />
      ))}
    </div>
  );
}

export function SlotGridSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
      {Array.from({ length: 18 }).map((_, i) => (
        <Skeleton key={i} className="h-11 w-full rounded-lg" />
      ))}
    </div>
  );
}

export function SummarySkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Skeleton className="mb-4 h-5 w-1/2" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-2/3" />
      <Skeleton className="h-10 w-full rounded-xl" />
    </div>
  );
}
