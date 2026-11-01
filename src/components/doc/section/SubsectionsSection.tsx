import { Check, ChevronRight } from "lucide-react";
import type { DocumentSection } from "@/src/components/doc/section/types";

type SubsectionsSectionProps = {
  section: Extract<DocumentSection, { type: "subsections" }>;
};

export default function SubsectionsSection({
  section,
}: SubsectionsSectionProps) {
  return (
    <div className="space-y-8">
      {section.subsections.map((subsection, index) => (
        <div key={index}>
          <h4 className="mb-4 flex items-center gap-3 text-base font-semibold tracking-tight text-foreground md:text-lg">
            <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-brand" />
            {subsection.title}
          </h4>

          <ul className="space-y-4 pl-1">
            {subsection.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
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
        </div>
      ))}
    </div>
  );
}
