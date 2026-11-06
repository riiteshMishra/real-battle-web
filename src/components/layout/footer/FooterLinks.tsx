import Link from "next/link";

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

interface FooterLinksProps {
  groups: FooterLinkGroup[];
}

export default function FooterLinks({ groups }: FooterLinksProps) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {groups.map((group) => (
        <nav key={group.heading} aria-label={group.heading}>
          <h2 className="text-[10px] font-bold tracking-[0.22em] text-dim uppercase">
            {group.heading}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}