import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: StaticImageData;
}

const Card = ({ title, description, icon: Icon, image }: CardProps) => {
  return (
    <article className="group border-border/70 bg-card/50 hover:border-primary/25 hover:shadow-primary/5 relative h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:rounded-3xl sm:p-6">
      {/* Subtle hover glow */}
      <div className="bg-primary/5 pointer-events-none absolute -top-12 -right-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        {/* Icon */}
        <div className="border-border/60 bg-muted/70 text-foreground group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary flex size-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 motion-reduce:transform-none sm:size-14">
          <Icon
            className="size-5 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none sm:size-6"
            strokeWidth={1.8}
          />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-foreground text-lg font-semibold tracking-tight sm:text-xl">
            {title}
          </h3>

          <p className="text-muted-foreground mt-2 text-sm leading-6 sm:text-[15px] sm:leading-7">
            {description}
          </p>
        </div>

        {/* Optional preview */}
        {image && (
          <div className="border-border/60 bg-muted/50 relative mt-6 aspect-video overflow-hidden rounded-xl border sm:rounded-2xl">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
            />
          </div>
        )}

        {/* Bottom accent */}
        <div className="mt-auto pt-5">
          <div className="bg-border/70 group-hover:bg-primary/25 h-px w-full transition-colors duration-300" />
        </div>
      </div>
    </article>
  );
};

export default Card;
