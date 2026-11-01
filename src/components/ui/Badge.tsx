import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "brand" | "success";

const toneClasses: Record<Tone, string> = {
  neutral: "border-border bg-card text-muted-foreground",
  brand: "border-brand/30 bg-brand-soft text-brand",
  success: "border-success/30 bg-success-soft text-success",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}

/** Small status pill used for tournament state and verification notes. */
export default function Badge({
  children,
  tone = "neutral",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold",
        toneClasses[tone],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "size-1.5 rounded-full",
            tone === "success" && "bg-success",
            tone === "brand" && "bg-brand",
            tone === "neutral" && "bg-dim",
          )}
        />
      )}
      {children}
    </span>
  );
}
