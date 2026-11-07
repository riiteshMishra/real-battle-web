"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import BottomNavItem from "./bottom-nav-item";
import MoreButton from "./more-button";
import MoreBottomSheet from "./more-bottom-sheet";
import {
  mobileNavLinks,
  mobileNavMeta,
  primaryTabs,
} from "./mobile-nav.config";
import { isActivePath } from "./mobile-nav.utils";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (!moreOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  const moreLinks = mobileNavLinks.filter(
    (link) => !primaryTabs.includes(link.href as (typeof primaryTabs)[number]),
  );

  const moreActive =
    ["/about", "/contact-us", "/download"].includes(pathname) ||
    mobileNavLinks.some(
      (link) =>
        !primaryTabs.includes(link.href as (typeof primaryTabs)[number]) &&
        isActivePath(pathname, link.href),
    );

  return (
    <>
      <nav
        aria-label="Mobile bottom navigation"
        className="border-border-subtle bg-background fixed inset-x-0 bottom-0 z-90 border-t lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="flex items-stretch justify-around">
          {primaryTabs.map((href) => {
            const link = mobileNavLinks.find((l) => l.href === href);
            const label = link?.label ?? (href === "/" ? "Home" : href);
            const Icon = mobileNavMeta[href]?.icon ?? mobileNavMeta["/"].icon;
            const active = isActivePath(pathname, href);
            return (
              <BottomNavItem
                key={href}
                href={href}
                label={label}
                icon={Icon}
                active={active}
              />
            );
          })}
          <MoreButton active={moreActive} open={moreOpen} onOpen={() => setMoreOpen(true)} />
        </ul>
      </nav>

      <MoreBottomSheet
        open={moreOpen}
        links={moreLinks}
        meta={mobileNavMeta}
        onClose={() => setMoreOpen(false)}
      />
    </>
  );
}