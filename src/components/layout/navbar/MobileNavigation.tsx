import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";

export interface MobileNavLink {
  label: string;
  href: string;
}

interface MobileNavigationProps {
  open: boolean;
  links: MobileNavLink[];
  menuRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

export default function MobileNavigation({
  open,
  links,
  menuRef,
  onClose,
}: MobileNavigationProps) {
  if (!open) return null;

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="border-border-subtle bg-background fixed inset-x-0 top-16 z-99 h-[calc(100dvh-4rem)] overflow-y-auto border-t lg:hidden"
    >
      <nav
        aria-label="Mobile"
        className="container-page flex min-h-full flex-col py-8"
      >
        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group border-border-subtle text-foreground flex items-center justify-between border-b py-4 text-xl font-medium"
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-dim font-mono text-[10px] tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </span>
                <HiOutlineArrowUpRight
                  aria-hidden="true"
                  className="text-dim group-hover:text-brand size-4 transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <Link
            href={
              hasAndroidDownload ? siteConfig.download.androidUrl : "/download"
            }
            onClick={onClose}
            className="bg-brand-fill text-brand-foreground hover:bg-brand-hover flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition-colors"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Get the Android app
          </Link>

          <p className="text-muted-foreground mt-4 text-center text-xs leading-6">
            Questions? Write to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground decoration-border underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}
