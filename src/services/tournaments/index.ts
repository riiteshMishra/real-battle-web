import { demoTournaments } from "@/src/data/tournaments";
import type { TournamentFeed } from "./types";

export type { Tournament, TournamentFeed, TournamentMode, TournamentStatus, TeamFormat } from "./types";

/**
 * Tournament data adapter.
 *
 * Status: DEMO MODE.
 *
 * The current codebase exposes no verified public tournament endpoint. Instead
 * of inventing a route such as /api/v1/tournaments, this adapter returns clearly
 * labelled sample data. When the backend contract is confirmed:
 *
 *   1. add the endpoint to src/services/apis-data.ts
 *   2. map the response into TournamentFeed
 *   3. switch `isDemo` to false
 *
 * The UI already handles loading, error, empty and success states.
 */
export async function getTournaments(): Promise<TournamentFeed> {
  await new Promise((resolve) => setTimeout(resolve, 450));

  return {
    items: demoTournaments,
    isDemo: true,
    note: "Demo mode: these are sample match cards. Live tournament data will replace them once the verified tournament API is connected.",
    updatedAt: null,
  };
}
