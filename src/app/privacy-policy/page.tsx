import type { Metadata } from "next";
import { PrivacyPage } from "./components/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Read the Real Battle Privacy Policy to learn how we collect, use, store, and protect personal information for Free Fire tournaments and online gaming services.",

  keywords: [
    "Real Battle Privacy Policy",
    "Free Fire tournament privacy",
    "Free Fire gaming privacy",
    "online gaming privacy policy",
    "tournament data protection",
    "gaming platform privacy",
    "personal data protection",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/privacy-policy",
  },

  openGraph: {
    images: ["/opengraph-image"],
    title: "Privacy Policy",
    description:
      "Learn how Real Battle protects your personal information when you participate in Free Fire tournaments and online gaming services.",
    type: "website",
    url: "/privacy-policy",
    siteName: "Real Battle",
  },

  twitter: {
    images: ["/opengraph-image"],
    card: "summary",
    title: "Privacy Policy",
    description:
      "Learn how Real Battle collects, uses, stores, and protects your information for Free Fire tournaments and online gaming services.",
  },
};

const PrivacyRoute = () => {
  return <PrivacyPage />;
};
export default PrivacyRoute;
