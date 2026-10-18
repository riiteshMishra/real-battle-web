"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/src/data/navlinks";

const MobileBottomNav = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    const handleScroll = () => {
      const sections = navLinks
        .map((link) => link.href.split("#")[1])
        .filter(Boolean);

      let currentSection = "";

      for (const id of sections) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id;
        }
      }

      if (currentSection) {
        setActiveHash(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      aria-label="Mobile navigation"
      className="border-border/70 bg-background/95 fixed inset-x-0 bottom-0 z-50 border-t pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const sectionId = link.href.split("#")[1];

          const isActive =
            pathname === "/" &&
            (sectionId === "home"
              ? activeHash === "#home" || activeHash === ""
              : activeHash === `#${sectionId}`);

          return (
            <li key={link.id}>
              <Link
                href={link.href}
                aria-label={link.title}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveHash(`#${sectionId}`)}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1 text-[10px] font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="bg-primary absolute top-0 h-0.5 w-7 rounded-full" />
                )}

                <Icon
                  size={17}
                  strokeWidth={isActive ? 2.4 : 1.8}
                  aria-hidden="true"
                />

                <span className="max-w-full truncate">{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
