import type { ReactNode } from "react";

interface PolicyNoticeProps {
  title?: string;
  children: ReactNode;
  variant?: "warning" | "info";
}

export default function PolicyNotice({
  title = "Important Notice",
  children,
  variant = "warning",
}: PolicyNoticeProps) {
  const accentClass =
    variant === "info" ? "border-l-success" : "border-l-brand";

  return (
    <section
      aria-label={title}
      className={`mb-10 rounded-xl border border-border-subtle border-l-4 ${accentClass} bg-card p-5 md:p-6`}
    >
      <h2 className="mb-2 text-base font-semibold tracking-tight text-foreground md:text-lg">
        {title}
      </h2>
      <div className="space-y-2 text-sm leading-7 text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}