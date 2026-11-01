import { introductionSection } from "./sections/introduction";
import { informationalPurposeSection } from "./sections/informational-purpose";
import { noProfessionalAdviceSection } from "./sections/no-professional-advice";
import { gamingContentSection } from "./sections/gaming-content";
import { tournamentInformationSection } from "./sections/tournament-information";
import { accuracySection } from "./sections/accuracy";
import { thirdPartySection } from "./sections/third-party";
import { externalLinksSection } from "./sections/external-links";
import { availabilitySection } from "./sections/availability";
import { liabilitySection } from "./sections/liability";
import { changesSection } from "./sections/changes";
import { DocumentSection } from "@/src/components/doc/section/types";

export const disclaimerData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: DocumentSection[];
} = {
  title: "Disclaimer",

  description:
    "Important information about the Real Battle gaming platform, tournaments, content, third-party services, and limitations of responsibility.",

  lastUpdated: "August 22, 2026",

  sections: [
    introductionSection,
    informationalPurposeSection,
    noProfessionalAdviceSection,
    gamingContentSection,
    tournamentInformationSection,
    accuracySection,
    thirdPartySection,
    externalLinksSection,
    availabilitySection,
    liabilitySection,
    changesSection,
  ],
};
