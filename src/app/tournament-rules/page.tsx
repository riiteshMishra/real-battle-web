import type { Metadata } from "next";
import TournamentRulesPage from "./components/TournamentRulesPage";

export const metadata: Metadata = {
  title: "Tournament Rules",

  description:
    "Understand Real Battle tournament requirements, match procedures, scoring, verification and dispute handling before you compete.",

  keywords: [
    "Real Battle tournament rules",
    "Free Fire tournament rules",
    "esports tournament rules",
    "tournament scoring",
    "match verification",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/tournament-rules",
  },

  openGraph: {
    images: ["/opengraph-image"],
    title: "Tournament Rules",

    description:
      "Learn how Real Battle tournaments work, including eligibility, registration, match conduct, scoring and verification.",

    type: "website",

    url: "/tournament-rules",

    siteName: "Real Battle",
  },

  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",

    title: "Tournament Rules",

    description:
      "Understand tournament requirements, match procedures, scoring and verification on Real Battle.",
  },
};

export default function TournamentRulesRoute() {
  return <TournamentRulesPage />;
}