import { ShieldCheck, type LucideIcon } from "lucide-react";

export interface HeroTrustProps {
  indicators: string[];
  icon?: LucideIcon;
}

export default function HeroTrust({
  indicators,
  icon: Icon = ShieldCheck,
}: HeroTrustProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
      {indicators.map((indicator) => (
        <span key={indicator} className="flex items-center gap-2">
          <Icon aria-hidden="true" className="size-4 text-success" />
          {indicator}
        </span>
      ))}
    </div>
  );
}
