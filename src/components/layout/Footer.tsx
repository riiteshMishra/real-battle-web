import FooterBrand from "@/src/components/layout/footer/FooterBrand";
import FooterLinks, {
  type FooterLinkGroup,
} from "@/src/components/layout/footer/FooterLinks";
import FooterMeta from "@/src/components/layout/footer/FooterMeta";

const exploreLinks = [
  { label: "Tournaments", href: "/tournaments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Fair Play", href: "/#fair-play" },
  { label: "Download App", href: "/download" },
];

const supportLinks = [
  { label: "Contact Support", href: "/contact-us" },
  { label: "FAQs", href: "/faq" },
  { label: "About Real Battle", href: "/about" },
  { label: "Report an Issue", href: "/contact-us#support" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const footerGroups: FooterLinkGroup[] = [
  { heading: "Explore", links: exploreLinks },
  { heading: "Support", links: supportLinks },
  { heading: "Legal", links: legalLinks },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-surface">
      <div className="container-page relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <FooterBrand />
          <FooterLinks groups={footerGroups} />
        </div>

        <FooterMeta />
      </div>
    </footer>
  );
}