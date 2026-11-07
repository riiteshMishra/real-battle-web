import Link from "next/link";
import { ComponentType } from "react";

interface BottomNavItemProps {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  active: boolean;
}

export default function BottomNavItem({
  href,
  label,
  icon: Icon,
  active,
}: BottomNavItemProps) {
  return (
    <li className="flex-1">
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className="flex min-h-11 flex-col items-center justify-center gap-0.5 py-2 text-[10px] transition-colors"
      >
        <Icon
          aria-hidden={true}
          className={`size-5 ${active ? "text-brand" : "text-muted-foreground"}`}
        />
        <span className={active ? "text-brand font-semibold" : "text-dim"}>
          {label}
        </span>
      </Link>
    </li>
  );
}
