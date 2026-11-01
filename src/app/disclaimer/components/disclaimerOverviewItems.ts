import { ExternalLink, Gamepad2, Info, ShieldCheck } from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const disclaimerOverviewItems = [
  {
    id: "general-information",
    title: "General Information",
    description:
      "Important information about Real Battle, its services, content, and general use of the platform.",
    icon: Info,
  },

  {
    id: "gaming-tournaments",
    title: "Gaming & Tournaments",
    description:
      "Information regarding gaming services, tournaments, participation, results, and related activities.",
    icon: Gamepad2,
  },

  {
    id: "third-party-services",
    title: "Third-Party Services",
    description:
      "Information about external platforms, services, links, and third-party content that may be used or referenced.",
    icon: ExternalLink,
  },

  {
    id: "platform-limitations",
    title: "Platform Limitations",
    description:
      "Important limitations regarding platform availability, content, services, and Real Battle's responsibility.",
    icon: ShieldCheck,
  },
] satisfies OverviewItem[];
