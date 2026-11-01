import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiSmartphone,
  FiWifi,
} from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { GiCrossedSwords, GiTrophyCup } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";
import DownloadButton from "./download-button";
import Reveal from "./reveal";

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

const PhonePreview = () => (
  <div
    aria-hidden="true"
    className="relative mx-auto w-full max-w-[17rem]"
  >
    <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_70%)]" />

    <div className="relative rounded-[2.4rem] border border-white/15 bg-[#07070b] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0b0b12]">
        <div className="flex items-center justify-between px-5 pt-4 text-[9px] text-white/45">
          <span>20:00</span>
          <span className="flex items-center gap-1">
            <FiWifi aria-hidden="true" className="size-2.5" />
            4G
          </span>
        </div>

        <div className="px-5 pt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg border border-white/12 bg-linear-to-br from-violet-500/30 to-cyan-400/20">
                <GiCrossedSwords aria-hidden="true" className="size-3 text-white" />
              </span>
              <div>
                <p className="font-heading text-[10px] font-bold tracking-wide text-white">
                  REAL BATTLE
                </p>
                <p className="text-[7px] tracking-[0.18em] text-white/40 uppercase">
                  Competitive arena
                </p>
              </div>
            </div>

            <span className="size-6 rounded-full border border-white/12 bg-white/5" />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-linear-to-br from-violet-500/15 to-transparent p-4">
            <p className="text-[7px] font-bold tracking-[0.2em] text-cyan-300/80 uppercase">
              Arena board
            </p>
            <p className="mt-1 font-heading text-sm leading-tight font-semibold text-white">
              Apni squad
              <br />
              ready karo.
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] text-white/70">
                Solo
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] text-white/70">
                Clash
              </span>
              <span className="rounded-full bg-violet-500/40 px-2 py-0.5 text-[7px] text-white">
                Squad
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {["Solo Battle Royale", "Squad Classic"].map((label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
              >
                <span className="flex items-center gap-2">
                  <span className="flex size-5 items-center justify-center rounded-md bg-white/5">
                    <FiSmartphone aria-hidden="true" className="size-2.5 text-cyan-300" />
                  </span>
                  <span className="text-[8px] font-medium text-white/80">
                    {label}
                  </span>
                </span>
                <FiArrowRight aria-hidden="true" className="size-2.5 text-white/30" />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-gold/15 bg-gold/[0.06] px-3 py-2">
            <GiTrophyCup aria-hidden="true" className="size-3 text-gold" />
            <span className="text-[7px] leading-tight text-gold/80">
              Prize pool &amp; rules before you register
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-around border-t border-white/8 px-4 py-3 text-white/35">
          <AiOutlineHome aria-hidden="true" className="size-3.5 text-violet-300" />
          <GiCrossedSwords aria-hidden="true" className="size-3.5" />
          <FiUser aria-hidden="true" className="size-3.5" />
        </div>
      </div>
    </div>

    <div className="absolute -right-4 top-24 hidden rounded-xl border border-cyan-300/20 bg-[#0b1216]/95 px-3 py-2 shadow-xl backdrop-blur-md sm:block">
      <p className="flex items-center gap-1 text-[8px] font-bold tracking-[0.14em] text-cyan-300 uppercase">
        <FiShield aria-hidden="true" className="size-2.5" />
        Results checked
      </p>
    </div>
  </div>
);

const DownloadSection = () => {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="section-space relative overflow-hidden border-y border-white/8 bg-[#0a0910]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-backdrop opacity-30" />
        <div className="glow-violet absolute top-1/2 left-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      </div>

      <div className="container-page relative">
        <div className="surface-card card-sheen relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-[radial-gradient(circle,rgba(255,200,87,0.14),transparent_70%)]" />

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
                <span className="text-gradient">In Your Pocket.</span>
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
                Register for matches, get Room ID and password, check results aur
                apna tournament history — sab kuch ek app mein.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
                <DownloadButton label="Download Android App" />
                <Link
                  href="/download"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.09]"
                >
                  Install guide
                  <FiArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <dl className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {verifiedMeta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-[13px] font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 flex items-start gap-2 text-[11px] leading-5 text-white/60">
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
      </div>
    </section>
  );
};

export default DownloadSection;
