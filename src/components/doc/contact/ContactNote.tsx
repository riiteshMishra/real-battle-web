import { Mail } from "lucide-react";

export default function ContactNote() {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-lg border border-border-subtle bg-surface p-4">
      <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-dim" />

      <p className="text-xs leading-6 text-muted-foreground md:text-sm">
        When contacting us about a tournament, account, or dispute, please
        provide enough relevant information for our team to understand and
        process your request.
      </p>
    </div>
  );
}
