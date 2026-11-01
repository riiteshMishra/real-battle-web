import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";

interface DownloadButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
  showMeta?: boolean;
  fallbackHref?: string;
}

const variantClasses = {
  primary:
    "bg-linear-to-r from-violet-500 to-violet-600 text-white shadow-[0_12px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_16px_50px_rgba(139,92,246,0.45)]",
  secondary:
    "border border-white/15 bg-white/6 text-foreground hover:border-white/30 hover:bg-white/10",
  ghost: "text-foreground hover:text-accent",
};

const DownloadButton = ({
  className,
  label = "Download Android App",
  variant = "primary",
  showMeta = true,
  fallbackHref = "/download",
}: DownloadButtonProps) => {
  const content = (
    <>
      {variant === "ghost" ? (
        <FiDownload aria-hidden="true" className="size-4" />
      ) : (
        <FaAndroid aria-hidden="true" className="size-4" />
      )}
      <span>{label}</span>
      <FiArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </>
  );

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {hasAndroidDownload ? (
        <a
          href={siteConfig.download.androidUrl}
          download
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex h-13 items-center justify-center gap-2.5 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
            variantClasses[variant],
          )}
        >
          {content}
        </a>
      ) : (
        <Link
          href={fallbackHref}
          className={cn(
            "group inline-flex h-13 items-center justify-center gap-2.5 rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
            variantClasses[variant],
          )}
        >
          {content}
        </Link>
      )}

      {showMeta && (
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-success" />
            Android
          </span>

          {siteConfig.download.version && (
            <>
              <span aria-hidden="true">·</span>
              <span>v{siteConfig.download.version}</span>
            </>
          )}

          {siteConfig.download.size && (
            <>
              <span aria-hidden="true">·</span>
              <span>{siteConfig.download.size}</span>
            </>
          )}

          {!siteConfig.download.version && !siteConfig.download.size && (
            <>
              <span aria-hidden="true">·</span>
              <span>Build details verified before release</span>
            </>
          )}
        </p>
      )}
    </div>
  );
};

export default DownloadButton;
