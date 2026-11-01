import Link from "next/link";
import { GiCrossedSwords } from "react-icons/gi";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/** Brand lockup. The mark is red-on-black; wordmark stays neutral. */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={compact ? "Real Battle — home" : undefined}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-brand/40 bg-brand-soft transition-colors group-hover:border-brand">
        <GiCrossedSwords
          aria-hidden="true"
          className="size-4 text-brand transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transform-none"
        />
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-lg font-bold tracking-tight text-foreground",
              className,
            )}
          >
            REAL BATTLE
          </span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-dim uppercase">
            Competitive Arena
          </span>
        </span>
      )}
    </Link>
  );
}
