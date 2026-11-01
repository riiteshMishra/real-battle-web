"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Logo from "@/src/components/layout/Logo";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "Tournaments", href: "/tournaments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Fair Play", href: "/#fair-play" },
  { label: "FAQ", href: "/faq" },
];

const mobileLinks = [
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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
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
    <header className="sticky top-0 z-[100] border-b border-border-subtle bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => {
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

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="group hidden items-center gap-2 rounded-full bg-brand-fill px-5 py-2.5 text-[13px] font-semibold text-brand-foreground transition-colors hover:bg-brand-hover sm:inline-flex"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Download App
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-dim hover:bg-elevated lg:hidden"
          >
            {open ? (
              <FiX aria-hidden="true" className="size-5" />
            ) : (
              <FiMenu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-[99] h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border-subtle bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col py-8">
            <ul className="flex flex-col">
              {mobileLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-border-subtle py-4 text-xl font-medium text-foreground"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-dim">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </span>
                    <HiOutlineArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <Link
                href={hasAndroidDownload ? siteConfig.download.androidUrl : "/download"}
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-fill px-6 py-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
              >
                <FiDownload aria-hidden="true" className="size-4" />
                Get the Android app
              </Link>

              <p className="mt-4 text-center text-xs leading-6 text-muted-foreground">
                Questions? Write to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground underline decoration-border underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
