import Link from "next/link";
import { ComponentType } from "react";

interface MoreNavItemProps {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  description?: string;
  active: boolean;
  onNavigate: () => void;
}

export default function MoreNavItem({
  href,
  label,
  icon: Icon,
  description,
  active,
  onNavigate,
}: MoreNavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={`group flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors ${
          active
            ? "border-brand/40 bg-brand-soft"
            : "border-border-subtle bg-card hover:border-dim hover:bg-elevated"
        }`}
      >
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${
            active
              ? "border-brand/40 bg-brand-soft text-brand"
              : "border-border bg-background text-muted-foreground group-hover:text-brand"
          }`}
        >
          <Icon aria-hidden={true} className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-[14px] font-semibold ${active ? "text-brand" : "text-foreground"}`}>
            {label}
          </span>
          {description && <span className="text-dim mt-0.5 block text-[11px]">{description}</span>}
        </span>
      </Link>
    </li>
  );
}