import {
  Scale,
  ShieldCheck,
  Trophy,
  UserCheck,
  WalletCards,
} from "lucide-react";

export const termsOverviewData = [
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
      "Keep your account information accurate and protect your login credentials. Do not share or misuse your account.",
    icon: UserCheck,
  },
  {
    id: "payments-prizes",
    title: "Payments & Prizes",
    description:
      "Entry fees, transactions, refunds, rewards, and prize eligibility are governed by applicable tournament and platform rules.",
    icon: WalletCards,
  },
  {
    id: "disputes",
    title: "Disputes & Enforcement",
    description:
      "Real Battle may review evidence, investigate violations, and take appropriate action under these Terms and tournament rules.",
    icon: Scale,
  },
] as const;
