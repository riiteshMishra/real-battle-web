import { FiArrowRight, FiShield, FiSmartphone, FiWifi } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { GiCrossedSwords, GiTrophyCup } from "react-icons/gi";

/** Decorative app preview. Not a real screenshot; no live data claimed. */
export default function PhonePreview() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[17rem]">
      <div className="glow-brand absolute -inset-8 -z-10 rounded-full" />

      <div className="relative rounded-[2.4rem] border border-border bg-background p-2 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface">
          <div className="flex items-center justify-between px-5 pt-4 text-[9px] text-dim">
            <span>20:00</span>
            <span className="flex items-center gap-1">
              <FiWifi className="size-2.5" />
              4G
            </span>
          </div>

          <div className="px-5 pt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg border border-brand/40 bg-brand-soft">
                  <GiCrossedSwords className="size-3 text-brand" />
                </span>
                <div>
                  <p className="font-heading text-[10px] font-bold tracking-wide text-foreground">
                    REAL BATTLE
                  </p>
                  <p className="text-[7px] tracking-[0.18em] text-dim uppercase">
                    Competitive arena
                  </p>
                </div>
              </div>

              <span className="size-6 rounded-full border border-border bg-card" />
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card p-4">
              <p className="text-[7px] font-bold tracking-[0.2em] text-brand uppercase">
                Arena board
              </p>
              <p className="mt-1 font-heading text-sm leading-tight font-semibold text-foreground">
                Apni squad
                <br />
                ready karo.
              </p>
              <div className="mt-3 flex gap-1.5">
                <span className="rounded-full bg-elevated px-2 py-0.5 text-[7px] text-muted-foreground">
                  Solo
                </span>
                <span className="rounded-full bg-elevated px-2 py-0.5 text-[7px] text-muted-foreground">
                  Clash
                </span>
                <span className="rounded-full bg-brand-fill px-2 py-0.5 text-[7px] text-brand-foreground">
                  Squad
                </span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {["Solo Battle Royale", "Squad Classic"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-border-subtle bg-card px-3 py-2.5"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-md bg-elevated">
                      <FiSmartphone className="size-2.5 text-brand" />
                    </span>
                    <span className="text-[8px] font-medium text-muted-foreground">
                      {label}
                    </span>
                  </span>
                  <FiArrowRight className="size-2.5 text-dim" />
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-success/25 bg-success-soft px-3 py-2">
              <GiTrophyCup className="size-3 text-success" />
              <span className="text-[7px] leading-tight text-success">
                Prize pool &amp; rules before you register
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-around border-t border-border-subtle px-4 py-3 text-dim">
            <FaAndroid className="size-3.5 text-brand" />
            <GiCrossedSwords className="size-3.5" />
            <FiSmartphone className="size-3.5" />
          </div>
        </div>
      </div>

      <div className="absolute top-24 -right-4 hidden rounded-xl border border-success/30 bg-surface px-3 py-2 shadow-xl sm:block">
        <p className="flex items-center gap-1 text-[8px] font-bold tracking-[0.14em] text-success uppercase">
          <FiShield className="size-2.5" />
          Results checked
        </p>
      </div>
    </div>
  );
}
