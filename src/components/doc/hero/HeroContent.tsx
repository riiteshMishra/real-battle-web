import type { ReactNode } from "react";

export interface HeroContentProps {
  title: string;
  description: ReactNode;
}

export default function HeroContent({ title, description }: HeroContentProps) {
  return (
    <>
      <h1
        id="hero-title"
        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
        {description}
      </p>
    </>
  );
}
