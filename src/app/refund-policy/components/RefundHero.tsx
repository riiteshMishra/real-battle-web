import { IndianRupee } from "lucide-react";
import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { refundData } from "@/src/content/refund/refund-index";

const indicators = [
  "Refund Eligibility",
  "Cancellation Rules",
  "Payment Protection",
];

export default function RefundHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: IndianRupee,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Refund Policy",
        description: (
          <>
            Understand the{" "}
            <strong className="font-semibold text-foreground">
              Real Battle Refund Policy
            </strong>{" "}
            covering tournament entry fees, cancellations, refund eligibility,
            payment issues, and applicable refund conditions.
          </>
        ),
      }}
      updateProps={{ date: refundData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}
