import Image from "next/image";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { assets } from "@/src/assets/assets";
import ButtonLink from "@/src/components/ui/ButtonLink";
import DownloadButton from "@/src/components/ui/DownloadButton";
import Reveal from "@/src/components/ui/Reveal";

const promises = ["18+ only", "Verified results", "Rules published upfront"];

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle">
      <Image
        src={assets.HeroSectionDecs}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-center opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,10,0.9),rgba(10,10,10,0.97))]" />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 justify-center">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-brand" />
            Your next match
          </p>

          <h2 className="text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.05em]">
            Ready Ho?
            <br />
            <span className="text-emphasis">Let&apos;s Enter The Battle.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground">
            Squad ko call karo, loadout set karo, aur agla match lock karo. The
            arena is waiting.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start">
            <DownloadButton label="Download Android App" showMeta={false} />

            <ButtonLink
              href="/tournaments"
              variant="secondary"
              icon={
                <FiArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              }
            >
              Explore Tournaments
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-dim">
            {promises.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <FiCheckCircle aria-hidden="true" className="size-3.5 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
