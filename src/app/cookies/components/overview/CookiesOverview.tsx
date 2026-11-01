import { Cookie, LockKeyhole, ShieldCheck, Settings2 } from "lucide-react";

import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { cookiesData } from "@/src/content/cookies/cookies-index";

const cookiesOverviewItems = [
  {
    id: "essential-cookies",
    title: "Essential Cookies",
    description:
      "Cookies required for core platform functionality and essential services.",
    icon: Cookie,
  },
  {
    id: "authentication-cookies",
    title: "Authentication",
    description:
      "Cookies used to maintain secure login sessions and authentication.",
    icon: LockKeyhole,
  },
  {
    id: "cookie-information",
    title: "Cookie Information",
    description:
      "Information about how Real Battle uses cookies and related technologies.",
    icon: ShieldCheck,
  },
  {
    id: "manage-cookies",
    title: "Cookie Management",
    description:
      "Information about managing or controlling cookies in your browser.",
    icon: Settings2,
  },
] as const;

const CookiesOverview = () => {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description={`An overview of the cookie-related topics covered by ${cookiesData.title}.`}
      items={cookiesOverviewItems}
    />
  );
};

export default CookiesOverview;
