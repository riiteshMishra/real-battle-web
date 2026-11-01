import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/Accordion";
import { Ban, ShieldCheck, Trophy, WalletCards } from "lucide-react";
import type { FAQIcon } from "@/src/components/doc/faq/FaqSection";

interface FaqItemProps {
  value: string;
  question: string;
  answer: string;
  icon?: FAQIcon;
}

const icons = {
  shield: ShieldCheck,
  trophy: Trophy,
  wallet: WalletCards,
  prize: Trophy,
  ban: Ban,
};

export default function FaqItem({
  value,
  question,
  answer,
  icon,
}: FaqItemProps) {
  const Icon = icon ? icons[icon] : null;

  return (
    <AccordionItem
      value={value}
      className="rounded-lg border border-border-subtle bg-card px-4"
    >
      <AccordionTrigger className="cursor-pointer text-left text-sm font-semibold text-foreground hover:text-brand hover:no-underline md:text-base">
        <span className="flex items-center gap-2">
          {Icon && (
            <Icon aria-hidden="true" className="size-4 shrink-0 text-brand" />
          )}
          {question}
        </span>
      </AccordionTrigger>

      <AccordionContent className="my-2 h-fit w-fit rounded-lg bg-surface px-4 py-5 text-sm leading-7 text-muted-foreground md:text-base">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
