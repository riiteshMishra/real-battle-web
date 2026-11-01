import Footer from "@/src/components/common/footer/Footer";
import Hero from "@/src/components/marketing/hero";
import TournamentShowcase from "@/src/components/marketing/tournaments/tournament-showcase";
import HowItWorks from "@/src/components/marketing/how-it-works";
import Rewards from "@/src/components/marketing/rewards";
import FairPlay from "@/src/components/marketing/fair-play";
import DownloadSection from "@/src/components/marketing/download-section";
import Community from "@/src/components/marketing/community";
import Faq from "@/src/components/marketing/faq";
import FinalCta from "@/src/components/marketing/final-cta";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <TournamentShowcase />
        <HowItWorks />
        <Rewards />
        <FairPlay />
        <DownloadSection />
        <Community />
        <Faq limit={8} showViewAll />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
};

export default Home;
