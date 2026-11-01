import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiLock,
  FiSmartphone,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { GiCrossedSwords, GiTrophyCup } from "react-icons/gi";
import { assets } from "@/src/assets/assets";
import DownloadButton from "./download-button";
import Reveal from "./reveal";

const formats = [
  {
    icon: FiTarget,
    title: "Solo Battle Royale",
    meta: "Solo · Last one standing",
    accent: "text-violet-300",
  },
  {
    icon: GiCrossedSwords,
    title: "Squad Classic",
    meta: "Squad · Full map pressure",
    accent: "text-cyan-300",
  },
  {
    icon: GiTrophyCup,
    title: "Clash Squad 4v4",
    meta: "Squad · Fast, close-quarters",
    accent: "text-gold",
  },
] as const;

const Hero = () => {
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
        <div className="glow-violet absolute -top-24 -left-24 size-[36rem] opacity-70" />
        <div className="glow-cyan absolute -right-40 top-1/3 size-[30rem] opacity-40" />
      </div>

      <div className="container-page relative pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-white/75 uppercase backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="animate-battle-pulse absolute inline-flex size-full rounded-full bg-accent" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                India&apos;s competitive gaming arena
              </p>

              <h1
                id="hero-title"
                className="mt-6 text-[clamp(2.9rem,7.4vw,6rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-white"
              >
                <span className="block">GAME KHELO.</span>
                <span className="text-gradient block">BATTLE JEETO.</span>
                <span className="block">MAKE YOUR MOVE.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
                Your game, your strategy, your moment. Free Fire solo, squad aur
                Clash Squad tournaments — ek hi arena mein. Room details app
                mein, results verified, aur har move counts.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
                <DownloadButton label="Download Android App" />

                <Link
                  href="/tournaments"
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
                >
                  Explore Tournaments
                  <FiArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] text-white/55">
                <li className="inline-flex items-center gap-1.5">
                  <FiSmartphone aria-hidden="true" className="size-3.5 text-cyan-300/80" />
                  Android app
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <FiUsers aria-hidden="true" className="size-3.5 text-violet-300/80" />
                  Solo · Squad · Clash Squad
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <FiZap aria-hidden="true" className="size-3.5 text-success/80" />
                  Free-entry scrims
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Floating arena board — decorative product preview, not live data */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-6 -z-10 rounded-full border border-dashed border-white/10"
              />
              <div
                aria-hidden="true"
                className="glow-violet absolute -inset-8 -z-10 opacity-40"
              />

              <div className="surface-card card-sheen relative rounded-[1.75rem] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                      Arena board
                    </p>
                    <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                      Pick your battle
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-success/25 bg-success/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.14em] text-success uppercase">
                    <span className="size-1.5 rounded-full bg-success" />
                    Open
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  {formats.map((format) => {
                    const Icon = format.icon;

                    return (
                      <div
                        key={format.title}
                        className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                          <Icon
                            aria-hidden="true"
                            className={`size-4 ${format.accent}`}
                          />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[13px] font-semibold text-foreground">
                            {format.title}
                          </span>
                          <span className="block truncate text-[11px] text-muted-foreground">
                            {format.meta}
                          </span>
                        </span>

                        <FiArrowRight
                          aria-hidden="true"
                          className="size-3.5 shrink-0 text-white/25"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="my-5 hairline" />

                <div className="grid gap-3 text-[11px]">
                  <div className="flex items-start gap-3">
                    <FiLock
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-cyan-300/80"
                    />
                    <p className="leading-5 text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Room ID &amp; password
                      </span>{" "}
                      released in the app after registration.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-violet-300/80"
                    />
                    <p className="leading-5 text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Results checked
                      </span>{" "}
                      against match proof before rewards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float-soft absolute -top-5 -right-3 hidden rounded-2xl border border-gold/25 bg-[#131019]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:block motion-reduce:animate-none">
                <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.16em] text-gold uppercase">
                  <GiTrophyCup aria-hidden="true" className="size-3.5" />
                  Booyah bonus
                </p>
                <p className="mt-1 text-[10px] text-white/55">
                  Per tournament rules
                </p>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-cyan-300/20 bg-[#0b1216]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:block">
                <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.16em] text-cyan-300 uppercase">
                  <FiTarget aria-hidden="true" className="size-3.5" />
                  Every kill counts
                </p>
                <p className="mt-1 text-[10px] text-white/55">
                  Rewards set per tournament
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
