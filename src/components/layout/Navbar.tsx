"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import Logo from "@/src/components/layout/Logo";
import DesktopNavigation, {
  type NavLink as DesktopNavLink,
} from "@/src/components/layout/navbar/DesktopNavigation";
import MobileNavigation, {
  type MobileNavLink,
} from "@/src/components/layout/navbar/MobileNavigation";
import MobileMenuToggle from "@/src/components/layout/navbar/MobileMenuToggle";

const primaryLinks: DesktopNavLink[] = [
  { label: "Tournaments", href: "/tournaments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Fair Play", href: "/#fair-play" },
  { label: "FAQ", href: "/faq" },
];

const mobileLinks: MobileNavLink[] = [
  ...primaryLinks,
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
  { label: "Download App", href: "/download" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const closeMenu = () => setOpenPath(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const mainContent = document.getElementById("main-content");
    mainContent?.setAttribute("inert", "");

    const getFocusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      mainContent?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open && !wasOpen.current) {
      const firstLink =
        menuRef.current?.querySelector<HTMLElement>("a[href]") ?? null;
      firstLink?.focus();
    }

    if (!open && wasOpen.current && document.activeElement === document.body) {
      toggleRef.current?.focus();
    }

    wasOpen.current = open;
  }, [open]);

  return (
    <header className="border-border-subtle bg-background/85 sticky top-0 z-100 border-b backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <DesktopNavigation links={primaryLinks} pathname={pathname} />

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="group bg-brand-fill text-brand-foreground hover:bg-brand-hover hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors sm:inline-flex"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Download App
          </Link>

          <MobileMenuToggle
            open={open}
            onToggle={() => setOpenPath(open ? null : pathname)}
            toggleRef={toggleRef}
          />
        </div>
      </div>

      <MobileNavigation
        open={open}
        links={mobileLinks as MobileNavLink[]}
        menuRef={menuRef}
        onClose={closeMenu}
      />
    </header>
  );
}
