import type { Metadata } from "next";
import Footer from "@/src/components/layout/Footer";
import HeroSection from "@/src/sections/hero/HeroSection";
import TournamentSection from "@/src/sections/tournaments/TournamentSection";
import HowItWorksSection from "@/src/sections/how-it-works/HowItWorksSection";
import RewardsSection from "@/src/sections/rewards/RewardsSection";
import FairPlaySection from "@/src/sections/fair-play/FairPlaySection";
import DownloadSection from "@/src/sections/download/DownloadSection";
import CommunitySection from "@/src/sections/community/CommunitySection";
import FaqSection from "@/src/sections/faq/FaqSection";
import FinalCtaSection from "@/src/sections/final-cta/FinalCtaSection";

export const metadata: Metadata = {
  description:
    "Real Battle is India's competitive Free Fire tournament platform. Join solo, squad and Clash Squad battles, get room details in the app, and track verified results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Real Battle — India's Competitive Free Fire Arena",
    description:
      "India's competitive gaming arena for Free Fire. Solo, squad and Clash Squad tournaments with verified results.",
    url: "/",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Real Battle — India's Competitive Free Fire Arena",
    description:
      "Competitive Free Fire tournaments for Indian players. Solo, squad and Clash Squad battles in one arena.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Real Battle — India's Competitive Free Fire Arena",
  description:
    "Real Battle is India's competitive Free Fire tournament platform. Join solo, squad and Clash Squad battles, get room details in the app, and track verified results.",
  url: "https://realbattle.in/",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Real Battle",
    url: "https://realbattle.in",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <TournamentSection />
        <HowItWorksSection />
        <RewardsSection />
        <FairPlaySection />
        <DownloadSection />
        <CommunitySection />
        <FaqSection limit={8} showViewAll />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
