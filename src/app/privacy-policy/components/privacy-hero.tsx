import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { privacyData } from "@/src/content/privacy/privacy-index";
import { ShieldCheckIcon } from "lucide-react";

const indicators = ["Data Protection", "Secure Gaming", "Privacy focused"];

export default function PrivacyHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: ShieldCheckIcon,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: "Privacy Policy",
        description: (
          <>
            Learn how{" "}
            <strong className="font-semibold text-foreground">Real Battle</strong>{" "}
            collects, uses, stores, and protects your{" "}
            <strong className="font-semibold text-foreground">
              personal information
            </strong>{" "}
            when you participate in our{" "}
            <strong className="font-semibold text-foreground">
              Free Fire tournaments and online gaming services
            </strong>
            .
          </>
        ),
      }}
      updateProps={{ date: privacyData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}
