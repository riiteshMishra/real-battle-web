"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PolicyTocItem {
  id: string;
  title: string;
}

interface PolicyMobileNavigationProps {
  items: readonly PolicyTocItem[];
  title: string;
}

export default function PolicyMobileNavigation({
  items,
  title,
}: PolicyMobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="policy-mobile-toc"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-xl border border-border-subtle bg-card px-4 py-3 text-left text-sm font-semibold text-foreground"
      >
        <span>{title}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <nav
          id="policy-mobile-toc"
          aria-label={title}
          className="mt-2 rounded-xl border border-border-subtle bg-card p-2"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}