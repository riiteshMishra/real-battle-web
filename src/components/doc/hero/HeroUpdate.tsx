import { CalendarDays } from "lucide-react";

export interface HeroUpdateProps {
  title?: string;
  date: string | Date;
}

export default function HeroUpdate({
  title = "Last updated",
  date,
}: HeroUpdateProps) {
  const formattedDate = date instanceof Date ? date.toLocaleDateString() : date;

  return (
    <div className="mt-7">
      <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success-soft px-4 py-2">
        <CalendarDays aria-hidden="true" className="size-4 text-success" />

        <span className="text-xs text-muted-foreground sm:text-sm">{title}</span>

        <span className="text-xs font-semibold text-foreground sm:text-sm">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
