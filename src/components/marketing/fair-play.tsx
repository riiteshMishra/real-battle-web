import {
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLock,
  FiSmartphone,
  FiUserCheck,
} from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const checks = [
  {
    icon: FiFileText,
    title: "Rules before registration",
    description:
      "Format, scoring, entry fee and match schedule are published on the tournament before you join.",
  },
  {
    icon: FiCheckCircle,
    title: "Result verification",
    description:
      "Players may be asked for screenshots, recordings, match results or UID proof. Results are checked before rewards.",
  },
  {
    icon: FiClock,
    title: "Dispute window",
    description:
      "Match issues are raised through the designated support channel within the time window set for that tournament.",
  },
  {
    icon: FiUserCheck,
    title: "Administrative review",
    description:
      "Admins review available evidence and can adjust scores, reverse results, disqualify entries or apply penalties.",
  },
  {
    icon: FiSmartphone,
    title: "Device & eligibility rules",
    description:
      "Some events may carry device, game-version, region, identity or age requirements. These are listed per tournament.",
  },
  {
    icon: FiLock,
    title: "Account integrity",
    description:
      "Account sharing, impersonation, collusion and match manipulation can lead to suspension or reward cancellation.",
  },
] as const;

const FairPlay = () => {
  return (
    <section
      id="fair-play"
      aria-labelledby="fair-play-title"
      className="section-space relative overflow-hidden"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full border border-white/8" />
              <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/8" />
              <div className="glow-violet absolute inset-16 opacity-50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="surface-elevated card-sheen flex size-40 flex-col items-center justify-center rounded-[2rem] text-center sm:size-48">
                  <RiShieldCheckLine
                    aria-hidden="true"
                    className="size-12 text-cyan-300"
                  />
                  <p className="mt-3 font-heading text-sm font-semibold text-foreground">
                    Fair play
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    By the rules
                  </p>
                </div>
              </div>

              <span className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#0b0b12]/90 px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-white/55 uppercase backdrop-blur-sm">
                Verified results
              </span>

              <span className="absolute bottom-4 left-0 rounded-full border border-white/10 bg-[#0b0b12]/90 px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-white/55 uppercase backdrop-blur-sm">
                Evidence review
              </span>

              <span className="absolute right-0 bottom-16 rounded-full border border-white/10 bg-[#0b0b12]/90 px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-white/55 uppercase backdrop-blur-sm">
                Rule enforcement
              </span>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Fair play & security"
              title={
                <span id="fair-play-title">
                  Skill Decides.
                  <br />
                  <span className="text-gradient">Not Shortcuts.</span>
                </span>
              }
              description="Competitive gaming only works when the rules mean something. Here's exactly how Real Battle approaches match integrity — no exaggerated security claims."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {checks.map((check, index) => {
                const Icon = check.icon;

                return (
                  <Reveal key={check.title} delay={Math.min(index * 70, 280)}>
                    <div className="group flex h-full gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-cyan-300"
                        />
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
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120}>
              <p className="mt-8 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[11px] leading-5 text-white/60">
                Real Battle does not claim hardware-level anti-cheat, HWID
                locking or 100% cheat prevention. Enforcement is based on the
                published rules and the evidence available for each match.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairPlay;
