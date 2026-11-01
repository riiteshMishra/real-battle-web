import { CircleCheck, CreditCard, RotateCcw, ShieldCheck } from "lucide-react";

import type { OverviewItem } from "@/src/components/doc/overview/types";

export const refundOverviewItems = [
  {
    id: "general-refund",
    title: "General Refunds",
    description:
      "Understand the general conditions and circumstances under which refunds may be available for Real Battle services and tournaments.",
    icon: RotateCcw,
  },

  {
    id: "tournament-cancellation",
    title: "Tournament Cancellation",
    description:
      "Learn what happens to entry fees and refunds when a tournament is cancelled, postponed, or affected by platform-related issues.",
    icon: ShieldCheck,
  },

  {
    id: "failed-payment",
    title: "Payment Issues",
    description:
      "Information about failed, incomplete, duplicate, or unsuccessful payments and how eligible payment issues are handled.",
    icon: CreditCard,
  },

  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    description:
      "Understand the circumstances, conditions, and requirements that determine whether you may be eligible for a refund.",
    icon: CircleCheck,
  },
] satisfies OverviewItem[];
