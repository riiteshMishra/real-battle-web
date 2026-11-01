import type { ReactNode } from "react";
import HeroBrand, { type HeroBrandProps } from "@/src/components/doc/hero/HeroBrand";
import HeroContent, {
  type HeroContentProps,
} from "@/src/components/doc/hero/HeroContent";
import HeroUpdate, {
  type HeroUpdateProps,
} from "@/src/components/doc/hero/HeroUpdate";
import HeroTrust, {
  type HeroTrustProps,
} from "@/src/components/doc/hero/HeroTrust";

interface HeroTempletProps {
  bgGlow?: ReactNode;
  heroBrand: HeroBrandProps;
  heroContent: HeroContentProps;
  updateProps: HeroUpdateProps;
  heroTrust: HeroTrustProps;
}

/** Shared hero for the legal document pages. */
export default function HeroTemplet({
  bgGlow,
  heroBrand,
  heroContent,
  updateProps,
  heroTrust,
}: HeroTempletProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-border-subtle bg-surface"
    >
      {bgGlow ?? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-backdrop absolute inset-0 opacity-40" />
          <div className="glow-brand absolute -top-32 -left-24 size-[30rem] opacity-70" />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <HeroBrand {...heroBrand} />
          <HeroContent {...heroContent} />
          <HeroUpdate {...updateProps} />
          <HeroTrust {...heroTrust} />
        </div>
      </div>
    </section>
  );
}
