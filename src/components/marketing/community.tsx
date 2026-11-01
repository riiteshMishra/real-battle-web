import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiInstagram,
  FiLock,
  FiMessageCircle,
  FiVideo,
  FiYoutube,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";
import { siteConfig, verifiedSocialLinks } from "@/src/config/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const channels = [
  { name: "Instagram", icon: FiInstagram, key: "instagram" as const },
  { name: "YouTube", icon: FiYoutube, key: "youtube" as const },
  { name: "Discord", icon: FaDiscord, key: "discord" as const },
] as const;

const Community = () => {
  return (
    <section
      aria-labelledby="community-title"
      className="section-space relative overflow-hidden"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Community"
          title={
            <span id="community-title">
              Real Players.
              <br />
              <span className="text-gradient">Real Stories. No Actors.</span>
            </span>
          }
          description="Community wall yahan ban rahi hai — verified clips, winner interviews aur squad spotlights. Jab tak koi story verify nahi hoti, hum use publish nahi karte."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-7 sm:p-9">
              <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_70%)]" />

              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <FiVideo aria-hidden="true" className="size-5 text-violet-300" />
                </span>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                  Player stories are being verified.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  This space is reserved for genuine player clips, tournament
                  highlights and winner stories. No paid testimonials. No fake
                  payout screenshots. No invented player counts.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact-us"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white/8 px-5 text-[13px] font-semibold text-foreground transition-colors hover:bg-white/12"
                >
                  Submit your clip
                  <FiArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

                <p className="text-[11px] text-white/60">
                  Verification required before publishing.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card flex h-full flex-col rounded-3xl p-6 sm:p-7">
              <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                Official channels
              </p>

              <ul className="mt-5 space-y-2">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const url = siteConfig.social[channel.key];
                  const isLive = url.length > 0;

                  return (
                    <li key={channel.name}>
                      {isLive ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                        >
                          <span className="flex items-center gap-3 text-[13px] font-medium text-foreground">
                            <Icon aria-hidden="true" className="size-4 text-violet-300" />
                            {channel.name}
                          </span>
                          <FiArrowRight aria-hidden="true" className="size-3.5 text-white/30" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
                          <span className="flex items-center gap-3 text-[13px] text-white/55">
                            <Icon aria-hidden="true" className="size-4 text-white/30" />
                            {channel.name}
                          </span>
                          <span className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-white/55 uppercase">
                            <FiLock aria-hidden="true" className="size-3" />
                            Verifying
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {verifiedSocialLinks.length === 0 && (
                <p className="mt-4 text-[11px] leading-5 text-white/60">
                  Official handles are added only after ownership is confirmed,
                  so players never land on an impersonator account.
                </p>
              )}

              <div className="mt-auto pt-6">
                <div className="hairline mb-5" />

                <ul className="space-y-3 text-[12px] text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-0.5 size-3.5 shrink-0 text-success"
                    />
                    Tournament highlights and Booyah moments
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-0.5 size-3.5 shrink-0 text-success"
                    />
                    Winner interviews with player consent
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-0.5 size-3.5 shrink-0 text-success"
                    />
                    Schedule announcements and rule updates
                  </li>
                </ul>

                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-accent"
                >
                  <FiMessageCircle aria-hidden="true" className="size-3.5" />
                  {siteConfig.email}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Community;
