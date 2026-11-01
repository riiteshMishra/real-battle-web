import Link from "next/link";
import {
  FiArrowUpRight,
  FiDownload,
  FiInstagram,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";
import Logo from "../Logo";
import { siteConfig } from "@/src/config/site";

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

const socialEntries = [
  { key: "instagram" as const, label: "Instagram", icon: FiInstagram },
  { key: "youtube" as const, label: "YouTube", icon: FiYoutube },
  { key: "discord" as const, label: "Discord", icon: FaDiscord },
].filter((item) => siteConfig.social[item.key].length > 0);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#07070b]">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-violet absolute -bottom-40 left-1/4 size-[30rem] opacity-20" />
      </div>

      <div className="container-page relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-[13px] leading-7 text-muted-foreground">
              India&apos;s competitive gaming arena for Free Fire. Solo, squad
              aur Clash Squad battles — room details in the app, results
              verified, rewards by the rules.
            </p>

            <Link
              href="/download"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[12px] font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
            >
              <FiDownload aria-hidden="true" className="size-3.5 text-violet-300" />
              Get the Android app
              <FiArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiMail aria-hidden="true" className="size-3.5" />
              {siteConfig.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.22em] text-white/45 uppercase">
                Explore
              </h2>
              <ul className="mt-4 space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[10px] font-bold tracking-[0.22em] text-white/45 uppercase">
                Support
              </h2>
              <ul className="mt-4 space-y-2.5">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[10px] font-bold tracking-[0.22em] text-white/45 uppercase">
                Legal
              </h2>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <div className="grid gap-4 text-[11px] leading-5 text-white/45 sm:grid-cols-2 lg:grid-cols-4">
            <p>
              <span className="font-semibold text-white/70">18+ only.</span>{" "}
              Real Battle is intended for adults unless a specific tournament
              states otherwise.
            </p>
            <p>
              <span className="font-semibold text-white/70">
                Play responsibly.
              </span>{" "}
              Take breaks, set limits, and do not spend beyond what you can
              afford.
            </p>
            <p>
              <span className="font-semibold text-white/70">
                Check local rules.
              </span>{" "}
              Some states and regions restrict paid online gaming. Participation
              must be lawful where you live.
            </p>
            <p>
              <span className="font-semibold text-white/70">
                Rewards are not guaranteed.
              </span>{" "}
              Eligibility depends on tournament rules, performance and
              verification. Taxes and statutory deductions, including TDS where
              applicable, may apply.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/60">
            © {new Date().getFullYear()} Real Battle. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-[11px] text-white/60">
              Free Fire is a trademark of its respective owner. Real Battle is
              not affiliated with or endorsed by the publisher.
            </p>

            {socialEntries.length > 0 && (
              <ul className="flex items-center gap-2">
                {socialEntries.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.key}>
                      <a
                        href={siteConfig.social[social.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/25 hover:text-foreground"
                      >
                        <Icon aria-hidden="true" className="size-3.5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
