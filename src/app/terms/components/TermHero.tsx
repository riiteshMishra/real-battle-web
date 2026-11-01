import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { termsData } from "@/src/content/terms/terms-index";
import { FileText } from "lucide-react";

const indicators = ["Fair Play", "Tournament Rules", "Player Protection"];

export default function TermHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: FileText,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Terms of Service",
        description: (
          <>
            Read the{" "}
            <strong className="font-semibold text-foreground">
              Real Battle Terms of Service
            </strong>{" "}
            governing your use of our{" "}
            <strong className="font-semibold text-foreground">
              online gaming platform
            </strong>
            , Free Fire tournaments, accounts, payments, prizes, and tournament
            participation.
          </>
        ),
      }}
      updateProps={{ date: termsData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}
