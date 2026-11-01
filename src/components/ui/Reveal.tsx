"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/src/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Wraps content in a scroll-triggered fade-up. Motion is CSS-only. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
