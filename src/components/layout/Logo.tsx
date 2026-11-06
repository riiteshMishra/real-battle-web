import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/** Brand lockup using the official Real Battle logo asset. */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={compact ? "Real Battle — home" : undefined}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="border-brand/30 bg-brand-soft group-hover:border-brand relative flex size-9 items-center justify-center overflow-hidden rounded-xl border transition-colors">
        <Image
          src="/icons/realbattle-192.png"
          alt="Real Battle"
          width={24}
          height={24}
          className="size-6 object-contain"
          priority
        />
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-foreground text-lg font-bold tracking-tight",
              className,
            )}
          >
            REAL BATTLE
          </span>
        </span>
      )}
    </Link>
  );
}
