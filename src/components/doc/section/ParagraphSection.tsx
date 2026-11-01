import type { DocumentSection } from "@/src/components/doc/section/types";

type ParagraphSectionProps = {
  section: Extract<DocumentSection, { type: "paragraphs" }>;
};

export default function ParagraphSection({ section }: ParagraphSectionProps) {
  return (
    <div className="space-y-4">
      {section.content.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm leading-7 text-muted-foreground md:text-base"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
