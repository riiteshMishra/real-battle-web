import { FiAlertCircle, FiInbox, FiLoader } from "react-icons/fi";
import { cn } from "@/lib/utils";

const wrapper = "rounded-2xl border p-8 text-center";

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(wrapper, "border-border-subtle bg-card")}
    >
      <FiLoader
        aria-hidden="true"
        className="mx-auto mb-3 size-5 animate-spin text-brand"
      />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn(wrapper, "border-border-subtle bg-card")}>
      <FiInbox aria-hidden="true" className="mx-auto mb-3 size-6 text-dim" />
      <p className="font-heading text-xl font-semibold text-foreground">
        {title}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}

export function ErrorState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div role="alert" className={cn(wrapper, "border-brand/30 bg-brand-soft")}>
      <FiAlertCircle aria-hidden="true" className="mx-auto mb-3 size-6 text-brand" />
      <p className="font-heading text-xl font-semibold text-foreground">
        {title}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}
