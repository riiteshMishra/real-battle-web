"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { getTournaments } from "@/src/services/tournaments";
import SectionHeading from "@/src/components/marketing/section-heading";
import Reveal from "@/src/components/marketing/reveal";
import TournamentCard from "./tournament-card";
import TournamentFilters, {
  type TournamentFilter,
} from "./tournament-filters";
import { cn } from "@/lib/utils";

interface TournamentShowcaseProps {
  variant?: "home" | "page";
}

const TournamentShowcase = ({ variant = "home" }: TournamentShowcaseProps) => {
  const [filter, setFilter] = useState<TournamentFilter>("all");
  const [visible, setVisible] = useState(variant === "home" ? 6 : 9);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
    staleTime: 60_000,
    retry: 1,
  });

  const filtered = useMemo(() => {
    if (!data) return [];

    switch (filter) {
      case "solo":
        return data.items.filter((item) => item.mode === "solo");
      case "squad":
        return data.items.filter((item) => item.mode === "squad");
      case "clash-squad":
        return data.items.filter((item) => item.mode === "clash-squad");
      case "free":
        return data.items.filter((item) => item.entryFee === 0);
      default:
        return data.items;
    }
  }, [data, filter]);

  const visibleItems = filtered.slice(0, visible);

  const handleFilter = (next: TournamentFilter) => {
    setFilter(next);
    setVisible(variant === "home" ? 6 : 9);
  };

  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-title"
      className="section-space relative overflow-hidden border-y border-white/8 bg-[#0b0b12]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-violet absolute top-0 left-1/3 size-[32rem] opacity-30" />
        <div className="glow-cyan absolute right-0 bottom-0 size-[26rem] opacity-25" />
      </div>

      <div className="container-page relative">
        {variant === "home" ? (
          <SectionHeading
            eyebrow="The Arena"
            title={
              <span id="tournaments-title">
                Apni Squad Ready Karo.
                <br />
                <span className="text-gradient">Battle Mein Entry Lo.</span>
              </span>
            }
            description="Solo pushes, squad classics, Clash Squad 4v4 and free-entry scrims. Filter the board, check the rules, and lock your slot in the app."
            action={
              <Link
                href="/tournaments"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-[13px] font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                View all tournaments
                <FiArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            }
          />
        ) : (
          <div className="flex flex-col gap-2">
            <h2
              id="tournaments-title"
              className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Match board
            </h2>
            <p className="text-sm text-muted-foreground">
              Filter by format or entry fee. Registration and room details are
              handled inside the app.
            </p>
          </div>
        )}

        <div className="mt-8">
          <TournamentFilters value={filter} onChange={handleFilter} />
        </div>

        {data?.isDemo && (
          <Reveal className="mt-4">
            <p className="flex items-start gap-2 rounded-xl border border-gold/20 bg-gold/[0.06] px-4 py-3 text-[12px] leading-6 text-gold/90">
              <FiAlertCircle
                aria-hidden="true"
                className="mt-1 size-4 shrink-0"
              />
              <span>{data.note}</span>
            </p>
          </Reveal>
        )}

        {isLoading && (
          <div
            aria-live="polite"
            aria-busy="true"
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <span className="sr-only">Loading tournaments</span>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[27rem] animate-pulse rounded-3xl border border-white/8 bg-white/[0.03]"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="mt-8 rounded-2xl border border-danger/25 bg-danger/5 p-8 text-center">
            <FiAlertCircle
              aria-hidden="true"
              className="mx-auto mb-3 size-6 text-danger"
            />
            <p className="text-sm font-semibold text-foreground">
              The tournament board could not load.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Check your connection and try again.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-5 cursor-pointer rounded-full border border-white/15 bg-white/6 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="font-heading text-xl font-semibold text-foreground">
              No matches in this filter right now.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try another format, or check back closer to the next schedule.
            </p>
            <button
              type="button"
              onClick={() => handleFilter("all")}
              className="mt-5 cursor-pointer rounded-full border border-white/15 bg-white/6 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Show all matches
            </button>
          </div>
        )}

        {!isLoading && !isError && visibleItems.length > 0 && (
          <>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleItems.map((tournament, index) => (
                <Reveal
                  key={tournament.id}
                  delay={Math.min(index * 60, 240)}
                  className="h-full"
                >
                  <TournamentCard
                    tournament={tournament}
                    isDemo={data?.isDemo}
                  />
                </Reveal>
              ))}
            </div>

            <div
              className={cn(
                "mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row",
                filtered.length <= visible && "sm:justify-center",
              )}
            >
              <p className="text-xs text-muted-foreground">
                Showing {visibleItems.length} of {filtered.length} matches
              </p>

              {filtered.length > visible && (
                <button
                  type="button"
                  onClick={() => setVisible((count) => count + 3)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Load more matches
                  <FiArrowRight aria-hidden="true" className="size-4" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TournamentShowcase;
