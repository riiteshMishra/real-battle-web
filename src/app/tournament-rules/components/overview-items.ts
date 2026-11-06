import { UserCheck, ClipboardList, ShieldCheck, Target, FileCheck, Trophy } from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const tournamentRulesOverviewItems = [
  {
    id: "eligibility",
    title: "Eligibility",
    description:
      "Register karne se pehle har tournament ke liye published requirements meet karo.",
    icon: UserCheck,
  },
  {
    id: "registration",
    title: "Registration",
    description:
      "Sahi tarah register karo aur deadline se pehle apna slot confirm karo.",
    icon: ClipboardList,
  },
  {
    id: "match-conduct",
    title: "Match Conduct",
    description:
      "Fairly play karo aur saare match aur room rules follow karo.",
    icon: ShieldCheck,
  },
  {
    id: "scoring",
    title: "Scoring",
    description:
      "Event ke liye points aur tie-breakers kaise kaam karte hain samjho.",
    icon: Target,
  },
  {
    id: "verification",
    title: "Verification",
    description:
      "Genuine evidence submit karo aur result checks mein cooperate karo.",
    icon: FileCheck,
  },
  {
    id: "rewards",
    title: "Rewards",
    description:
      "Rewards verified results aur rule compliance par depend karte hain.",
    icon: Trophy,
  },
] satisfies OverviewItem[];