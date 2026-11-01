import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { assets } from "@/src/assets/assets";
import DownloadButton from "./download-button";
import Reveal from "./reveal";

const FinalCta = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/8">
      <Image
        src={assets.HeroSectionDecs}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-center opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,8,13,0.88),rgba(8,8,13,0.96))]" />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 justify-center">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Your next match
          </p>

          <h2 className="text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.05em]">
            Ready Ho?
            <br />
            <span className="text-gradient">Let&apos;s Enter The Battle.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground">
            Squad ko call karo, loadout set karo, aur agla match lock karo. The
            arena is waiting.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start">
            <DownloadButton label="Download Android App" showMeta={false} />

            <Link
              href="/tournaments"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.09]"
            >
              Explore Tournaments
              <FiArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/60">
            <li className="inline-flex items-center gap-1.5">
              <FiCheckCircle aria-hidden="true" className="size-3.5 text-success" />
              18+ only
            </li>
            <li className="inline-flex items-center gap-1.5">
              <FiCheckCircle aria-hidden="true" className="size-3.5 text-success" />
              Verified results
            </li>
            <li className="inline-flex items-center gap-1.5">
              <FiCheckCircle aria-hidden="true" className="size-3.5 text-success" />
              Rules published upfront
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
