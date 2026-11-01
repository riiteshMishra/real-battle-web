import { CircleHelp } from "lucide-react";

interface FaqHeaderProps {
  title: string;
  description?: string;
}

export default function FaqHeader({ title, description }: FaqHeaderProps) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
        <CircleHelp aria-hidden="true" className="size-5 text-brand" />
      </div>

      <div>
        <h2
          id="faq-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
