import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/src/components/common/footer/Footer";
import PageHero from "@/src/components/marketing/page-hero";
import Reveal from "@/src/components/marketing/reveal";
import SectionHeading from "@/src/components/marketing/section-heading";
import FinalCta from "@/src/components/marketing/final-cta";
import { siteConfig } from "@/src/config/site";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLock,
  FiMail,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "About",
  description:
    "Real Battle is a competitive Free Fire tournament platform built for Indian players — with published rules, verified results and honest reward terms.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "About Real Battle",
    description:
      "A competitive Free Fire tournament platform built around published rules, verified results and honest reward terms.",
    url: "/about",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "About Real Battle",
    description:
      "A competitive Free Fire tournament platform built around published rules and verified results.",
  },
};

const principles = [
  {
    icon: FiFileText,
    title: "Rules before registration",
    description:
      "Format, scoring, entry fee and schedule are published on the tournament page before a player joins. No surprises after payment.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Results are checked",
    description:
      "Match proof and UID details may be requested. Admins review the available evidence before rewards are released.",
  },
  {
    icon: FiClock,
    title: "Disputes have a window",
    description:
      "Match issues are raised through the designated support channel within the time period set for that tournament.",
  },
  {
    icon: FiUsers,
    title: "Community over hype",
    description:
      "We publish player stories only after verification and consent. No paid testimonials, no invented player counts.",
  },
  {
    icon: FiLock,
    title: "Fair participation",
    description:
      "Hacks, scripts, modified clients, account sharing and match manipulation can lead to suspension or reward cancellation.",
  },
  {
    icon: FiShield,
    title: "Honest claims only",
    description:
      "We do not claim hardware-level anti-cheat, HWID locking or 100% cheat prevention. Enforcement follows the published rules.",
  },
] as const;

const AboutPage = () => {
  return (
    <>
      <main>
        <PageHero
          eyebrow="About Real Battle"
          title={
            <>
              Built For The Players
              <br />
              <span className="text-gradient">Who Take It Seriously.</span>
            </>
          }
          description="Real Battle is a competitive Free Fire tournament platform for Indian players. Our job is simple: publish the rules clearly, verify results honestly, and keep the arena focused on skill."
        />

        <section className="section-space">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <Reveal>
                <p className="eyebrow mb-4">
                  <span className="inline-block size-1.5 rounded-full bg-accent" />
                  Why we exist
                </p>

                <h2 className="text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
                  Competitive gaming,
                  <br />
                  <span className="text-gradient">without the noise.</span>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-5 text-[14px] leading-7 text-muted-foreground">
                  <p>
                    Plenty of players can frag. Far fewer get a fair, organised
                    place to prove it. Real Battle exists to close that gap for
                    the Indian Free Fire community — with clear formats, honest
                    schedules, and results that are actually checked.
                  </p>

                  <p>
                    We would rather publish a smaller, accurate claim than a
                    large one we cannot support. That is why this site does not
                    carry invented player counts, fake payout screenshots, or
                    guarantee language around winnings.
                  </p>

                  <p>
                    What we do commit to is process: tournament rules visible
                    before you register, room details delivered in the app,
                    evidence-based result verification, and a defined dispute
                    window for every event.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/8 bg-[#0b0b12]">
          <div className="container-page">
            <SectionHeading
              eyebrow="How we operate"
              title={
                <>
                  Six Principles.
                  <br />
                  <span className="text-gradient">Zero Shortcuts.</span>
                </>
              }
              description="These are the standards we can actually stand behind today."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <Reveal key={principle.title} delay={Math.min(index * 70, 280)}>
                    <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/16 hover:bg-white/[0.04]">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-cyan-300"
                        />
                      </span>

                      <h3 className="mt-5 text-[14px] font-semibold text-foreground">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="surface-card card-sheen relative overflow-hidden rounded-3xl p-7 sm:p-9">
                  <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                    Legal &amp; participation
                  </p>

                  <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                    Read the fine print. It is short on purpose.
                  </h2>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Real Battle is intended for players aged 18 and above unless a specific tournament states otherwise.",
                      "Participation must be lawful in your location, and some events may carry additional eligibility requirements.",
                      "Rewards are not guaranteed and depend on tournament rules, performance and verification.",
                      "Taxes and statutory deductions, where applicable, follow the published policy.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-6 text-muted-foreground"
                      >
                        <FiCheckCircle
                          aria-hidden="true"
                          className="mt-1 size-3.5 shrink-0 text-success"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/terms"
                      className="group inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-accent"
                    >
                      Terms of Service
                      <FiArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href="/refund-policy"
                      className="group inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-accent"
                    >
                      Refund Policy
                      <FiArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-3xl border border-white/8 bg-white/[0.02] p-7 sm:p-9">
                  <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                    Contact
                  </p>

                  <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                    Questions, partnerships or press.
                  </h2>

                  <p className="mt-3 text-[13px] leading-6 text-muted-foreground">
                    Write to the official address below. We do not publish a
                    phone number or social handle until it is verified and
                    controlled by the team.
                  </p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-[13px] font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    <FiMail aria-hidden="true" className="size-4 text-violet-300" />
                    {siteConfig.email}
                  </a>

                  <div className="mt-8 hairline" />

                  <Link
                    href="/contact-us"
                    className="group mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-foreground hover:text-accent"
                  >
                    Contact form
                    <FiArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
