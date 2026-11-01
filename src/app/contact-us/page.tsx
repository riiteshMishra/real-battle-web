import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/src/components/layout/Footer";
import PageHero from "@/src/components/ui/PageHero";
import Reveal from "@/src/components/ui/Reveal";
import ContactForm from "@/src/components/forms/ContactForm";
import { siteConfig } from "@/src/config/site";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLock,
  FiMail,
  FiMessageSquare,
  FiUserCheck,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Contact Real Battle support for help with tournaments, payments, accounts, results, disputes and platform questions.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Contact Real Battle Support",
    description:
      "Support for tournaments, payments, accounts, results and disputes.",
    url: "/contact-us",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Contact Real Battle Support",
    description:
      "Support for tournaments, payments, accounts, results and disputes.",
  },
};

const whatToInclude = [
  {
    icon: FiFileText,
    title: "Match ID and tournament name",
    description:
      "These two details let support find the exact event instead of guessing.",
  },
  {
    icon: FiUserCheck,
    title: "Registered email or UID",
    description:
      "Use the same contact details you registered with so the account can be located.",
  },
  {
    icon: FiMessageSquare,
    title: "Screenshots or clips",
    description:
      "For result or fair-play issues, attach genuine evidence. Altered proof weakens the case.",
  },
] as const;

const supportScope = [
  "Tournament registration and room-detail issues",
  "Result verification and dispute queries",
  "Reward eligibility and withdrawal questions",
  "Account access and eligibility checks",
  "Reporting cheating or rule violations",
  "Business, partnership and press enquiries",
];

const ContactPage = () => {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Support"
          title={
            <>
              Need Help?
              <br />
              <span className="text-emphasis">We&apos;re Listening.</span>
            </>
          }
          description="Tournament issue, account problem, payment question ya fair-play report — form bhar do ya seedha email karo. Match details include karna sabse fast hota hai."
        />

        <section className="section-space">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <div className="space-y-5">
                <Reveal>
                  <div className="surface-card rounded-2xl p-6">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-card">
                      <FiMail aria-hidden="true" className="size-4 text-brand" />
                    </span>

                    <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                      Email support
                    </h2>

                    <p className="mt-2 text-[12px] leading-6 text-muted-foreground">
                      The only verified public contact channel right now. Phone
                      and social handles stay hidden until ownership is
                      confirmed.
                    </p>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-4 inline-flex break-all text-[13px] font-semibold text-foreground underline decoration-white/25 underline-offset-4 hover:decoration-brand"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <div className="rounded-2xl border border-success/30 bg-success-soft p-6">
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-success uppercase">
                      <FiClock aria-hidden="true" className="size-3.5" />
                      Response guidance
                    </p>

                    <p className="mt-3 text-[12px] leading-6 text-dim">
                      {siteConfig.supportHours} We do not publish a guaranteed
                      response time, because we would rather reply properly than
                      promise a timer we cannot always keep.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      <FiLock aria-hidden="true" className="size-3.5" />
                      Official channels
                    </p>

                    <ul className="mt-4 space-y-2.5 text-[12px] text-muted-foreground">
                      <li className="flex items-center justify-between gap-3">
                        <span>Email</span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] text-success uppercase">
                          <FiCheckCircle aria-hidden="true" className="size-3" />
                          Verified
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-3">
                        <span>Phone / WhatsApp</span>
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-dim uppercase">
                          Not published
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-3">
                        <span>Social handles</span>
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-dim uppercase">
                          Verifying
                        </span>
                      </li>
                    </ul>

                    <p className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-dim">
                      <FiAlertCircle
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-brand"
                      />
                      Anyone asking for payment or OTPs from an unofficial
                      account is not Real Battle support.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={100}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-border bg-surface">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <p className="eyebrow mb-4">
                  <span className="inline-block size-1.5 rounded-full bg-brand" />
                  Better tickets
                </p>

                <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
                  Include these.
                  <br />
                  <span className="text-emphasis">Get answers faster.</span>
                </h2>

                <ul className="mt-8 space-y-5">
                  {whatToInclude.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.title} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                          <Icon
                            aria-hidden="true"
                            className="size-4 text-brand"
                          />
                        </span>

                        <div>
                          <h3 className="text-[13px] font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="surface-card card-sheen relative overflow-hidden rounded-3xl p-7 sm:p-9">
                  <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                    What support covers
                  </p>

                  <ul className="mt-5 space-y-3">
                    {supportScope.map((item) => (
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

                  <div className="mt-7 hairline" />

                  <div className="mt-6 flex flex-wrap gap-5">
                    <Link
                      href="/faq"
                      className="group inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-brand"
                    >
                      Read the FAQ
                      <FiArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href="/terms"
                      className="group inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-brand"
                    >
                      Dispute rules
                      <FiArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
