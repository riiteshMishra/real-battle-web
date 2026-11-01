import Image from "next/image";
import { FiArrowRight, FiSmartphone, FiUsers, FiZap } from "react-icons/fi";
import { assets } from "@/src/assets/assets";
import ButtonLink from "@/src/components/ui/ButtonLink";
import DownloadButton from "@/src/components/ui/DownloadButton";
import Reveal from "@/src/components/ui/Reveal";
import HeroVisual from "@/src/sections/hero/HeroVisual";

const trustPoints = [
  { icon: FiSmartphone, label: "Android app", tone: "text-brand" },
  { icon: FiUsers, label: "Solo · Squad · Clash Squad", tone: "text-muted-foreground" },
  { icon: FiZap, label: "Free-entry scrims", tone: "text-success" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <Image
        src={assets.HeroSectionDecs}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-center opacity-55"
      />

      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-backdrop absolute inset-0 opacity-40" />
        <div className="glow-brand absolute -top-24 -left-24 size-[36rem] opacity-70" />
      </div>

      <div className="container-page relative pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="animate-battle-pulse absolute inline-flex size-full rounded-full bg-brand" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                </span>
                India&apos;s competitive gaming arena
              </p>

              <h1
                id="hero-title"
                className="mt-6 text-[clamp(2.9rem,7.4vw,6rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-foreground"
              >
                <span className="block">GAME KHELO.</span>
                <span className="block text-brand">BATTLE JEETO.</span>
                <span className="block">MAKE YOUR MOVE.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Your game, your strategy, your moment. Free Fire solo, squad aur
                Clash Squad tournaments — ek hi arena mein. Room details app
                mein, results verified, aur har move counts.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
                <DownloadButton label="Download Android App" />

                <ButtonLink
                  href="/tournaments"
                  variant="secondary"
                  icon={
                    <FiArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  }
                >
                  Explore Tournaments
                </ButtonLink>
              </div>

              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] text-dim">
                {trustPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <li key={point.label} className="inline-flex items-center gap-1.5">
                      <Icon aria-hidden="true" className={`size-3.5 ${point.tone}`} />
                      {point.label}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
