import { Mail } from "lucide-react";

interface ContactLinkProps {
  email?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactLink({ email, title, subtitle }: ContactLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="flex min-h-16 items-center gap-3 rounded-md border border-success/30 bg-success-soft px-4 py-4 transition-colors hover:border-success"
    >
      <Mail aria-hidden="true" className="size-5 shrink-0 text-success" />

      <span>
        <span className="block font-semibold text-foreground">{title}</span>
        <span className="mt-1 block text-xs text-dim">{subtitle}</span>
      </span>
    </a>
  );
}
