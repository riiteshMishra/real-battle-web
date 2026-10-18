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
}: LeftSectionProps) => {
  return (
    <section
      className={`relative flex w-full flex-col items-center gap-8 text-center ${className}`}
    >
      {/* Intro label */}
      <div className="border-border/70 bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide sm:text-sm">
        <span className="bg-primary relative flex size-2 rounded-full">
          <span className="bg-primary absolute inset-0 animate-ping rounded-full opacity-50" />
        </span>
        BUILT FOR REAL COMPETITORS
      </div>

      {/* Heading and description */}
      <div className="w-full space-y-5">
        <h1 className="text-foreground mx-auto max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}{" "}
          {highlightText && (
            <span className="gradient-text text-primary relative inline-block">
              {highlightText}
            </span>
          )}
        </h1>

        {description && (
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 lg:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* CTA buttons */}
      <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <Button
          asChild
          size="lg"
          className="group shadow-primary/20 hover:shadow-primary/25 h-12 w-full rounded-full px-7 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
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
            className="border-border/80 bg-background/70 hover:bg-muted h-12 w-full rounded-full px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        )}
      </div>

      {/* Trust badges */}
      {badges.length > 0 && (
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
          {badges.map((badge, index) => (
            <span
              key={badge}
              className="border-border/70 bg-background/60 text-muted-foreground hover:border-primary/30 hover:bg-muted inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm"
            >
              {index === 0 ? (
                <Zap className="text-primary size-3.5 shrink-0" />
              ) : index === 1 ? (
                <ShieldCheck className="text-primary size-3.5 shrink-0" />
              ) : (
                <Check className="text-primary size-3.5 shrink-0" />
              )}
              {badge}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default LeftSection;
