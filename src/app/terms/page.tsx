import type { Metadata } from "next";
import TermsPage from "./components/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",

  description:
    "Read the Real Battle Terms of Service governing Free Fire tournaments, online gaming services, accounts, payments, prizes, fair play, disputes, and tournament participation.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/terms",
  },

  openGraph: {
    images: ["/opengraph-image"],
    title: "Terms of Service",

    description:
      "Read the terms and conditions for Real Battle accounts, Free Fire tournaments, fair play, payments, prizes, disputes, and online gaming services.",

    type: "website",

    url: "/terms",

    siteName: "Real Battle",
  },

  twitter: {
    images: ["/opengraph-image"],
    card: "summary",

    title: "Terms of Service",

    description:
      "Terms and conditions for Real Battle accounts, Free Fire tournaments, fair play, payments, prizes, and online gaming services.",
  },
};

export default function TermsRoute() {
  return <TermsPage />;
}
