import Reveal from "@/src/components/ui/Reveal";
import { FiSmartphone, FiUsers, FiZap } from "react-icons/fi";

const points = [
  { icon: FiSmartphone, label: "Android app", tone: "text-brand" },
  { icon: FiUsers, label: "Solo · Squad · Clash Squad", tone: "text-muted-foreground" },
  { icon: FiZap, label: "Free-entry scrims", tone: "text-success" },
];

export default function HeroContent() {
  return (
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

      <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] text-dim">
        {points.map((point) => {
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
  );
}