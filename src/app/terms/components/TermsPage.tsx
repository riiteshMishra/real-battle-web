import Footer from "@/src/components/common/footer/Footer";
import TermHero from "./TermHero";

import TermOverview from "./TermOverview";
import SectionTemplate from "@/src/components/ui/doc/section/SectionTemplate";
import { termsData } from "@/src/content/terms/terms-index";
import FaqSection from "@/src/components/ui/doc/faq/FaqSection";
import { termsFAQItems } from "./termsFAQItems";
import ActionsSec from "@/src/components/ui/doc/actions/ActionsSec";
import ContactSection from "@/src/components/ui/doc/contact/ContactSection";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.14)_1px,transparent_1px)] bg-size-[24px_24px] text-slate-900 dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.10)_1px,transparent_1px)] dark:text-slate-100">
      <TermHero />

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
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
        />
        <ContactSection
          title="Contact Us"
          description="Have questions about these Terms of Service, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
          note="Please include relevant account, tournament, or transaction details when contacting us so that we can assist you efficiently."
        />{" "}
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
