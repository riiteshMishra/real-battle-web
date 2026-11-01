import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/src/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}

/** Shared section intro: eyebrow, headline, description and optional action. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "items-start",
        action && !centered ? "md:flex-row md:items-end md:justify-between" : "",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow && (
          <p className="eyebrow mb-4">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-brand" />
            {eyebrow}
          </p>
        )}

        <h2 className="text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-foreground">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
