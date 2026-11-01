export type TournamentFilter =
  | "all"
  | "solo"
  | "squad"
  | "clash-squad"
  | "free";

export const tournamentFilters: { id: TournamentFilter; label: string }[] = [
  { id: "all", label: "All Matches" },
  { id: "solo", label: "Solo Battle Royale" },
  { id: "squad", label: "Squad Classic" },
  { id: "clash-squad", label: "Clash Squad 4v4" },
  { id: "free", label: "Free Entry Scrims" },
];
