import {
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLock,
  FiSmartphone,
  FiUserCheck,
} from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import Container from "@/src/components/ui/Container";
import Reveal from "@/src/components/ui/Reveal";
import SectionHeading from "@/src/components/ui/SectionHeading";

const checks = [
  {
    icon: FiFileText,
    title: "Rules before registration",
    description:
      "Tournament join karne se pehle format, scoring, entry fee aur match schedule tournament par publish kiye jaate hain.",
  },
  {
    icon: FiCheckCircle,
    title: "Result verification",
    description:
      "Players se screenshots, recordings, match results ya UID proof maanga ja sakta hai. Rewards se pehle results check kiye jaate hain.",
  },
  {
    icon: FiClock,
    title: "Dispute window",
    description:
      "Match issues designated support channel ke through tournament ke liye set time window ke andar raise kiye jaate hain.",
  },
  {
    icon: FiUserCheck,
    title: "Administrative review",
    description:
      "Admins available evidence review karte hain aur scores adjust, results reverse, entries disqualify ya penalties apply kar sakte hain.",
  },
  {
    icon: FiSmartphone,
    title: "Device & eligibility rules",
    description:
      "Kuch events mein device, game-version, region, identity ya age requirements ho sakte hain. Ye per tournament list kiye jaate hain.",
  },
  {
    icon: FiLock,
    title: "Account integrity",
    description:
      "Account sharing, impersonation, collusion aur match manipulation se suspension ya reward cancellation ho sakta hai.",
  },
] as const;

export default function FairPlaySection() {
  return (
    <section
      id="fair-play"
      aria-labelledby="fair-play-title"
      className="section-space relative overflow-hidden"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full border border-border-subtle" />
              <div className="absolute inset-8 rounded-full border border-dashed border-border-subtle" />
              <div className="absolute inset-16 rounded-full border border-border-subtle" />
              <div className="glow-success absolute inset-16 opacity-70" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="surface-elevated flex size-40 flex-col items-center justify-center rounded-[2rem] text-center sm:size-48">
                  <RiShieldCheckLine
                    aria-hidden="true"
                    className="size-12 text-success"
                  />
                  <p className="mt-3 font-heading text-sm font-semibold text-foreground">
                    Fair play
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.18em] text-dim uppercase">
                    By the rules
                  </p>
                </div>
              </div>

              {[
                { label: "Verified results", className: "top-2 left-1/2 -translate-x-1/2" },
                { label: "Evidence review", className: "bottom-4 left-0" },
                { label: "Rule enforcement", className: "right-0 bottom-16" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`absolute ${tag.className} rounded-full border border-border bg-surface px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-dim uppercase`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Fair play & security"
              title={
                <span id="fair-play-title">
                  Skill Decides.
                  <br />
                  <span className="text-emphasis">Not Shortcuts.</span>
                </span>
              }
              description="Competitive gaming tabhi kaam karta hai jab rules ka meaning ho. Yahan Real Battle match integrity ko kaise approach karta hai — bina exaggerated security claims ke."
            />

            <Reveal className="mt-10 grid gap-5 sm:grid-cols-2">
              {checks.map((check) => {
                const Icon = check.icon;

                return (
                  <div key={check.title} className="group flex h-full gap-3.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover:border-brand/40 group-hover:bg-brand-soft">
                      <Icon aria-hidden="true" className="size-4 text-brand" />
                    </span>

                    <div>
                      <h3 className="text-[13px] font-semibold text-foreground">
                        {check.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-5 text-muted-foreground">
                        {check.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 rounded-xl border border-border-subtle bg-card px-4 py-3 text-[11px] leading-5 text-dim">
                Real Battle hardware-level anti-cheat, HWID locking ya 100% cheat prevention ka claim nahi karta. Enforcement published rules aur har match ke available evidence par based hota hai.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}