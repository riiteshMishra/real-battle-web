"use client";

import { cn } from "@/lib/utils";

export type TournamentFilter = "all" | "solo" | "squad" | "clash-squad" | "free";

const filters: { id: TournamentFilter; label: string }[] = [
  { id: "all", label: "All Matches" },
  { id: "solo", label: "Solo Battle Royale" },
  { id: "squad", label: "Squad Classic" },
  { id: "clash-squad", label: "Clash Squad 4v4" },
  { id: "free", label: "Free Entry Scrims" },
];

interface TournamentFiltersProps {
  value: TournamentFilter;
  onChange: (value: TournamentFilter) => void;
}

const TournamentFilters = ({ value, onChange }: TournamentFiltersProps) => {
  return (
    <div
      role="group"
      aria-label="Filter tournaments"
      className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {filters.map((filter) => {
        const isActive = value === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={cn(
              "h-10 shrink-0 snap-start cursor-pointer rounded-full border px-4 text-[13px] font-medium whitespace-nowrap transition-all",
              isActive
                ? "border-violet-400/60 bg-violet-500/20 text-violet-100 shadow-[0_0_24px_rgba(139,92,246,0.18)]"
                : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default TournamentFilters;
