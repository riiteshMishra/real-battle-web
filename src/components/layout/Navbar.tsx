"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import Logo from "@/src/components/layout/Logo";
import DesktopNavigation, {
  type NavLink as DesktopNavLink,
} from "@/src/components/layout/navbar/DesktopNavigation";
import { MobileBottomNav } from "@/src/components/mobile-nav";

const primaryLinks: DesktopNavLink[] = [
  { label: "Tournaments", href: "/tournaments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Fair Play", href: "/#fair-play" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="border-border-subtle bg-background/85 sticky top-0 z-100 border-b backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          <DesktopNavigation links={primaryLinks} pathname={pathname} />

          <div className="flex items-center gap-2">
            <Link
              href="/download"
              className="group bg-brand-fill text-brand-foreground hover:bg-brand-hover inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <FiDownload aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">App</span>
            </Link>
          </div>
        </div>
      </header>

      <MobileBottomNav />
    </>
  );
}