"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PolicyTocItem {
  id: string;
  title: string;
}

interface PolicySidebarProps {
  items: readonly PolicyTocItem[];
  title: string;
}

export default function PolicySidebar({ items, title }: PolicySidebarProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={title}
      className="rounded-xl border border-border-subtle bg-card p-4"
    >
      <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-dim uppercase">
        {title}
      </p>

      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block rounded-md px-2.5 py-1.5 text-sm leading-5 transition-colors",
                  isActive
                    ? "bg-brand-soft font-semibold text-brand"
                    : "text-muted-foreground hover:bg-elevated hover:text-foreground",
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}