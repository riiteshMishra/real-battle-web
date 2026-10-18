import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Card = ({ id, title, description, image }: CardProps) => {
  const isOffset = id === 2 || id === 4;

  return (
    <article
      className={`group border-border/70 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:rounded-3xl sm:p-5 ${
        isOffset ? "lg:translate-y-8" : ""
      }`}
    >
      {/* Soft background glow */}
      <div className="bg-primary/5 pointer-events-none absolute -top-12 -right-12 size-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">
        <span className="text-muted-foreground text-[11px] font-semibold tracking-[0.18em] uppercase">
          How it works
        </span>

        <span className="text-muted-foreground/60 group-hover:text-primary font-mono text-xl font-bold tracking-tight transition-colors duration-300">
          {String(id).padStart(2, "0")}
        </span>
      </div>

      {/* Image */}
      <div className="border-border/60 bg-muted relative mt-5 aspect-16/10 w-full overflow-hidden rounded-xl border sm:rounded-2xl">
        <Image
          src={image}
          alt={title}
          title={title}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
          priority={id === 1}
        />

        <div className="from-background/20 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
      </div>

      {/* Content */}
      <div className="relative mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-foreground group-hover:text-primary text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl">
            {title}
          </h3>

          <ArrowUpRight className="text-muted-foreground/60 group-hover:text-primary mt-0.5 size-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-6">
          {description}
        </p>
      </div>

      {/* Accent */}
      <div className="bg-border relative mt-5 h-px w-full overflow-hidden">
        <div className="bg-primary absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover:w-full" />
      </div>
    </article>
  );
};

export default Card;
