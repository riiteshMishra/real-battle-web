import { FiArrowRight } from "react-icons/fi";
import ButtonLink from "@/src/components/ui/ButtonLink";
import DownloadButton from "@/src/components/ui/DownloadButton";
import Reveal from "@/src/components/ui/Reveal";

export default function HeroActions() {
  return (
    <Reveal delay={120}>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
        <DownloadButton label="Download Android App" />

        <ButtonLink
          href="/tournaments"
          variant="secondary"
          icon={
            <FiArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          }
        >
          Explore Tournaments
        </ButtonLink>
      </div>
    </Reveal>
  );
}