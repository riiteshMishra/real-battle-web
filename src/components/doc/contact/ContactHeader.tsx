import { Scale } from "lucide-react";

interface ContactHeaderProps {
  title: string;
  description: string;
}

export default function ContactHeader({ title, description }: ContactHeaderProps) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
        <Scale aria-hidden="true" className="size-6 text-brand" />
      </div>

      <div>
        <h2
          id="contact-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
