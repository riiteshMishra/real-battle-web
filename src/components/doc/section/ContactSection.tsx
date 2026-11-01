import { Mail } from "lucide-react";
import type { DocumentSection } from "@/src/components/doc/section/types";

type ContactSectionProps = {
  section: Extract<DocumentSection, { type: "contact" }>;
};

export default function ContactSection({ section }: ContactSectionProps) {
  return (
    <div className="space-y-4">
      {section.content.map((line, index) => {
        const emailMatch = line.match(/^(.+?):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/);

        if (emailMatch) {
          const [, label, email] = emailMatch;

          return (
            <a
              key={index}
              href={`mailto:${email}`}
              className="group flex items-center gap-3 rounded-lg border border-border-subtle bg-surface p-4 transition-colors hover:border-brand/40"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                <Mail aria-hidden="true" className="size-5 text-brand" />
              </span>

              <span className="min-w-0">
                <span className="block text-xs font-medium text-dim">
                  {label}
                </span>

                <span className="mt-0.5 block text-sm font-semibold break-all text-brand underline-offset-4 group-hover:underline md:text-base">
                  {email}
                </span>
              </span>
            </a>
          );
        }

        return (
          <p
            key={index}
            className="text-sm leading-7 text-muted-foreground md:text-base"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}
