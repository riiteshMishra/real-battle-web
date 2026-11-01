import ContactSection from "@/src/components/doc/section/ContactSection";
import ListSection from "@/src/components/doc/section/ListSection";
import ParagraphSection from "@/src/components/doc/section/ParagraphSection";
import SubsectionsSection from "@/src/components/doc/section/SubsectionsSection";
import type { DocumentSection } from "@/src/components/doc/section/types";

interface SectionTemplateProps {
  sections: DocumentSection[];
  title: string;
  description?: string;
}

export default function SectionTemplate({
  sections,
  title,
  description,
}: SectionTemplateProps) {
  return (
    <section aria-labelledby="sections-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="sections-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-xl border border-border-subtle bg-card p-6 md:p-8"
          >
            <h3 className="mb-5 text-xl font-bold tracking-tight text-foreground md:text-2xl">
              {section.title}
            </h3>

            {section.type === "paragraphs" && (
              <ParagraphSection section={section} />
            )}

            {section.type === "list" && <ListSection section={section} />}

            {section.type === "subsections" && (
              <SubsectionsSection section={section} />
            )}

            {section.type === "contact" && <ContactSection section={section} />}
          </article>
        ))}
      </div>
    </section>
  );
}
