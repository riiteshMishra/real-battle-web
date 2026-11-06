import { assets } from "@/src/assets/assets";

export default function HeroBackground() {
  return (
    <picture className="absolute inset-0 -z-20">
      <source
        media="(max-width: 767px)"
        srcSet={assets.HeroSectionMobi.src}
        type="image/jpeg"
      />
      <img
        src={assets.HeroSectionDecs.src}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-center opacity-55"
      />
    </picture>
  );
}