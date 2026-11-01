import OverviewCard from "@/src/components/doc/overview/OverviewCard";
import type { OverviewProps } from "@/src/components/doc/overview/types";

interface OverviewHeadingProps {
  title: string;
  description?: string;
}

export function OverviewHeading({ title, description }: OverviewHeadingProps) {
  return (
    <div className="mb-6">
      <h2
        id="overview-title"
        className="text-2xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default function OverviewTemplate({
  title,
  description,
  items,
}: OverviewProps) {
  return (
    <section aria-labelledby="overview-title" className="mb-12">
      <OverviewHeading title={title} description={description} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <OverviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
