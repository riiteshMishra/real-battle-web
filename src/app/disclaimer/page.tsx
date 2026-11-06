import type { Metadata } from "next";
import DisclaimerRoute from "./components/DisclaimerRoute";

export const metadata: Metadata = {
  title: "Disclaimer",

  description:
    "Read the Real Battle Disclaimer covering gaming content, tournament information, third-party services, platform availability, and limitations of responsibility.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/disclaimer",
  },

  openGraph: {
    images: ["/opengraph-image"],
    title: "Disclaimer",
    description:
      "Important information about Real Battle gaming services, tournaments, third-party services, and platform limitations.",
    type: "website",
    url: "/disclaimer",
    siteName: "Real Battle",
  },

  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Disclaimer",
    description:
      "Important information about Real Battle gaming services, tournaments, and platform limitations.",
  },
};

const DisclaimerPage = () => {
  return <DisclaimerRoute />;
};

export default DisclaimerPage;
