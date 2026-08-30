import { Waves, Dumbbell, Gamepad2, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SportCategory } from "@/types/resource";

const CONFIG: Record<
  SportCategory,
  { icon: typeof Waves; from: string; to: string }
> = {
  turf: { icon: Waves, from: "#00c37e", to: "#00754a" },
  badminton: { icon: Dumbbell, from: "#20b0ff", to: "#0b6fb8" },
  playstation: { icon: Gamepad2, from: "#7c6cff", to: "#4630b0" },
  cricket: { icon: CircleDot, from: "#ffb020", to: "#c96a05" },
};

export function SportVisual({
  category,
  className,
  iconClassName,
}: {
  category: SportCategory;
  className?: string;
  iconClassName?: string;
}) {
  const { icon: Icon, from, to } = CONFIG[category];
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-white/10" />
      <Icon className={cn("relative h-10 w-10 text-white/90", iconClassName)} strokeWidth={1.75} />
    </div>
  );
}
