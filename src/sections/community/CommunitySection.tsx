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
import Container from "@/src/components/ui/Container";
import Reveal from "@/src/components/ui/Reveal";
import SectionHeading from "@/src/components/ui/SectionHeading";

const channels = [
  { name: "Instagram", icon: FiInstagram, key: "instagram" as const },
  { name: "YouTube", icon: FiYoutube, key: "youtube" as const },
  { name: "Discord", icon: FaDiscord, key: "discord" as const },
];

const highlights = [
  "Tournament highlights and Booyah moments",
  "Winner interviews with player consent",
  "Schedule announcements and rule updates",
];

export default function CommunitySection() {
  return (
    <section
      aria-labelledby="community-title"
      className="section-space relative overflow-hidden"
    >
      <Container>
        <SectionHeading
          eyebrow="Community"
          title={
            <span id="community-title">
              Real Players.
              <br />
              <span className="text-emphasis">Real Stories. No Actors.</span>
            </span>
          }
          description="Community wall yahan ban rahi hai — verified clips, winner interviews aur squad spotlights. Jab tak koi story verify nahi hoti, hum use publish nahi karte."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-border bg-card p-7 sm:p-9">
              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-elevated">
                  <FiVideo aria-hidden="true" className="size-5 text-brand" />
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
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-fill px-5 text-[13px] font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                >
                  Submit your clip
                  <FiArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

                <p className="text-[11px] text-dim">
                  Verification required before publishing.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card flex h-full flex-col rounded-3xl p-6 sm:p-7">
              <p className="text-[10px] font-bold tracking-[0.22em] text-dim uppercase">
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
                          className="flex items-center justify-between rounded-xl border border-border-subtle bg-card px-4 py-3 transition-colors hover:border-dim hover:bg-elevated"
                        >
                          <span className="flex items-center gap-3 text-[13px] font-medium text-foreground">
                            <Icon aria-hidden="true" className="size-4 text-brand" />
                            {channel.name}
                          </span>
                          <FiArrowRight aria-hidden="true" className="size-3.5 text-dim" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-surface px-4 py-3">
                          <span className="flex items-center gap-3 text-[13px] text-dim">
                            <Icon aria-hidden="true" className="size-4 text-dim" />
                            {channel.name}
                          </span>
                          <span className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em] text-dim uppercase">
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
                <p className="mt-4 text-[11px] leading-5 text-dim">
                  Official handles are added only after ownership is confirmed,
                  so players never land on an impersonator account.
                </p>
              )}

              <div className="mt-auto pt-6">
                <div className="hairline mb-5" />

                <ul className="space-y-3 text-[12px] text-muted-foreground">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FiCheckCircle
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-success"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-foreground hover:text-brand"
                >
                  <FiMessageCircle aria-hidden="true" className="size-3.5" />
                  {siteConfig.email}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
