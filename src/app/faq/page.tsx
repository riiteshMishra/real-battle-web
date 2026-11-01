import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/src/components/common/footer/Footer";
import PageHero from "@/src/components/marketing/page-hero";
import Faq from "@/src/components/marketing/faq";
import Reveal from "@/src/components/marketing/reveal";
import { siteConfig } from "@/src/config/site";
import { faqData } from "@/src/data/faq-data";
import { FiArrowRight, FiMail, FiMessageSquare } from "react-icons/fi";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Real Battle tournaments, room details, result verification, rewards, withdrawals, age requirements and support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Real Battle FAQ",
    description:
      "Registration, room details, results, rewards and withdrawals — answered in simple language.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Real Battle FAQ",
    description:
      "Registration, room details, results, rewards and withdrawals — answered simply.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FaqPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        <PageHero
          eyebrow="Help centre"
          title={
            <>
              Questions?
              <br />
              <span className="text-gradient">Straight Answers.</span>
            </>
          }
          description="Registration, room details, result verification, rewards aur withdrawals — sab kuch simple language mein. Agar yahan answer nahi mila, support ko likh do."
        />

        <Faq showHeading={false} className="pt-12 sm:pt-16" />

        <section className="pb-20 sm:pb-24">
          <div className="container-page">
            <Reveal>
              <div className="surface-card card-sheen relative overflow-hidden rounded-3xl p-7 sm:p-10">
                <div className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2),transparent_70%)]" />

                <div className="relative grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
                  <div>
                    <p className="eyebrow mb-3">
                      <FiMessageSquare aria-hidden="true" className="size-3.5" />
                      Still stuck?
                    </p>

                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Talk to the support team.
                    </h2>

                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-muted-foreground">
                      Include your match ID, tournament name and any relevant
                      screenshots. That is the fastest way to get a useful reply.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact-us"
                      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-violet-600 px-6 text-[13px] font-semibold text-white shadow-[0_12px_40px_rgba(139,92,246,0.28)] transition-all hover:-translate-y-0.5"
                    >
                      Contact support
                      <FiArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 text-[13px] font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                    >
                      <FiMail aria-hidden="true" className="size-4" />
                      Email support
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FaqPage;
