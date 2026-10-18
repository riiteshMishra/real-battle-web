import React from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
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
      className={`flex w-full flex-col items-center justify-center gap-y-10 ${className}`}
    >
      <div className="space-y-4">
        <h1 className="text-foreground text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
          {highlightText && (
            <>
              <span className="gradient-text text-primary relative inline-block">
                {highlightText}
              </span>
            </>
          )}
        </h1>

        {description && (
          <p className="text-muted-foreground text-center text-sm leading-7 sm:mx-0 sm:text-base lg:text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Button
          asChild
          size="lg"
          className="group shadow-primary/15 h-12 rounded-full px-7 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
            className="border-border/80 bg-background/60 hover:bg-muted h-12 rounded-full px-7 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        )}
      </div>

      {badges.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {badges.map((badge) => (
            <span
              key={badge}
              className="border-border/70 bg-muted/50 text-muted-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium backdrop-blur-sm transition-colors sm:text-sm"
            >
              <Check className="text-primary size-3.5 shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default LeftSection;
