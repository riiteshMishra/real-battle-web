import LegalPageShell from "@/src/components/doc/LegalPageShell";
import TermHero from "./TermHero";
import TermOverview from "./TermOverview";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import FaqSection from "@/src/components/doc/faq/FaqSection";
import ActionsSec from "@/src/components/doc/actions/ActionsSec";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import { termsData } from "@/src/content/terms/terms-index";
import { termsFAQItems } from "./termsFAQItems";

export default function TermsPage() {
  return (
    <LegalPageShell hero={<TermHero />}>
      <TermOverview />

      <FaqSection
        title="Frequently Asked Questions"
        description="Answers to common questions about the Real Battle Terms of Service."
        items={termsFAQItems}
      />

      <SectionTemplate
        title="Terms of Service Sections"
        sections={termsData.sections}
      />

      <ActionsSec
        title="Terms & Documents"
        description="Save a copy of these Terms or contact us if you have questions about our rules and conditions."
        email="realbattleofficial@gmail.com"
        contactTitle="Contact Support"
        contactSubtitle="Questions about these Terms"
        fileName="Real-Battle-Terms-of-Service.txt"
        downloadTitle="Download Terms"
      />

      <ContactSection
        title="Contact Us"
        description="Have questions about these Terms of Service, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
      />
    </LegalPageShell>
  );
}
