import type { Tournament } from "@/src/services/tournaments/types";
import Reveal from "@/src/components/ui/Reveal";
import TournamentCard from "@/src/sections/tournaments/TournamentCard";

interface TournamentGridProps {
  tournaments: Tournament[];
  isDemo?: boolean;
}

export default function TournamentGrid({
  tournaments,
  isDemo,
}: TournamentGridProps) {
  return (
    <Reveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
          isDemo={isDemo}
        />
      ))}
    </Reveal>
  );
}
