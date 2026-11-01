import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiAward,
  FiCheck,
  FiCreditCard,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";
import Reveal from "./reveal";

const rewardTypes = [
  {
    icon: FiTarget,
    title: "Per-kill rewards",
    description:
      "Kills ka value har tournament ke rules mein clearly mention hota hai — before you register.",
  },
  {
    icon: GiTrophyCup,
    title: "Booyah bonus",
    description:
      "Winner squad ke liye separate bonus, jahan tournament format allow karta hai.",
  },
  {
    icon: FiTrendingUp,
    title: "Placement rewards",
    description:
      "Top placements ke liye prize split, tournament ke scoring system ke hisaab se.",
  },
  {
    icon: FiAward,
    title: "Tournament prize pool",
    description:
      "Total pool aur distribution match page par registration se pehle visible hota hai.",
  },
  {
    icon: FiCreditCard,
    title: "Eligible withdrawals",
    description:
      "Verified players apne eligible balance ke liye available withdrawal options app mein dekh sakte hain.",
  },
] as const;

const Rewards = () => {
  return (
    <section
      id="rewards"
      aria-labelledby="rewards-title"
      className="section-space relative overflow-hidden border-y border-white/8 bg-[#0b0a10]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,200,87,0.14),transparent_70%)]" />
        <div className="glow-violet absolute bottom-0 left-0 size-[24rem] opacity-30" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="inline-block size-1.5 rounded-full bg-gold" />
              Rewards &amp; earnings
            </p>

            <h2
              id="rewards-title"
              className="text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.04em]"
            >
              Har Kill Matters.
              <br />
              <span className="text-gradient-gold">Every Move Counts.</span>
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
              Real Battle tournaments reward performance — kills, placements
              aur booyah finishes. Amounts tournament-specific hote hain, aur
              sab kuch registration se pehle visible hota hai.
            </p>

            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                <FiAlertCircle aria-hidden="true" className="size-4" />
                Straight talk
              </p>
              <p className="mt-3 text-[13px] leading-6 text-white/65">
                Rewards depend on tournament rules, performance, eligibility and
                verification. Real Battle does not promise guaranteed winnings,
                fixed returns, or instant payouts outside the published rules.
              </p>
            </div>

            <Link
              href="/tournaments"
              className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors hover:text-gold"
            >
              Check current prize pools
              <FiArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-elevated card-sheen relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                    Reward types
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                    What a tournament can include
                  </p>
                </div>

                <span className="flex size-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10">
                  <GiTrophyCup aria-hidden="true" className="size-5 text-gold" />
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {rewardTypes.map((reward) => {
                  const Icon = reward.icon;

                  return (
                    <li key={reward.title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                        <Icon
                          aria-hidden="true"
                          className="size-3.5 text-gold"
                        />
                      </span>

                      <div>
                        <h3 className="text-[13px] font-semibold text-foreground">
                          {reward.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                          {reward.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7 rounded-xl border border-white/8 bg-black/25 p-4">
                <p className="flex items-start gap-2 text-[11px] leading-5 text-white/55">
                  <FiCheck
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 text-success"
                  />
                  Only verified participants with complete match proof are
                  eligible for rewards.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
