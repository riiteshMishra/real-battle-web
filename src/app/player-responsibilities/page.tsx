import type { Metadata } from "next";
import PlayerResponsibilitiesPage from "./components/PlayerResponsibilitiesPage";

export const metadata: Metadata = {
  title: "Player Responsibilities",

  description:
    "Understand what every Real Battle player is expected to do before, during and after participating in Free Fire tournaments and platform services.",

  keywords: [
    "Real Battle player responsibilities",
    "Free Fire tournament rules",
    "gaming player duties",
    "fair play responsibilities",
    "tournament participation rules",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/player-responsibilities",
  },

  openGraph: {
    images: ["/opengraph-image"],
    title: "Player Responsibilities",

    description:
      "Learn what every Real Battle player is expected to do before, during and after participating in Free Fire tournaments and platform services.",

    type: "website",

    url: "/player-responsibilities",

    siteName: "Real Battle",
  },

  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",

    title: "Player Responsibilities",

    description:
      "Understand player duties, fair play, account security and community conduct on Real Battle.",
  },
};

export default function PlayerResponsibilitiesRoute() {
  return <PlayerResponsibilitiesPage />;
}