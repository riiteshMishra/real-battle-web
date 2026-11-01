"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { faqData } from "@/src/data/faq-data";
import { cn } from "@/lib/utils";
import Container from "@/src/components/ui/Container";
import Reveal from "@/src/components/ui/Reveal";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqItem from "@/src/sections/faq/FaqItem";

interface FaqSectionProps {
  limit?: number;
  showViewAll?: boolean;
  showHeading?: boolean;
  className?: string;
}

export default function FaqSection({
  limit,
  showViewAll = false,
  showHeading = true,
  className,
}: FaqSectionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<number | null>(faqData[0]?.id ?? null);

  const items = typeof limit === "number" ? faqData.slice(0, limit) : faqData;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={cn("section-space relative overflow-hidden", className)}
    >
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow="FAQ"
            align="center"
            title={
              <span id="faq-title">
                Questions? <span className="text-emphasis">Answers.</span>
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
            {items.map((faq, index) => (
              <Reveal key={faq.id} delay={Math.min(index * 40, 240)}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  buttonId={`${baseId}-trigger-${faq.id}`}
                  panelId={`${baseId}-panel-${faq.id}`}
                />
              </Reveal>
            ))}
          </div>

          {showViewAll && (
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-[13px] font-semibold text-foreground transition-colors hover:border-dim hover:bg-elevated"
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
      </Container>
    </section>
  );
}
