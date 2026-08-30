"use client";

import { useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDaysKey, formatDateKeyShort, formatMonthYear, todayKey, cn } from "@/lib/utils";
import { MAX_PREBOOK_DAYS } from "@/lib/config";

export function DateSelector({
  selectedDate,
  onSelect,
}: {
  selectedDate: string;
  onSelect: (date: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const today = todayKey();

  const dates = useMemo(
    () => Array.from({ length: MAX_PREBOOK_DAYS + 1 }, (_, i) => addDaysKey(today, i)),
    [today]
  );

  function scrollBy(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">{formatMonthYear(selectedDate)}</p>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => scrollBy(-240)}
            aria-label="Scroll dates left"
            className="rounded-full border border-border p-1.5 text-muted hover:bg-bg hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(240)}
            aria-label="Scroll dates right"
            className="rounded-full border border-border p-1.5 text-muted hover:bg-bg hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        role="listbox"
        aria-label="Select a date"
        className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
      >
        {dates.map((date, i) => {
          const isSelected = date === selectedDate;
          const isToday = date === today;
          const { day, weekday } = formatDateKeyShort(date);
          return (
            <button
              key={date}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => onSelect(date)}
              className={cn(
                "flex w-16 shrink-0 flex-col items-center gap-0.5 rounded-xl border-2 py-2.5 text-center transition-colors",
                isSelected
                  ? "border-primary bg-primary-light text-primary-dark"
                  : "border-border bg-card text-ink hover:border-primary/40"
              )}
            >
              <span className="text-[11px] font-medium text-muted">{weekday}</span>
              <span className="text-lg font-bold leading-none">{day}</span>
              {isToday && (
                <span className="mt-0.5 text-[10px] font-semibold text-primary">TODAY</span>
              )}
              {!isToday && i === dates.length - 1 && (
                <span className="mt-0.5 text-[9px] font-medium text-muted">MAX</span>
              )}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 text-xs text-muted">
        Pre-booking available up to {MAX_PREBOOK_DAYS} days ahead.
      </p>
    </div>
  );
}
