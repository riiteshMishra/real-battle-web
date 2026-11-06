import { demoTournaments } from "@/src/data/tournaments";
import type { TournamentFeed } from "./types";

export type {
  Tournament,
  TournamentFeed,
  TournamentMode,
  TournamentStatus,
  TeamFormat,
} from "./types";

/**
 * Tournament data adapter.
 *
 * Status: DEMO MODE.
 *
 * These tournaments are sample previews.
 * Download the Real Battle app to explore
 * and participate in real tournaments.
 */
export async function getTournaments(): Promise<TournamentFeed> {
  await new Promise((resolve) => setTimeout(resolve, 450));

  return {
    items: demoTournaments,
    isDemo: true,
    note: "You're viewing sample tournaments. Download the Real Battle app to explore real tournaments, join matches, compete with players, and enjoy the battle!",
    updatedAt: null,
  };
}
