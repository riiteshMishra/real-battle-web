import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/src/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** Inner-page hero. Same visual language as the home hero, smaller scale. */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border-subtle bg-surface",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="glow-brand absolute -top-40 left-1/4 size-[34rem] -translate-x-1/2 opacity-80" />
      </div>

      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-brand" />
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
}
