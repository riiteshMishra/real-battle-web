import {
  FiDownload,
  FiInfo,
  FiMail,
  FiShield,
} from "react-icons/fi";
import { FaAndroid } from "react-icons/fa6";
import { hasAndroidDownload, siteConfig } from "@/src/config/site";

const ApkPanel = () => {
  return (
    <div className="surface-card card-sheen relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_70%)]" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          <FaAndroid aria-hidden="true" className="size-4 text-success" />
          Official Android build
        </span>

        <span
          className={
            hasAndroidDownload
              ? "inline-flex items-center gap-1.5 rounded-full border border-success/25 bg-success/10 px-2.5 py-1 text-[10px] font-semibold text-success"
              : "inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold"
          }
        >
          <span
            className={`size-1.5 rounded-full ${hasAndroidDownload ? "bg-success" : "bg-gold"}`}
          />
          {hasAndroidDownload ? "Verified link" : "Link being verified"}
        </span>
      </div>

      <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {hasAndroidDownload ? "Download the APK" : "The official APK drops here first."}
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
            className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-violet-500 to-violet-600 px-7 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(139,92,246,0.3)] transition-all hover:-translate-y-0.5"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            Download APK
          </a>
        ) : (
          <a
            href={`mailto:${siteConfig.email}?subject=Notify%20me%20when%20the%20Real%20Battle%20Android%20APK%20is%20live`}
            className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-violet-500 to-violet-600 px-7 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(139,92,246,0.3)] transition-all hover:-translate-y-0.5"
          >
            <FiMail aria-hidden="true" className="size-4" />
            Get launch update
          </a>
        )}

        <p className="flex items-center gap-2 text-[11px] text-white/60">
          <FiShield aria-hidden="true" className="size-3.5 text-cyan-300/80" />
          Only realbattle.in is an official download source.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-6 sm:grid-cols-4">
        <div>
          <dt className="text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Platform
          </dt>
          <dd className="mt-1 text-[13px] font-semibold text-foreground">
            Android
          </dd>
        </div>
        <div>
          <dt className="text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Version
          </dt>
          <dd className="mt-1 text-[13px] font-semibold text-foreground">
            {siteConfig.download.version
              ? `v${siteConfig.download.version}`
              : "Awaiting verification"}
          </dd>
        </div>
        <div>
          <dt className="text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            File size
          </dt>
          <dd className="mt-1 text-[13px] font-semibold text-foreground">
            {siteConfig.download.size || "Awaiting verification"}
          </dd>
        </div>
        <div>
          <dt className="text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Requires
          </dt>
          <dd className="mt-1 text-[13px] font-semibold text-foreground">
            {siteConfig.download.minAndroid || "Android device"}
          </dd>
        </div>
      </dl>

      <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[11px] leading-5 text-white/60">
        <FiInfo aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gold" />
        Checksums and VirusTotal results are published only when they are
        genuinely available. This page will never show an invented hash.
      </p>
    </div>
  );
};

export default ApkPanel;
