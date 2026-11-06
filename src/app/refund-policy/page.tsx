import type { Metadata } from "next";

import RefundPage from "./components/RefundPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the Real Battle Refund Policy to understand eligibility, refund conditions, cancellations, entry fees, and refund procedures for gaming tournaments.",
  keywords: [
    "Real Battle Refund Policy",
    "gaming tournament refund policy",
    "Free Fire tournament refund",
    "Real Battle refunds",
    "tournament entry fee refund",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Refund Policy",
    description:
      "Eligibility, refund conditions, cancellations and entry fee procedures for Real Battle tournaments.",
    type: "website",
    url: "/refund-policy",
    siteName: "Real Battle",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Refund Policy",
    description:
      "Eligibility, refund conditions, cancellations and entry fee procedures for Real Battle tournaments.",
  },
};

const Page = () => {
  return <RefundPage />;
};

export default Page;
