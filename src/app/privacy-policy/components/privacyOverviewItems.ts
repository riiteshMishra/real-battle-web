import {
  CheckCircle2,
  ShieldCheck,
  Share2,
  UserRoundCheck,
} from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const privacyOverviewItems = [
  {
    id: "what-we-collect",
    icon: CheckCircle2,
    title: "What Information We Collect",
    description:
      "Real Battle may collect account information, player and Free Fire gaming information, tournament participation data, match results, submitted proof, device information, and other information required to provide our online gaming and tournament services.",
  },
  {
    id: "why-we-collect",
    icon: ShieldCheck,
    title: "Why We Collect Your Information",
    description:
      "We use information to manage player accounts, operate Free Fire tournaments, verify matches and results, maintain platform security, prevent fraud and abuse, provide customer support, and improve Real Battle services.",
  },
  {
    id: "who-we-share",
    icon: Share2,
    title: "Who We May Share Information With",
    description:
      "Where necessary, information may be shared with trusted service providers, payment providers, authentication services, tournament organizers, security providers, and other providers that help us operate Real Battle.",
  },
  {
    id: "privacy-rights",
    icon: UserRoundCheck,
    title: "Your Privacy Rights",
    description:
      "Depending on applicable law, you may have rights to request access, correction, deletion, or other assistance regarding your personal information and privacy requests.",
  },
] satisfies OverviewItem[];
