import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";
import ButtonLink from "@/src/components/ui/ButtonLink";
import Container from "@/src/components/ui/Container";
import DownloadButton from "@/src/components/ui/DownloadButton";
import Reveal from "@/src/components/ui/Reveal";
import PhonePreview from "@/src/sections/download/PhonePreview";

const verifiedMeta = [
  { label: "Platform", value: "Android" },
  siteConfig.download.version
    ? { label: "Version", value: `v${siteConfig.download.version}` }
    : null,
  siteConfig.download.size
    ? { label: "APK size", value: siteConfig.download.size }
    : null,
  siteConfig.download.minAndroid
    ? { label: "Requires", value: siteConfig.download.minAndroid }
    : null,
].filter(Boolean) as { label: string; value: string }[];

export default function DownloadSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="section-space relative overflow-hidden border-y border-border-subtle bg-surface"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-backdrop absolute inset-0 opacity-25" />
        <div className="glow-brand absolute top-1/2 left-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      </div>

      <Container className="relative">
        <div className="surface-card relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <p className="eyebrow mb-4">
                <FaAndroid aria-hidden="true" className="size-3.5" />
                Android app
              </p>

              <h2
                id="download-title"
                className="text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
              >
                The Arena,
                <br />
                <span className="text-emphasis">In Your Pocket.</span>
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
                Register for matches, get Room ID and password, check results aur
                apna tournament history — sab kuch ek app mein.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
                <DownloadButton label="Download Android App" />
                <ButtonLink
                  href="/download"
                  variant="secondary"
                  icon={
                    <FiArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  }
                >
                  Install guide
                </ButtonLink>
              </div>

              <dl className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {verifiedMeta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[9px] font-bold tracking-[0.18em] text-dim uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-[13px] font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 flex items-start gap-2 text-[11px] leading-5 text-dim">
                <FiCheckCircle
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0 text-success"
                />
                {hasAndroidDownload
                  ? "This is the official Real Battle build. Verify the source before installing."
                  : "The official APK link is being verified and will appear here first. Real Battle does not distribute builds through third-party mirrors."}
              </p>
            </Reveal>

            <Reveal delay={140} className="hidden sm:block">
              <PhonePreview />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
