import type { Metadata } from "next";
import Footer from "@/src/components/common/footer/Footer";
import PageHero from "@/src/components/marketing/page-hero";
import TournamentShowcase from "@/src/components/marketing/tournaments/tournament-showcase";
import HowItWorks from "@/src/components/marketing/how-it-works";
import FinalCta from "@/src/components/marketing/final-cta";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Tournaments",
  description:
    "Browse Real Battle Free Fire tournaments: solo Battle Royale, squad classics, Clash Squad 4v4 and free-entry scrims. Check formats, schedules and entry details before you register in the app.",
  alternates: {
    canonical: "/tournaments",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Free Fire Tournaments | Real Battle",
    description:
      "Solo, squad and Clash Squad 4v4 tournaments for Indian Free Fire players. Formats, schedules and entry details before you register.",
    url: "/tournaments",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Free Fire Tournaments | Real Battle",
    description:
      "Solo, squad and Clash Squad 4v4 tournaments for Indian Free Fire players.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Real Battle Tournaments",
  description:
    "Free Fire tournament formats available on Real Battle, including solo Battle Royale, squad classic, Clash Squad 4v4 and free-entry scrims.",
  url: `${siteConfig.url}/tournaments`,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  inLanguage: "en-IN",
};

const TournamentsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        <PageHero
          eyebrow="Tournament board"
          title={
            <>
              Choose Your Format.
              <br />
              <span className="text-gradient">Own The Match.</span>
            </>
          }
          description="Solo pushes, squad classics, Clash Squad 4v4 aur free-entry scrims — ek hi board par. Format, schedule aur entry details pehle dekho, phir app mein slot lock karo."
        />

        <TournamentShowcase variant="page" />
        <HowItWorks />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
};

export default TournamentsPage;
