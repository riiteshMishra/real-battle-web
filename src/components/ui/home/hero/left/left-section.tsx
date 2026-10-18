import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/src/components/common/button";

export interface StepItem {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export interface LeftSectionProps {
  title: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  steps?: StepItem[];
  badges?: string[];
  className?: string;
  variant?: "default" | "hero";
}

const LeftSection = ({
  title,
  highlightText,
  description,
  primaryButtonText = "Download App",
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  badges = [],
  className = "",
  variant = "default",
}: LeftSectionProps) => {
  const isHero = variant === "hero";

  const introClass = isHero
    ? "border-white/20 bg-black/40 text-white/90 backdrop-blur-md"
    : "border-border/70 bg-muted/50 text-muted-foreground";

  const headingClass = isHero
    ? "text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]"
    : "text-foreground";

  const descriptionClass = isHero
    ? "text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]"
    : "text-muted-foreground";

  const secondaryButtonClass = isHero
    ? "border-white/35 bg-black/30 text-white backdrop-blur-md hover:border-white/60 hover:bg-black/50 hover:text-white"
    : "border-border/80 bg-background/70 hover:bg-muted";

  const badgeClass = isHero
    ? "border-white/20 bg-black/35 text-white/90 backdrop-blur-md hover:border-cyan-300/50 hover:bg-black/45"
    : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/30 hover:bg-muted";

  return (
    <section
      className={`relative flex w-full flex-col items-center gap-8 text-center ${className} rounded-4xl border border-amber-50 py-10 backdrop-blur-sm sm:rounded-full sm:py-4`}
    >
      {/* Intro label */}
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide sm:text-sm ${introClass}`}
      >
        <span
          className={`relative flex size-2 rounded-full ${
            isHero ? "bg-cyan-300" : "bg-primary"
          }`}
        >
          <span
            className={`absolute inset-0 animate-ping rounded-full opacity-50 ${
              isHero ? "bg-cyan-300" : "bg-primary"
            }`}
          />
        </span>
        BUILT FOR REAL COMPETITORS
      </div>

      {/* Heading and description */}
      <div className="w-full space-y-5">
        <h1
          className={`mx-auto max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl ${headingClass}`}
        >
          {title}{" "}
          {highlightText && (
            <span
              className={`relative inline-block ${
                isHero
                  ? "bg-linear-to-r from-violet-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent"
                  : "gradient-text text-primary"
              }`}
            >
              {highlightText}
            </span>
          )}
        </h1>

        {description && (
          <p
            className={`mx-auto max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 lg:text-lg ${descriptionClass}`}
          >
            {description}
          </p>
        )}
      </div>

      {/* CTA buttons */}
      <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <Button
          asChild
          size="lg"
          className={`group h-12 w-fit rounded-full px-7 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto ${
            isHero
              ? "border border-white/20 bg-violet-500 text-white shadow-violet-500/25 hover:bg-violet-400 hover:shadow-violet-500/35"
              : "shadow-primary/20 hover:shadow-primary/25"
          }`}
        >
          <Link href={primaryButtonLink}>
            {primaryButtonText}
            <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>

        {secondaryButtonText && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`h-12 w-fit rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${secondaryButtonClass}`}
          >
            <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        )}
      </div>

      {/* Trust badges */}
      {badges.length > 0 && (
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
          {badges.map((badge, index) => {
            const Icon = index === 0 ? Zap : index === 1 ? ShieldCheck : Check;

            return (
              <span
                key={badge}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm ${badgeClass}`}
              >
                <Icon
                  className={`size-3.5 shrink-0 ${
                    isHero ? "text-cyan-300" : "text-primary"
                  }`}
                />
                {badge}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default LeftSection;
