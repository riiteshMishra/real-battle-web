import Link from "next/link";
import PolicyLayout from "@/src/components/policy/PolicyLayout";
import PolicyRelatedLinks from "@/src/components/policy/PolicyRelatedLinks";
import SectionTemplate from "@/src/components/doc/section/SectionTemplate";
import ContactSection from "@/src/components/doc/contact/ContactSection";
import PlayerResponsibilitiesHero from "./PlayerResponsibilitiesHero";
import PlayerResponsibilitiesOverview from "./PlayerResponsibilitiesOverview";
import { playerResponsibilitiesData } from "@/src/content/player-responsibilities/player-responsibilities-index";

const tocItems = [
  ...playerResponsibilitiesData.sections.map((section) => ({
    id: section.id,
    title: section.title,
  })),
  { id: "related-policies", title: "Related Policies" },
];

const relatedLinks = [
  {
    label: "Tournament Rules",
    href: "/tournament-rules",
    description: "Registration se rewards tak Real Battle tournaments kaise kaam karte hain.",
  },
  {
    label: "Fair Play Policy",
    href: "/#fair-play",
    description: "Detailed fair play aur enforcement standards.",
  },
  {
    label: "Terms of Service",
    href: "/terms",
    description: "Real Battle use govern karne wale full terms.",
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
    description: "Refund eligibility aur payment issue handling.",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    description: "Aapka data kaise collect aur protect kiya jata hai.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    description: "Real Battle support tak pahunchen.",
  },
];

export default function PlayerResponsibilitiesPage() {
  return (
    <PolicyLayout
      hero={<PlayerResponsibilitiesHero />}
      tocItems={tocItems}
      tocTitle="On this page"
    >
      <PlayerResponsibilitiesOverview />

      <SectionTemplate
        title="Player Responsibilities"
        description="Har Real Battle player ke liye detailed responsibilities."
        sections={playerResponsibilitiesData.sections}
      />

      <section
        id="final-cta"
        aria-labelledby="final-cta-title"
        className="mb-12 rounded-2xl border border-border-subtle bg-card p-6 md:p-8"
      >
        <h2
          id="final-cta-title"
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Make Every Battle Count.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          Responsibly play karo, fairly compete karo aur stronger gaming community
          banane mein help karo.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tournaments"
            className="inline-flex items-center justify-center rounded-full bg-brand-fill px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
          >
            View Tournaments
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-full border border-border bg-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            Download App
          </Link>
        </div>
      </section>

      <PolicyRelatedLinks
        title="Related Policies"
        description="Ye pages milke Real Battle par aapke rights aur responsibilities explain karte hain."
        links={relatedLinks}
      />

      <ContactSection
        title="Contact Us"
        description="Player responsibilities, tournament rules, account restrictions, payments ya dusre Real Battle services ke baare mein questions hain? Hamari team se contact karo."
      />
    </PolicyLayout>
  );
}