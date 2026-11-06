import type { Metadata } from "next";
import Footer from "@/src/components/layout/Footer";
import PageHero from "@/src/components/ui/PageHero";
import ApkPanel from "@/src/sections/download/ApkPanel";
import Reveal from "@/src/components/ui/Reveal";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqSection from "@/src/sections/faq/FaqSection";
import FinalCtaSection from "@/src/sections/final-cta/FinalCtaSection";
import { siteConfig } from "@/src/config/site";
import BreadcrumbJsonLd from "@/src/components/seo/BreadcrumbJsonLd";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiDownload,
  FiLock,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiWifi,
} from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Download the Android App",
  description:
    "Get the official Real Battle Android app. Registration, room details, results and tournament history in one place. Only realbattle.in is an official download source.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "Download the Real Battle Android App",
    description:
      "The official Real Battle Android app. Room details, results and tournament history in one place.",
    url: "/download",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Download the Real Battle Android App",
    description:
      "The official Real Battle Android app for Free Fire tournaments in India.",
  },
};

const steps = [
  {
    title: "Download the APK",
    description:
      "Use the download panel on this page only. Avoid files forwarded through Telegram groups, shortened links or third-party APK mirrors.",
    icon: FiDownload,
  },
  {
    title: "Allow the install source",
    description:
      "Android asks for permission before installing an app from the browser. Approve the source you downloaded from, then return to the browser.",
    icon: FiSettings,
  },
  {
    title: "Install and open",
    description:
      "Tap the downloaded file, review the permissions being requested, and complete the installation.",
    icon: FaAndroid,
  },
  {
    title: "Sign in and verify",
    description:
      "Create or sign in to your account, complete the eligibility details requested, and check your profile before registering for a match.",
    icon: FiLock,
  },
  {
    title: "Open the arena",
    description:
      "Browse tournaments, read the rules, register, and collect your Room ID and password from the dashboard before the match starts.",
    icon: FiSmartphone,
  },
] as const;

const safetyNotes = [
  {
    title: "One official source",
    description:
      "Only realbattle.in is treated as an official download source. A forwarded file is not an official release, even if the name looks correct.",
    icon: FiShield,
  },
  {
    title: "No invented checksums",
    description:
      "The SHA-256 hash and any VirusTotal reference appear on this page only when the production build actually exists and has been checked.",
    icon: FiCheckCircle,
  },
  {
    title: "Stable connection recommended",
    description:
      "Use Wi-Fi for the download and keep enough free storage. Match day is the wrong day to discover a partial download.",
    icon: FiWifi,
  },
] as const;

const DownloadPage = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Download", url: `${siteConfig.url}/download` },
        ]}
      />
      <main>
        <PageHero
          eyebrow="Android app"
          title={
            <>
              Install Once.
              <br />
              <span className="text-emphasis">Battle Every Day.</span>
            </>
          }
          description="Real Battle runs on Android. Download the official build, sign in, aur apna pehla tournament app se hi register karo — room details aur results bhi wahin milte hain."
        />

        <section className="section-space">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <Reveal>
                <ApkPanel />
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-5">
                  <div className="surface-card rounded-2xl p-6">
                    <h2 className="font-heading text-lg font-semibold text-foreground">
                      Before you install
                    </h2>

                    <ul className="mt-4 space-y-3">
                      {[
                        "Use an Android device with a stable connection and enough free storage.",
                        "Confirm you are on realbattle.in before starting the download.",
                        "Do not install modified or re-signed builds shared by other players.",
                        "Check the tournament eligibility rules before paying any entry fee.",
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
                  </div>

                  <div className="rounded-2xl border border-success/30 bg-success-soft p-6">
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-success uppercase">
                      <FiAlertTriangle aria-hidden="true" className="size-3.5" />
                      Verification status
                    </p>

                    <p className="mt-3 text-[13px] leading-6 text-dim">
                      The published APK link, version number, file size and
                      checksum are shown only after the production build is
                      verified. Until then, this page stays honest about what is
                      not ready instead of showing placeholder values.
                    </p>

                    <a
                      href={`mailto:${siteConfig.email}?subject=Real%20Battle%20Android%20build%20question`}
                      className="mt-4 inline-flex text-[12px] font-semibold text-success underline decoration-success/40 underline-offset-4 hover:decoration-success"
                    >
                      Ask about the release status
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-border bg-surface">
          <div className="container-page">
            <SectionHeading
              eyebrow="Install guide"
              title={
                <>
                  Five Steps.
                  <br />
                  <span className="text-emphasis">No Guesswork.</span>
                </>
              }
              description="From download to your first room code — the whole path in plain language."
            />

            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li key={step.title}>
                    <Reveal delay={Math.min(index * 70, 280)}>
                      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-card">
                          <Icon
                            aria-hidden="true"
                            className="size-4 text-brand"
                          />
                        </span>

                        <p className="mt-5 font-mono text-[10px] font-bold tracking-[0.22em] text-muted-foreground">
                          STEP {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 text-[14px] font-semibold text-foreground">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-6 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="section-space">
          <div className="container-page">
            <SectionHeading
              eyebrow="Safety"
              title={
                <>
                  Install Safe.
                  <br />
                  <span className="text-emphasis">Play Focused.</span>
                </>
              }
              description="A few practical checks that protect your account and your device."
            />

            <Reveal className="mt-10 grid gap-5 md:grid-cols-3">
              {safetyNotes.map((note) => {
                const Icon = note.icon;

                return (
                  <div key={note.title} className="h-full rounded-2xl border border-border bg-card p-6">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-card">
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-brand"
                        />
                      </span>

                      <h3 className="mt-5 text-[14px] font-semibold text-foreground">
                        {note.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-muted-foreground">
                        {note.description}
                      </p>
                    </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        <FaqSection limit={6} showViewAll />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
};

export default DownloadPage;
