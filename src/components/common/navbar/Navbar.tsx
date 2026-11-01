"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Logo from "../Logo";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";

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

const Navbar = () => {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

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

  return (
    <header className="sticky top-0 z-[100] border-b border-white/8 bg-[#08080d]/82 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => {
            const isCurrent =
              link.href === "/tournaments"
                ? pathname === "/tournaments"
                : link.href === "/faq"
                  ? pathname === "/faq"
                  : false;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  isCurrent
                    ? "bg-white/8 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="group hidden items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-violet-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] sm:inline-flex"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Download App
          </Link>

          <button
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/5 text-foreground transition-colors hover:border-white/25 lg:hidden"
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
          className="fixed inset-x-0 top-16 z-[99] h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/8 bg-[#08080d] lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col py-8">
            <ul className="flex flex-col">
              {mobileLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-white/8 py-4 text-xl font-medium text-foreground"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </span>
                    <HiOutlineArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <Link
                href={hasAndroidDownload ? siteConfig.download.androidUrl : "/download"}
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-violet-600 px-6 py-4 text-sm font-semibold text-white"
              >
                <FiDownload aria-hidden="true" className="size-4" />
                Get the Android app
              </Link>

              <p className="mt-4 text-center text-xs leading-6 text-muted-foreground">
                Questions? Write to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground underline decoration-white/25 underline-offset-4"
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
};

export default Navbar;
