import { Scale } from "lucide-react";

interface ActionsHeaderProps {
  title: string;
  description: string;
}

export default function ActionsHeader({ title, description }: ActionsHeaderProps) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
        <Scale aria-hidden="true" className="size-5 text-brand" />
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        <p className="mt-1 text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
