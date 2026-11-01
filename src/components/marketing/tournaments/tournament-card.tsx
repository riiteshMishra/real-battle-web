import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { GiCrossedSwords, GiTrophyCup } from "react-icons/gi";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import type {
  Tournament,
  TournamentMode,
  TournamentStatus,
} from "@/src/services/tournaments/types";

const modeMeta: Record<
  TournamentMode,
  {
    label: string;
    icon: IconType;
    art: string;
    text: string;
  }
> = {
  solo: {
    label: "Solo Battle Royale",
    icon: FiTarget,
    art: "from-violet-600/30 via-violet-500/5 to-transparent",
    text: "text-violet-300",
  },
  squad: {
    label: "Squad Classic",
    icon: GiCrossedSwords,
    art: "from-cyan-500/25 via-cyan-400/5 to-transparent",
    text: "text-cyan-300",
  },
  "clash-squad": {
    label: "Clash Squad 4v4",
    icon: GiTrophyCup,
    art: "from-amber-400/25 via-amber-300/5 to-transparent",
    text: "text-gold",
  },
  scrim: {
    label: "Free Entry Scrim",
    icon: FiZap,
    art: "from-emerald-400/20 via-emerald-300/5 to-transparent",
    text: "text-success",
  },
};

const statusMeta: Record<
  TournamentStatus,
  { label: string; className: string; dot: string }
> = {
  "registration-open": {
    label: "Registration open",
    className: "border-success/25 bg-success/10 text-success",
    dot: "bg-success",
  },
  "starting-soon": {
    label: "Starting soon",
    className: "border-gold/25 bg-gold/10 text-gold",
    dot: "bg-gold",
  },
  live: {
    label: "Live now",
    className: "border-danger/25 bg-danger/10 text-danger",
    dot: "bg-danger animate-battle-pulse",
  },
  completed: {
    label: "Completed",
    className: "border-white/12 bg-white/5 text-muted-foreground",
    dot: "bg-muted-foreground",
  },
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

interface TournamentCardProps {
  tournament: Tournament;
  isDemo?: boolean;
}

const TournamentCard = ({ tournament, isDemo }: TournamentCardProps) => {
  const mode = modeMeta[tournament.mode];
  const ModeIcon = mode.icon;
  const status = statusMeta[tournament.status];
  const isFreeEntry = tournament.entryFee === 0;
  const slotsLeft = Math.max(tournament.slotsTotal - tournament.slotsFilled, 0);
  const fillPercent = Math.min(
    Math.round((tournament.slotsFilled / tournament.slotsTotal) * 100),
    100,
  );
  const isFull = slotsLeft === 0;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)] motion-reduce:transform-none motion-reduce:transition-none">
      {/* Artwork header */}
      <div className="relative h-32 overflow-hidden border-b border-white/8">
        <div className={cn("absolute inset-0 bg-linear-to-br", mode.art)} />
        <div className="absolute inset-0 grid-backdrop opacity-30" />

        <ModeIcon
          aria-hidden="true"
          className={cn(
            "absolute -right-3 -bottom-8 size-36 opacity-[0.13] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none",
            mode.text,
          )}
        />

        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-3">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase",
                mode.text,
              )}
            >
              <ModeIcon aria-hidden="true" className="size-3.5" />
              {mode.label}
            </span>

            {isDemo && (
              <span className="rounded-full border border-white/12 bg-black/35 px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] text-white/60 uppercase backdrop-blur-sm">
                Sample
              </span>
            )}
          </div>

          <div>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm",
                status.className,
              )}
            >
              <span className={cn("size-1.5 rounded-full", status.dot)} />
              {status.label}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-snug font-semibold text-foreground">
          {tournament.title}
        </h3>

        <dl className="mt-4 grid grid-cols-1 gap-2.5 text-[13px]">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FiMapPin aria-hidden="true" className="size-3.5 shrink-0 text-white/35" />
            <dt className="sr-only">Map</dt>
            <dd>{tournament.map}</dd>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <FiUsers aria-hidden="true" className="size-3.5 shrink-0 text-white/35" />
            <dt className="sr-only">Format</dt>
            <dd>
              {tournament.format} ·{" "}
              {tournament.mode === "clash-squad"
                ? "Clash Squad 4v4"
                : tournament.mode === "scrim"
                  ? "Scrim"
                  : "Battle Royale"}
            </dd>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <FiClock aria-hidden="true" className="size-3.5 shrink-0 text-white/35" />
            <dt className="sr-only">Schedule</dt>
            <dd>{tournament.scheduleLabel}</dd>
          </div>
        </dl>

        <div className="my-4 hairline" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Prize pool
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold tracking-tight text-gold">
              {tournament.prizePool > 0 ? inr.format(tournament.prizePool) : "Practice"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Entry
            </p>
            <p className="mt-1 flex items-center justify-end gap-1.5 text-sm font-semibold text-foreground">
              <FiCreditCard aria-hidden="true" className="size-3.5 text-white/35" />
              {isFreeEntry ? "Free" : inr.format(tournament.entryFee)}
            </p>
          </div>
        </div>

        {(tournament.perKill > 0 || tournament.booyahBonus > 0) && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2">
              <p className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                <FiTarget aria-hidden="true" className="size-3 text-violet-300" />
                Per kill
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                {tournament.perKill > 0 ? inr.format(tournament.perKill) : "—"}
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2">
              <p className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                <FiAward aria-hidden="true" className="size-3 text-gold" />
                Booyah
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                {tournament.booyahBonus > 0
                  ? inr.format(tournament.booyahBonus)
                  : "—"}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              <strong className="font-semibold text-foreground">
                {tournament.slotsFilled}
              </strong>{" "}
              / {tournament.slotsTotal} slots filled
            </span>
            <span>{isFull ? "Full" : `${slotsLeft} left`}</span>
          </div>

          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={fillPercent}
            aria-label={`${tournament.title} slots filled`}
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8"
          >
            <div
              className={cn(
                "h-full rounded-full transition-[width] duration-700",
                fillPercent > 85
                  ? "bg-linear-to-r from-danger to-gold"
                  : "bg-linear-to-r from-violet-500 to-cyan-400",
              )}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        <Link
          href="/download"
          className="group/cta mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 text-sm font-semibold text-foreground transition-all hover:border-violet-400/50 hover:bg-violet-500/15"
        >
          {isFull ? "Join waitlist in app" : isFreeEntry ? "Join free in app" : "Register in app"}
          <span className="sr-only"> for {tournament.title}</span>
          <FiArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover/cta:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
};

export default TournamentCard;
