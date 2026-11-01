import LegalPageShell from "@/src/components/doc/LegalPageShell";
import RefundHero from "./RefundHero";
import RefundOverview from "./RefundOverview";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import { refundData } from "@/src/content/refund/refund-index";

export default function RefundPage() {
  return (
    <LegalPageShell hero={<RefundHero />}>
      <RefundOverview />

      <SectionTemplate
        title="Refund Policy"
        description="Review the terms and conditions that govern refunds, cancellations, payments, and refund eligibility on Real Battle."
        sections={refundData.sections}
      />

      <ContactSection
        title="Contact Us"
        description="Have questions about this Refund Policy, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
      />
    </LegalPageShell>
  );
}
