import HeroBackground from "@/src/sections/hero/HeroBackground";
import HeroContent from "@/src/sections/hero/HeroContent";
import HeroActions from "@/src/sections/hero/HeroActions";
import HeroVisual from "@/src/sections/hero/HeroVisual";
import Reveal from "@/src/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <HeroBackground />

      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-backdrop absolute inset-0 opacity-40" />
        <div className="glow-brand absolute -top-24 -left-24 size-[36rem] opacity-70" />
      </div>

      <div className="container-page relative pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div>
            <HeroContent />
            <HeroActions />
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}