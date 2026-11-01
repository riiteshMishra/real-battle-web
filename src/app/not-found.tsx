import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiHome, FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Real Battle.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <main className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-50" />
        <div className="glow-brand absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 opacity-50" />
        <div className="glow-success absolute -right-32 -bottom-40 size-[26rem] opacity-40" />
      </div>

      <div className="container-page py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-heading text-[clamp(6rem,20vw,11rem)] leading-none font-semibold tracking-[-0.06em] text-brand">
            404
          </p>

          <p className="eyebrow justify-center">Outside the arena</p>

          <h1 className="mt-4 text-[clamp(1.6rem,4vw,2.5rem)] leading-tight font-semibold text-foreground">
            This page took a different drop.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            The link you followed does not exist anymore. Head back to the home
            page or jump straight to open tournaments.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-fill px-6 text-[13px] font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
            >
              <FiHome aria-hidden="true" className="size-4" />
              Back to home
            </Link>

            <Link
              href="/tournaments"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-[13px] font-semibold text-foreground transition-colors hover:border-dim hover:bg-elevated"
            >
              <FiSearch aria-hidden="true" className="size-4" />
              Browse tournaments
              <FiArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
