"use client";

import { useMemo, useState } from "react";
import type { Tournament } from "@/src/services/tournaments/types";
import type { TournamentFilter } from "@/src/sections/tournaments/types";

const PAGE_SIZE = 3;

/**
 * Filtering and incremental pagination for the tournament board. Kept out of
 * the presentational components so the section renders from data only.
 */
export function useTournamentFilters(
  items: Tournament[] | undefined,
  initialVisible: number,
) {
  const [filter, setFilter] = useState<TournamentFilter>("all");
  const [visible, setVisible] = useState(initialVisible);

  const filtered = useMemo(() => {
    if (!items) return [];

    switch (filter) {
      case "solo":
        return items.filter((item) => item.mode === "solo");
      case "squad":
        return items.filter((item) => item.mode === "squad");
      case "clash-squad":
        return items.filter((item) => item.mode === "clash-squad");
      case "free":
        return items.filter((item) => item.entryFee === 0);
      default:
        return items;
    }
  }, [items, filter]);

  const selectFilter = (next: TournamentFilter) => {
    setFilter(next);
    setVisible(initialVisible);
  };

  return {
    filter,
    selectFilter,
    visibleItems: filtered.slice(0, visible),
    total: filtered.length,
    hasMore: filtered.length > visible,
    loadMore: () => setVisible((count) => count + PAGE_SIZE),
  };
}
