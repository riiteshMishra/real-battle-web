import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiCrosshair,
  FiKey,
  FiSearch,
} from "react-icons/fi";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

const steps = [
  {
    id: "01",
    title: "Choose Your Battle",
    icon: FiSearch,
    description:
      "Apna game mode select karo. Match details, entry fee aur rules check karo — phir slot lock karo.",
  },
  {
    id: "02",
    title: "Get Room Details",
    icon: FiKey,
    description:
      "Registration ke baad Room ID aur Password app ke dashboard mein check karo. Match se pehle ready rehna.",
  },
  {
    id: "03",
    title: "Enter The Arena",
    icon: FiCrosshair,
    description:
      "Room join karo, strategy lagao aur apna best gameplay dikhao. Har kill aur placement matter karta hai.",
  },
  {
    id: "04",
    title: "Results & Rewards",
    icon: FiAward,
    description:
      "Match verification complete hone ke baad eligible rewards aur withdrawal options check karo.",
  },
] as const;

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="section-space relative overflow-hidden"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title={
            <span id="how-it-works-title">
              Join Karo. Room Lo.
              <br />
              <span className="text-gradient">Match Khelo. Jeeto.</span>
            </span>
          }
          description="Four clear steps from the app to the arena. No confusing lobby links, no hidden process — bas game aur game plan."
          action={
            <Link
              href="/tournaments"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors hover:text-accent"
            >
              See open matches
              <FiArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-5 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-violet-500/10 via-white/15 to-cyan-400/20 md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.id}
                className="relative border-l border-white/10 pl-8 md:border-l-0 md:pl-0"
              >
                <Reveal delay={index * 90}>
                  <span className="absolute top-0 -left-[13px] flex size-6 items-center justify-center rounded-full border border-white/15 bg-[#0b0b12] md:static md:mb-5 md:size-10">
                    <span className="size-2 rounded-full bg-linear-to-br from-violet-400 to-cyan-300 md:hidden" />
                    <Icon
                      aria-hidden="true"
                      className="hidden size-4 text-cyan-300 md:block"
                    />
                  </span>

                  <div className="pb-2">
                    <p className="font-mono text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                      STEP {step.id}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
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
  );
};

export default HowItWorks;
