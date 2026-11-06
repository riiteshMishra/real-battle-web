import { introductionSection } from "./sections/introduction";
import { accountResponsibilitySection } from "./sections/account-responsibility";
import { fairPlaySection } from "./sections/fair-play";
import { matchParticipationSection } from "./sections/match-participation";
import { teamResponsibilitiesSection } from "./sections/team-responsibilities";
import { roomPrivacySection } from "./sections/room-privacy";
import { evidenceSection } from "./sections/evidence";
import { paymentResponsibilitySection } from "./sections/payment";
import { communicationSection } from "./sections/communication";
import { technicalResponsibilitySection } from "./sections/technical";
import { violationsSection } from "./sections/violations";
import { responsibleGamingSection } from "./sections/responsible-gaming";
import { reportingSection } from "./sections/reporting";
import { PlayerResponsibilitySection } from "./types";

export const playerResponsibilitiesData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: PlayerResponsibilitySection[];
} = {
  title: "Player Responsibilities",
  description:
    "Samjho ki Real Battle ke har player se tournament aur platform services mein participate karne se pehle, during aur baad mein kya expect kiya jata hai.",
  lastUpdated: "November 6, 2026",
  sections: [
    introductionSection,
    accountResponsibilitySection,
    fairPlaySection,
    matchParticipationSection,
    teamResponsibilitiesSection,
    roomPrivacySection,
    evidenceSection,
    paymentResponsibilitySection,
    communicationSection,
    technicalResponsibilitySection,
    violationsSection,
    responsibleGamingSection,
    reportingSection,
  ],
};