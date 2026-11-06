import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { tournamentRulesData } from "@/src/content/tournament-rules/tournament-rules-index";
import { Trophy } from "lucide-react";

const indicators = ["Tournament Rules", "Match Conduct", "Fair Competition"];

export default function TournamentRulesHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: Trophy,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Know the Rules. Enter the Battle.",
        description: (
          <>
            Compete karne se pehle tournament requirements, match procedures,
            scoring, verification aur dispute handling samjho.
          </>
        ),
      }}
      updateProps={{ date: tournamentRulesData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}