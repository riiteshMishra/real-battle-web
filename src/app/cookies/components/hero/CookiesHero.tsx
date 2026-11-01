import HeroTemplet from "@/src/components/doc/hero/HeroTemplet";
import { cookiesData } from "@/src/content/cookies/cookies-index";
import { Cookie } from "lucide-react";

const indicators = ["Essential Cookies", "Secure Sessions", "Authentication"];

export default function CookiesHero() {
  return (
    <HeroTemplet
      heroBrand={{
        icon: Cookie,
        title: "Real Battle",
        subtitle: "Free Fire gaming & tournament platform.",
      }}
      heroContent={{
        title: cookiesData.title,
        description: cookiesData.description,
      }}
      updateProps={{ date: cookiesData.lastUpdated }}
      heroTrust={{ indicators }}
    />
  );
}
