import { File } from "lucide-react";
import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const indicators = [
  "Important Information",
  "Gaming Services",
  "Platform Limitations",
];

export default function DisclaimerHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: File,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Disclaimer",
        description: (
          <>
            Important information about{" "}
            <strong className="font-semibold text-foreground">
              Real Battle gaming platform, tournaments, content, and third-party
              services
            </strong>
            , including limitations of responsibility.
          </>
        ),
      }}
      updateProps={{ date: disclaimerData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}
