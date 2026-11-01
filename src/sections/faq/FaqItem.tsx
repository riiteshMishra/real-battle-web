"use client";

import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  buttonId: string;
  panelId: string;
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  buttonId,
  panelId,
}: FaqItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        isOpen
          ? "border-brand/40 bg-brand-soft"
          : "border-border-subtle bg-card hover:border-border",
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-[14px] font-semibold text-foreground sm:text-[15px]">
            {question}
          </span>

          <span
            className={cn(
              "flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              isOpen
                ? "rotate-45 border-brand/50 bg-brand-fill text-brand-foreground"
                : "border-border bg-elevated text-dim",
            )}
          >
            <FiPlus aria-hidden="true" className="size-3.5" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[13px] leading-7 text-muted-foreground sm:px-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
