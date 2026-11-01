import Link from "next/link";
import { GiCrossedSwords } from "react-icons/gi";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

const Logo = ({ className, compact = false }: LogoProps) => {
  return (
    <Link
      href="/"
      aria-label={compact ? "Real Battle — home" : undefined}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-linear-to-br from-violet-500/25 via-transparent to-cyan-400/20 shadow-[0_0_24px_rgba(139,92,246,0.22)]">
        <span className="absolute inset-0 bg-linear-to-br from-violet-500/30 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <GiCrossedSwords
          aria-hidden="true"
          className="relative size-4 text-white transition-transform duration-300 group-hover:-rotate-6"
        />
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-heading text-lg font-bold tracking-tight text-foreground ${className ?? ""}`}
          >
            REAL BATTLE
          </span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Competitive Arena
          </span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
