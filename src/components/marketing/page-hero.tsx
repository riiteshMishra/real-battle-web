import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) => {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-white/8", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="glow-violet absolute -top-40 left-1/4 size-[34rem] -translate-x-1/2 opacity-60" />
        <div className="glow-cyan absolute -right-32 -bottom-40 size-[28rem] opacity-50" />
      </div>

      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </p>

          <h1 className="text-[clamp(2.35rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-foreground">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
};

export default PageHero;
