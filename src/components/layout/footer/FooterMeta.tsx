import { FiInstagram, FiYoutube } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";
import { siteConfig } from "@/src/config/site";

const disclaimers = [
  {
    title: "18+ only",
    body: "Real Battle is intended for adults unless a specific tournament states otherwise.",
  },
  {
    title: "Play responsibly",
    body: "Take breaks, set limits, and do not spend beyond what you can afford.",
  },
  {
    title: "Check local rules",
    body: "Some states and regions restrict paid online gaming. Participation must be lawful where you live.",
  },
  {
    title: "Rewards are not guaranteed",
    body: "Eligibility depends on tournament rules, performance and verification. Taxes and statutory deductions, including TDS where applicable, may apply.",
  },
];

const socialEntries = [
  { key: "instagram" as const, label: "Instagram", icon: FiInstagram },
  { key: "youtube" as const, label: "YouTube", icon: FiYoutube },
  { key: "discord" as const, label: "Discord", icon: FaDiscord },
].filter((item) => siteConfig.social[item.key].length > 0);

export default function FooterMeta() {
  return (
    <>
      <div className="mt-12 rounded-2xl border border-border-subtle bg-card p-5">
        <div className="grid gap-4 text-[11px] leading-5 text-dim sm:grid-cols-2 lg:grid-cols-4">
          {disclaimers.map((item) => (
            <p key={item.title}>
              <span className="font-semibold text-muted-foreground">
                {item.title}.
              </span>{" "}
              {item.body}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-dim">
          © {new Date().getFullYear()} Real Battle. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <p className="max-w-md text-[11px] text-dim">
            Free Fire is a trademark of its respective owner. Real Battle is
            not affiliated with or endorsed by the publisher.
          </p>

          {socialEntries.length > 0 && (
            <ul className="flex items-center gap-2">
              {socialEntries.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.key}>
                    <a
                      href={siteConfig.social[social.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-full border border-border text-dim transition-colors hover:border-brand hover:text-brand"
                    >
                      <Icon aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}