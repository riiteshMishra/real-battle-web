import Link from "next/link";

interface PolicyRelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface PolicyRelatedLinksProps {
  title?: string;
  description?: string;
  links: readonly PolicyRelatedLink[];
}

export default function PolicyRelatedLinks({
  title = "Related Policies",
  description,
  links,
}: PolicyRelatedLinksProps) {
  return (
    <section
      id="related-policies"
      aria-labelledby="related-policies-title"
      className="mb-12"
    >
      <div className="mb-6">
        <h2
          id="related-policies-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-xl border border-border-subtle bg-card p-5 transition-colors duration-200 hover:border-brand/40"
          >
            <p className="font-semibold text-foreground group-hover:text-brand">
              {link.label}
            </p>
            {link.description && (
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {link.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}