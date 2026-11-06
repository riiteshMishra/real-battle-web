import Link from "next/link";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import Logo from "@/src/components/layout/Logo";
import { siteConfig } from "@/src/config/site";

export default function FooterBrand() {
  return (
    <div>
      <Logo />

      <p className="mt-5 max-w-sm text-[13px] leading-7 text-muted-foreground">
        India&apos;s competitive gaming arena for Free Fire. Solo, squad aur
        Clash Squad battles — room details in the app, results verified,
        rewards by the rules.
      </p>

      <Link
        href="/download"
        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-[12px] font-semibold text-foreground transition-colors hover:border-dim hover:bg-elevated"
      >
        <FiDownload aria-hidden="true" className="size-3.5 text-brand" />
        Get the Android app
        <FiArrowUpRight
          aria-hidden="true"
          className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-5 inline-flex items-center gap-2 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <FiMail aria-hidden="true" className="size-3.5" />
        {siteConfig.email}
      </a>
    </div>
  );
}