import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload, FiX } from "react-icons/fi";
import { hasAndroidDownload, siteConfig, verifiedSocialLinks } from "@/src/config/site";
import MoreNavItem from "./more-nav-item";
import type { MobileNavLink, NavMeta } from "./mobile-nav.types";
import { isActivePath } from "./mobile-nav.utils";

interface MoreBottomSheetProps {
  open: boolean;
  links: MobileNavLink[];
  meta: Readonly<Record<string, NavMeta>>;
  onClose: () => void;
}

export default function MoreBottomSheet({ open, links, meta, onClose }: MoreBottomSheetProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      id="mobile-more-sheet"
      role="dialog"
      aria-modal="true"
      aria-label="More navigation"
      className="fixed inset-0 z-95 lg:hidden"
    >
      <button
        type="button"
        aria-label="Close more menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div
        className="border-border-subtle bg-background absolute inset-x-0 bottom-0 rounded-t-2xl border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-4">
          <p className="text-foreground text-sm font-semibold">More</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close more menu"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-dim hover:bg-elevated"
          >
            <FiX aria-hidden={true} className="size-4" />
          </button>
        </div>

        <ul className="max-h-[60vh] space-y-2 overflow-y-auto px-5 py-4">
          {links.map((link) => {
            const itemMeta = meta[link.href];
            const Icon = itemMeta?.icon ?? meta["/"].icon;
            return (
              <MoreNavItem
                key={link.href}
                href={link.href}
                label={link.label}
                icon={Icon}
                description={itemMeta?.description}
                active={isActivePath(pathname, link.href)}
                onNavigate={onClose}
              />
            );
          })}

          <li>
            <Link
              href={hasAndroidDownload ? siteConfig.download.androidUrl : "/download"}
              onClick={onClose}
              className="bg-brand-fill text-brand-foreground hover:bg-brand-hover flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition-colors"
            >
              <FiDownload aria-hidden={true} className="size-4" />
              Get the Android app
            </Link>
          </li>
        </ul>

        {verifiedSocialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-3 px-5 pb-4">
            {verifiedSocialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-brand"
                aria-label={social.name}
              >
                {social.name.slice(0, 1).toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}