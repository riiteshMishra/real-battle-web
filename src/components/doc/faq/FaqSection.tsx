import { Accordion } from "@/src/components/ui/Accordion";
import FaqHeader from "@/src/components/doc/faq/FaqHeader";
import FaqItem from "@/src/components/doc/faq/FaqItem";

export type FAQIcon = "shield" | "trophy" | "wallet" | "prize" | "ban";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon?: FAQIcon;
}

interface FaqSectionProps {
  title: string;
  description?: string;
  items: readonly FAQItem[];
}

export default function FaqSection({
  title,
  description,
  items,
}: FaqSectionProps) {
  return (
    <section
      aria-labelledby="faq-title"
      className="mb-12 rounded-xl border border-border-subtle bg-surface p-6 md:p-8"
    >
      <FaqHeader title={title} description={description} />

      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item) => (
          <FaqItem
            key={item.id}
            value={item.id}
            question={item.question}
            answer={item.answer}
            icon={item.icon}
          />
        ))}
      </Accordion>
    </section>
  );
}
