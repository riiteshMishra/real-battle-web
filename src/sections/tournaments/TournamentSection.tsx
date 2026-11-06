"use client";

import { useQuery } from "@tanstack/react-query";
import { FiArrowRight } from "react-icons/fi";
import { getTournaments } from "@/src/services/tournaments";
import ButtonLink from "@/src/components/ui/ButtonLink";
import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { EmptyState, ErrorState } from "@/src/components/ui/States";
import TournamentFilters from "@/src/sections/tournaments/TournamentFilters";
import TournamentDemoNotice from "@/src/sections/tournaments/TournamentDemoNotice";
import TournamentGrid from "@/src/sections/tournaments/TournamentGrid";
import { useTournamentFilters } from "@/src/hooks/useTournamentFilters";

interface TournamentSectionProps {
  variant?: "home" | "page";
}

function GridSkeleton() {
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      <span className="sr-only">Loading tournaments</span>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="h-[27rem] animate-pulse rounded-3xl border border-border-subtle bg-card"
        />
      ))}
    </div>
  );
}

export default function TournamentSection({
  variant = "home",
}: TournamentSectionProps) {
  const initialVisible = variant === "home" ? 6 : 9;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
    staleTime: 60_000,
    retry: 1,
  });

  const {
    filter,
    selectFilter,
    visibleItems,
    total,
    hasMore,
    loadMore,
  } = useTournamentFilters(data?.items, initialVisible);

  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-title"
      className="section-space relative overflow-hidden border-y border-border-subtle bg-surface"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-brand absolute top-0 left-1/3 size-[32rem] opacity-50" />
      </div>

      <Container className="relative">
        {variant === "home" ? (
          <SectionHeading
            eyebrow="The Arena"
            title={
              <span id="tournaments-title">
                Apni Squad Ready Karo.
                <br />
                <span className="text-emphasis">Battle Mein Entry Lo.</span>
              </span>
            }
            description="Solo pushes, squad classics, Clash Squad 4v4 and free-entry scrims. Filter the board, check the rules, and lock your slot in the app."
            action={
              <ButtonLink
                href="/tournaments"
                variant="secondary"
                size="md"
                icon={
                  <FiArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                }
              >
                View all tournaments
              </ButtonLink>
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
              Filter by format or entry fee. Registration aur room details app
              ke andar handle hote hain.
            </p>
          </div>
        )}

        <div className="mt-8">
          <TournamentFilters value={filter} onChange={selectFilter} />
        </div>

        {data?.isDemo && data.note && (
          <TournamentDemoNotice note={data.note} />
        )}

        {isLoading && <GridSkeleton />}

        {isError && (
          <div className="mt-8">
            <ErrorState
              title="The tournament board could not load."
              description="Check your connection and try again."
              action={
                <button
                  type="button"
                  onClick={() => refetch()}
                  className="cursor-pointer rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-elevated"
                >
                  Retry
                </button>
              }
            />
          </div>
        )}

        {!isLoading && !isError && total === 0 && (
          <div className="mt-8">
            <EmptyState
              title="No matches in this filter right now."
              description="Try another format, or check back closer to the next schedule."
              action={
                <button
                  type="button"
                  onClick={() => selectFilter("all")}
                  className="cursor-pointer rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-elevated"
                >
                  Show all matches
                </button>
              }
            />
          </div>
        )}

        {!isLoading && !isError && visibleItems.length > 0 && (
          <>
            <TournamentGrid tournaments={visibleItems} isDemo={data?.isDemo} />

            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-dim">
                Showing {visibleItems.length} of {total} matches
              </p>

              {hasMore && (
                <button
                  type="button"
                  onClick={loadMore}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-dim hover:bg-elevated"
                >
                  Load more matches
                  <FiArrowRight aria-hidden="true" className="size-4" />
                </button>
              )}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
