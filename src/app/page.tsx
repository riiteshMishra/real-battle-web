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

export default function Home() {
  return (
    <>
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
