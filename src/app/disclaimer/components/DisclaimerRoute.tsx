import LegalPageShell from "@/src/components/doc/LegalPageShell";
import DisclaimerHero from "./DisclaimerHero";
import DisclaimerOverview from "./DisclaimerOverview";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

export default function DisclaimerRoute() {
  return (
    <LegalPageShell hero={<DisclaimerHero />}>
      <DisclaimerOverview />

      <SectionTemplate
        title="Disclaimer"
        description="Important information, limitations, and responsibilities related to the use of Real Battle."
        sections={disclaimerData.sections}
      />

      <ContactSection
        title="Contact Us"
        description="Have questions about this Disclaimer, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
      />
    </LegalPageShell>
  );
}
