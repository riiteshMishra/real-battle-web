import {
  FiArrowRight,
  FiCheckCircle,
  FiLock,
  FiTarget,
} from "react-icons/fi";
import { GiCrossedSwords, GiTrophyCup } from "react-icons/gi";
import Badge from "@/src/components/ui/Badge";
import { cn } from "@/lib/utils";

const formats = [
  { icon: FiTarget, title: "Solo Battle Royale", meta: "Solo · Last one standing", tone: "brand" },
  { icon: GiCrossedSwords, title: "Squad Classic", meta: "Squad · Full map pressure", tone: "neutral" },
  { icon: GiTrophyCup, title: "Clash Squad 4v4", meta: "Squad · Fast, close-quarters", tone: "success" },
] as const;

/** Decorative product preview for the hero. Not live tournament data. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full border border-dashed border-border"
      />
      <div aria-hidden="true" className="glow-brand absolute -inset-8 -z-10 opacity-60" />

      <div className="surface-card relative rounded-[1.75rem] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.22em] text-dim uppercase">
              Arena board
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              Pick your battle
            </p>
          </div>

          <Badge tone="success" dot>
            Open
          </Badge>
        </div>

        <div className="mt-5 space-y-2">
          {formats.map((format) => {
            const Icon = format.icon;
            const tone =
              format.tone === "brand"
                ? "text-brand"
                : format.tone === "success"
                  ? "text-success"
                  : "text-muted-foreground";

            return (
              <div
                key={format.title}
                className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-card p-3.5 transition-colors hover:border-border hover:bg-elevated"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon aria-hidden="true" className={cn("size-4", tone)} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold text-foreground">
                    {format.title}
                  </span>
                  <span className="block truncate text-[11px] text-dim">
                    {format.meta}
                  </span>
                </span>

                <FiArrowRight aria-hidden="true" className="size-3.5 shrink-0 text-dim" />
              </div>
            );
          })}
        </div>

        <div className="my-5 hairline" />

        <div className="grid gap-3 text-[11px]">
          <div className="flex items-start gap-3">
            <FiLock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
            <p className="leading-5 text-muted-foreground">
              <span className="font-semibold text-foreground">
                Room ID &amp; password
              </span>{" "}
              released in the app after registration.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FiCheckCircle
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-success"
            />
            <p className="leading-5 text-muted-foreground">
              <span className="font-semibold text-foreground">Results checked</span>{" "}
              against match proof before rewards.
            </p>
          </div>
        </div>
      </div>

      <div className="animate-float-soft absolute -top-5 -right-3 hidden rounded-2xl border border-success/30 bg-elevated px-4 py-3 shadow-2xl sm:block motion-reduce:animate-none">
        <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.16em] text-success uppercase">
          <GiTrophyCup aria-hidden="true" className="size-3.5" />
          Booyah bonus
        </p>
        <p className="mt-1 text-[10px] text-dim">Per tournament rules</p>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-brand/30 bg-elevated px-4 py-3 shadow-2xl sm:block">
        <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.16em] text-brand uppercase">
          <FiTarget aria-hidden="true" className="size-3.5" />
          Every kill counts
        </p>
        <p className="mt-1 text-[10px] text-dim">Rewards set per tournament</p>
      </div>
    </div>
  );
}
