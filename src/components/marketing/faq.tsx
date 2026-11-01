"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { faqData } from "@/src/data/faq-data";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

interface FaqProps {
  limit?: number;
  showViewAll?: boolean;
  showHeading?: boolean;
  className?: string;
}

const Faq = ({
  limit,
  showViewAll = false,
  showHeading = true,
  className,
}: FaqProps) => {
  const baseId = useId();
  const [openId, setOpenId] = useState<number | null>(faqData[0]?.id ?? null);

  const items = typeof limit === "number" ? faqData.slice(0, limit) : faqData;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={cn("section-space relative overflow-hidden", className)}
    >
      <div className="container-page">
        {showHeading ? (
          <SectionHeading
            eyebrow="FAQ"
            align="center"
            title={
              <span id="faq-title">
                Questions? <span className="text-gradient">Answers.</span>
              </span>
            }
            description="Registration, room details, results, rewards aur withdrawals — sab kuch simple language mein."
          />
        ) : (
          <h2 id="faq-title" className="sr-only">
            Frequently asked questions
          </h2>
        )}

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="space-y-3">
            {items.map((faq, index) => {
              const isOpen = openId === faq.id;
              const buttonId = `${baseId}-trigger-${faq.id}`;
              const panelId = `${baseId}-panel-${faq.id}`;

              return (
                <Reveal key={faq.id} delay={Math.min(index * 40, 240)}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-colors duration-300",
                      isOpen
                        ? "border-violet-400/30 bg-violet-500/[0.06]"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      >
                        <span className="text-[14px] font-semibold text-foreground sm:text-[15px]">
                          {faq.question}
                        </span>

                        <span
                          className={cn(
                            "flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-45 border-violet-400/40 bg-violet-500/20 text-violet-200"
                              : "border-white/12 bg-white/5 text-white/55",
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
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[13px] leading-7 text-muted-foreground sm:px-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {showViewAll && (
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-[13px] font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                Read all FAQs
                <FiArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
