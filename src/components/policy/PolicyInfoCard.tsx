import type { LucideIcon } from "lucide-react";

interface PolicyInfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PolicyInfoCard({
  icon: Icon,
  title,
  description,
}: PolicyInfoCardProps) {
  return (
    <article className="rounded-xl border border-border-subtle bg-card p-5 transition-colors duration-200 hover:border-brand/40">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
          <Icon aria-hidden="true" className="size-5 text-brand" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}