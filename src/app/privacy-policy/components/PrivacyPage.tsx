import LegalPageShell from "@/src/components/doc/LegalPageShell";
import PrivacyHero from "./privacy-hero";
import PrivacyOverview from "./privacy-overview";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import FaqSection from "@/src/components/doc/faq/FaqSection";
import ActionsSec from "@/src/components/doc/actions/ActionsSec";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import { privacyData } from "@/src/content/privacy/privacy-index";
import { privacyFAQData } from "./faq-data";

export function PrivacyPage() {
  return (
    <LegalPageShell hero={<PrivacyHero />}>
      <PrivacyOverview />

      <FaqSection
        title="Frequently Asked Questions"
        description="Answers to common questions about how Real Battle handles your data."
        items={privacyFAQData}
      />

      <SectionTemplate
        title="Privacy Policy Details"
        description="Learn more about how Real Battle collects, uses, protects, and manages player, gaming, and tournament information."
        sections={privacyData.sections}
      />

      <ActionsSec
        title="Privacy & Documents"
        description="Save a copy of our Privacy Policy or contact us if you have questions about how we collect, use, or protect your information."
        email="realbattleofficial@gmail.com"
        contactTitle="Contact Support"
        contactSubtitle="Questions about this Privacy Policy"
        fileName="Real-Battle-Privacy-Policy.txt"
        downloadTitle="Download Policy"
      />

      <ContactSection
        title="Contact Us"
        description="Have questions about this Privacy Policy, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
      />
    </LegalPageShell>
  );
}
