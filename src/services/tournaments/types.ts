export type TournamentMode = "solo" | "squad" | "clash-squad" | "scrim";

export type TournamentStatus =
  | "registration-open"
  | "starting-soon"
  | "live"
  | "completed";

export type TeamFormat = "Solo" | "Duo" | "Squad";

export interface Tournament {
  id: string;
  title: string;
  mode: TournamentMode;
  map: string;
  format: TeamFormat;
  scheduleLabel: string;
  status: TournamentStatus;
  entryFee: number;
  prizePool: number;
  perKill: number;
  booyahBonus: number;
  slotsTotal: number;
  slotsFilled: number;
}

export interface TournamentFeed {
  items: Tournament[];
  isDemo: boolean;
  note: string;
  updatedAt: string | null;
}
