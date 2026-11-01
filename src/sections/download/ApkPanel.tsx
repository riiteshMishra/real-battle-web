import { FiDownload, FiInfo, FiMail, FiShield } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";
import Badge from "@/src/components/ui/Badge";

const meta = [
  { label: "Platform", value: "Android" },
  {
    label: "Version",
    value: siteConfig.download.version
      ? `v${siteConfig.download.version}`
      : "Awaiting verification",
  },
  {
    label: "File size",
    value: siteConfig.download.size || "Awaiting verification",
  },
  {
    label: "Requires",
    value: siteConfig.download.minAndroid || "Android device",
  },
];

export default function ApkPanel() {
  return (
    <div className="surface-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-dim uppercase">
          <FaAndroid aria-hidden="true" className="size-4 text-success" />
          Official Android build
        </span>

        <Badge tone={hasAndroidDownload ? "success" : "brand"} dot>
          {hasAndroidDownload ? "Verified link" : "Link being verified"}
        </Badge>
      </div>

      <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {hasAndroidDownload
          ? "Download the APK"
          : "The official APK drops here first."}
      </h2>

      <p className="mt-3 max-w-xl text-[13px] leading-6 text-muted-foreground">
        {hasAndroidDownload
          ? "Install the official Real Battle build from this page. Do not install files forwarded through Telegram groups or unofficial mirrors."
          : "The production build is still being verified. We will publish the signed APK link, version, file size and checksum on this page — never through a third-party mirror."}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {hasAndroidDownload ? (
          <a
            href={siteConfig.download.androidUrl}
            download
            rel="noopener noreferrer"
            className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-brand-fill px-7 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Download APK
          </a>
        ) : (
          <a
            href={`mailto:${siteConfig.email}?subject=Notify%20me%20when%20the%20Real%20Battle%20Android%20APK%20is%20live`}
            className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-brand-fill px-7 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
          >
            <FiMail aria-hidden="true" className="size-4" />
            Get launch update
          </a>
        )}

        <p className="flex items-center gap-2 text-[11px] text-dim">
          <FiShield aria-hidden="true" className="size-3.5 text-brand" />
          Only realbattle.in is an official download source.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border-subtle pt-6 sm:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-[9px] font-bold tracking-[0.18em] text-dim uppercase">
              {item.label}
            </dt>
            <dd className="mt-1 text-[13px] font-semibold text-foreground">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 flex items-start gap-2 rounded-xl border border-border-subtle bg-card px-4 py-3 text-[11px] leading-5 text-dim">
        <FiInfo aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-brand" />
        Checksums and VirusTotal results are published only when they are
        genuinely available. This page will never show an invented hash.
      </p>
    </div>
  );
}
