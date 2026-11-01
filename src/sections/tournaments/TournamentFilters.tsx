"use client";

import { cn } from "@/lib/utils";
import {
  tournamentFilters,
  type TournamentFilter,
} from "@/src/sections/tournaments/types";

interface TournamentFiltersProps {
  value: TournamentFilter;
  onChange: (value: TournamentFilter) => void;
}

export default function TournamentFilters({
  value,
  onChange,
}: TournamentFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter tournaments"
      className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {tournamentFilters.map((filter) => {
        const isActive = value === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={cn(
              "h-10 shrink-0 snap-start cursor-pointer rounded-full border px-4 text-[13px] font-medium whitespace-nowrap transition-colors",
              isActive
                ? "border-brand bg-brand-soft text-brand"
                : "border-border bg-card text-muted-foreground hover:border-dim hover:text-foreground",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
