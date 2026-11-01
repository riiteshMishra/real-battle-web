import { IndianRupee, ShieldCheck, Trophy, UserCheck } from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const termsOverviewItems = [
  {
    id: "fair-play",
    title: "Fair Play",
    description:
      "Cheating, hacking, exploits, match manipulation, collusion, and other unfair practices are prohibited.",
    icon: ShieldCheck,
  },

  {
    id: "tournament-rules",
    title: "Tournament Rules",
    description:
      "Players must follow tournament formats, match schedules, scoring, check-in, proof, and event-specific rules.",
    icon: Trophy,
  },

  {
    id: "account",
    title: "Account Responsibility",
    description:
      "Keep your account information accurate and protect your login credentials.",
    icon: UserCheck,
  },

  {
    id: "payments",
    title: "Payment & Prize",
    description:
      "Entry fees, transactions, refunds, rewards, and prize eligibility are governed by applicable tournament and platform rules.",
    icon: IndianRupee,
  },

  {
    id: "disputes",
    title: "Disputes & Enforcement",
    description:
      "Real Battle may review evidence, investigate violations, and take appropriate action under these Terms and tournament rules.",
    icon: ShieldCheck,
  },
] satisfies OverviewItem[];
