import Link from "next/link";
import { FiArrowRight, FiAward, FiCrosshair, FiKey, FiSearch } from "react-icons/fi";
import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import StepCard from "@/src/sections/how-it-works/StepCard";

const steps = [
  {
    id: "01",
    title: "Choose Your Battle",
    icon: FiSearch,
    description:
      "Apna mode select karo. Format, entry fee aur rules pehle check karo — phir slot lock karo.",
  },
  {
    id: "02",
    title: "Get Room Details",
    icon: FiKey,
    description:
      "Registration ke baad Room ID aur password app ke dashboard mein milte hain. Match se pehle ready rehna.",
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
      "Verification complete hone ke baad eligible rewards aur withdrawal options app mein check karo.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="section-space relative overflow-hidden"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <span id="how-it-works-title">
              Join Karo. Room Lo.
              <br />
              <span className="text-emphasis">Match Khelo. Jeeto.</span>
            </span>
          }
          description="Chaar simple steps — app se arena tak. No confusing lobby links, no hidden process."
          action={
            <Link
              href="/tournaments"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors hover:text-brand"
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
            className="absolute top-5 right-[12%] left-[12%] hidden h-px bg-border md:block"
          />

          {steps.map((step) => (
            <StepCard
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
