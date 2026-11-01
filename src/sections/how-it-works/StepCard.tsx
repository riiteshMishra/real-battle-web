import type { IconType } from "react-icons";
import type { ReactNode } from "react";

interface StepCardProps {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  connector?: ReactNode;
}

/** One numbered step in a journey timeline. */
export default function StepCard({
  id,
  title,
  description,
  icon: Icon,
  connector,
}: StepCardProps) {
  return (
    <li className="relative border-l border-border pl-8 md:border-l-0 md:pl-0">
      {connector}

      <span className="absolute top-0 -left-[13px] flex size-6 items-center justify-center rounded-full border border-border bg-surface md:static md:mb-5 md:size-10">
        <span className="size-2 rounded-full bg-brand md:hidden" />
        <Icon aria-hidden="true" className="hidden size-4 text-brand md:block" />
      </span>

      <div className="pb-2">
        <p className="font-mono text-[10px] font-bold tracking-[0.24em] text-dim">
          STEP {id}
        </p>

        <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>

        <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}
