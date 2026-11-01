import LegalPageShell from "@/src/components/doc/LegalPageShell";
import CookiesHero from "./hero/CookiesHero";
import CookiesOverview from "./overview/CookiesOverview";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import { cookiesData } from "@/src/content/cookies/cookies-index";

export default function CookiesPage() {
  return (
    <LegalPageShell hero={<CookiesHero />}>
      <CookiesOverview />

      <SectionTemplate
        title="Cookie Policy Sections"
        description="What cookies Real Battle uses, why they are needed, and how you can manage them."
        sections={cookiesData.sections}
      />

      <ContactSection
        title="Contact Us"
        description="If you have questions about our use of cookies or this Cookie Policy, you can contact our team."
      />
    </LegalPageShell>
  );
}
