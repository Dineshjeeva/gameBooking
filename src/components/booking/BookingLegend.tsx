const ITEMS = [
  { label: "Available", swatchClass: "bg-[var(--pz-slot-available-bg)] border border-border" },
  { label: "Selected", swatchClass: "bg-primary" },
  { label: "Booked", swatchClass: "bg-[var(--pz-slot-booked-bg)] border border-[var(--pz-slot-booked-text)]" },
  { label: "Unavailable", swatchClass: "bg-[var(--pz-slot-disabled-bg)] border border-border" },
];

export function BookingLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5" aria-hidden="false">
      {ITEMS.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5 text-xs text-muted">
          <span className={`h-3 w-3 shrink-0 rounded-full ${item.swatchClass}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
