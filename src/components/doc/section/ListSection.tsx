import { Check } from "lucide-react";
import type { DocumentSection } from "@/src/components/doc/section/types";

type ListSectionProps = {
  section: Extract<DocumentSection, { type: "list" }>;
};

export default function ListSection({ section }: ListSectionProps) {
  return (
    <ul className="space-y-4">
      {section.items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-7 text-muted-foreground md:text-base"
        >
          <span
            aria-hidden="true"
            className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-success-soft"
          >
            <Check className="size-4 text-success" />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
