import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/src/components/layout/Footer";
import { FiArrowRight, FiDownload, FiSmartphone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Real Battle player dashboard.",
  alternates: {
    canonical: "/dashboard",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardPage = () => {
  return (
    <>
      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-backdrop opacity-40" />
          <div className="glow-brand absolute -top-40 left-1/3 size-[30rem] opacity-40" />
        </div>

        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-border bg-card">
              <FiSmartphone aria-hidden="true" className="size-5 text-brand" />
            </span>

            <p className="eyebrow mt-6 justify-center">Player dashboard</p>

            <h1 className="mt-3 text-[clamp(1.9rem,4.6vw,3rem)] leading-tight font-semibold tracking-[-0.04em] text-foreground">
              Your dashboard lives in the app.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              Registrations, room details, match results and wallet activity are
              handled inside the Real Battle Android app. The web dashboard is
              not public.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/download"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-fill px-6 text-[13px] font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
              >
                <FiDownload aria-hidden="true" className="size-4" />
                Download the app
              </Link>

              <Link
                href="/"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-[13px] font-semibold text-foreground transition-colors hover:border-dim hover:bg-elevated"
              >
                Back to home
                <FiArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DashboardPage;
