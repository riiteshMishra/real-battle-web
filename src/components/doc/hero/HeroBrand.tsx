import type { LucideIcon } from "lucide-react";

export interface HeroBrandProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

/** Small brand row that sits above the document headline. */
export default function HeroBrand({
  icon: Icon,
  title,
  subtitle,
}: HeroBrandProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand-soft">
        <Icon aria-hidden="true" className="size-5 text-brand" />
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-dim">{subtitle}</p>
      </div>
    </div>
  );
}
