import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { playerResponsibilitiesData } from "@/src/content/player-responsibilities/player-responsibilities-index";
import { UserCheck } from "lucide-react";

const indicators = ["Player Duties", "Fair Play", "Community Standards"];

export default function PlayerResponsibilitiesHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: UserCheck,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Play Fair. Respect Everyone. Own Your Game.",
        description: (
          <>
            Har great competition responsible players se start hoti hai. Apni
            responsibilities samjho aur Real Battle ko fair, competitive aur
            enjoyable gaming community banane mein help karo.
          </>
        ),
      }}
      updateProps={{ date: playerResponsibilitiesData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}