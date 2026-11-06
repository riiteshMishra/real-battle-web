import { Lock, ShieldCheck, UserCheck, CalendarDays, FileCheck, BookOpen } from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const playerResponsibilitiesOverviewItems = [
  {
    id: "fair-play",
    title: "Fair Play",
    description:
      "Fairly compete karo aur kabhi bhi cheats, exploits ya match manipulation use mat karo.",
    icon: ShieldCheck,
  },
  {
    id: "respect",
    title: "Respect",
    description:
      "Har interaction mein players, teams aur staff ke saath respect se pesh aao.",
    icon: UserCheck,
  },
  {
    id: "account-security",
    title: "Account Security",
    description:
      "Apna account secure rakho aur login credentials ya OTPs kabhi share mat karo.",
    icon: Lock,
  },
  {
    id: "match-participation",
    title: "Match Participation",
    description:
      "On time join karo, instructions follow karo aur matches delay mat karo.",
    icon: CalendarDays,
  },
  {
    id: "honest-reporting",
    title: "Honest Reporting",
    description:
      "Genuine evidence submit karo aur issues honestly report karo.",
    icon: FileCheck,
  },
  {
    id: "rule-compliance",
    title: "Rule Compliance",
    description:
      "Platform rules aur tournament-specific instructions follow karo.",
    icon: BookOpen,
  },
] satisfies OverviewItem[];