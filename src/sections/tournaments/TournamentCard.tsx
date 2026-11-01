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
  { label: string; icon: IconType; art: string; text: string }
> = {
  solo: {
    label: "Solo Battle Royale",
    icon: FiTarget,
    art: "from-brand/25 via-brand/5 to-transparent",
    text: "text-brand",
  },
  squad: {
    label: "Squad Classic",
    icon: GiCrossedSwords,
    art: "from-white/10 via-white/[0.03] to-transparent",
    text: "text-foreground",
  },
  "clash-squad": {
    label: "Clash Squad 4v4",
    icon: GiTrophyCup,
    art: "from-success/20 via-success/5 to-transparent",
    text: "text-success",
  },
  scrim: {
    label: "Free Entry Scrim",
    icon: FiZap,
    art: "from-success/15 via-success/5 to-transparent",
    text: "text-success",
  },
};

const statusMeta: Record<
  TournamentStatus,
  { label: string; className: string; dot: string }
> = {
  "registration-open": {
    label: "Registration open",
    className: "border-success/30 bg-success-soft text-success",
    dot: "bg-success",
  },
  "starting-soon": {
    label: "Starting soon",
    className: "border-brand/30 bg-brand-soft text-brand",
    dot: "bg-brand",
  },
  live: {
    label: "Live now",
    className: "border-brand/40 bg-brand-soft text-brand",
    dot: "bg-brand animate-battle-pulse",
  },
  completed: {
    label: "Completed",
    className: "border-border bg-card text-muted-foreground",
    dot: "bg-dim",
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

export default function TournamentCard({
  tournament,
  isDemo,
}: TournamentCardProps) {
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card transition-colors duration-300 hover:border-border">
      <div className="relative h-32 overflow-hidden border-b border-border-subtle">
        <div className={cn("absolute inset-0 bg-linear-to-br", mode.art)} />
        <div className="absolute inset-0 grid-backdrop opacity-25" />

        <ModeIcon
          aria-hidden="true"
          className={cn(
            "absolute -right-3 -bottom-8 size-36 opacity-[0.12] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none",
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
              <span className="rounded-full border border-border bg-background/70 px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] text-dim uppercase">
                Sample
              </span>
            )}
          </div>

          <span
            className={cn(
              "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold",
              status.className,
            )}
          >
            <span className={cn("size-1.5 rounded-full", status.dot)} />
            {status.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-snug font-semibold text-foreground">
          {tournament.title}
        </h3>

        <dl className="mt-4 grid grid-cols-1 gap-2.5 text-[13px]">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FiMapPin aria-hidden="true" className="size-3.5 shrink-0 text-dim" />
            <dt className="sr-only">Map</dt>
            <dd>{tournament.map}</dd>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <FiUsers aria-hidden="true" className="size-3.5 shrink-0 text-dim" />
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
            <FiClock aria-hidden="true" className="size-3.5 shrink-0 text-dim" />
            <dt className="sr-only">Schedule</dt>
            <dd>{tournament.scheduleLabel}</dd>
          </div>
        </dl>

        <div className="my-4 hairline" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-dim uppercase">
              Prize pool
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold tracking-tight text-success">
              {tournament.prizePool > 0
                ? inr.format(tournament.prizePool)
                : "Practice"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-dim uppercase">
              Entry
            </p>
            <p className="mt-1 flex items-center justify-end gap-1.5 text-sm font-semibold text-foreground">
              <FiCreditCard aria-hidden="true" className="size-3.5 text-dim" />
              {isFreeEntry ? "Free" : inr.format(tournament.entryFee)}
            </p>
          </div>
        </div>

        {(tournament.perKill > 0 || tournament.booyahBonus > 0) && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-border-subtle bg-surface px-3 py-2">
              <p className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-dim uppercase">
                <FiTarget aria-hidden="true" className="size-3 text-brand" />
                Per kill
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                {tournament.perKill > 0 ? inr.format(tournament.perKill) : "—"}
              </p>
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface px-3 py-2">
              <p className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-dim uppercase">
                <FiAward aria-hidden="true" className="size-3 text-success" />
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
          <div className="flex items-center justify-between text-[11px] text-dim">
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
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-elevated"
          >
            <div
              className={cn(
                "h-full rounded-full transition-[width] duration-700",
                fillPercent > 85 ? "bg-brand" : "bg-success",
              )}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        <Link
          href="/download"
          className="group/cta mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-fill text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
        >
          {isFull
            ? "Join waitlist in app"
            : isFreeEntry
              ? "Join free in app"
              : "Register in app"}
          <span className="sr-only"> for {tournament.title}</span>
          <FiArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover/cta:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
