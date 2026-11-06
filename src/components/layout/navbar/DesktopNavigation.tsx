import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
}

interface DesktopNavigationProps {
  links: NavLink[];
  pathname: string;
}

export default function DesktopNavigation({
  links,
  pathname,
}: DesktopNavigationProps) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {links.map((link) => {
        const isCurrent =
          link.href === "/tournaments" || link.href === "/faq"
            ? pathname === link.href
            : false;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
              isCurrent
                ? "bg-brand-soft text-brand"
                : "text-muted-foreground hover:bg-elevated hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}