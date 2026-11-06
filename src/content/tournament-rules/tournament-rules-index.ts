import { eligibilitySection } from "./sections/eligibility";
import { registrationSection } from "./sections/registration";
import { entryFeesSection } from "./sections/entry-fees";
import { scheduleSection } from "./sections/schedule";
import { roomRulesSection } from "./sections/room-rules";
import { teamRulesSection } from "./sections/team-rules";
import { matchConductSection } from "./sections/match-conduct";
import { scoringSection } from "./sections/scoring";
import { resultVerificationSection } from "./sections/result-verification";
import { disqualificationSection } from "./sections/disqualification";
import { technicalIssuesSection } from "./sections/technical-issues";
import { disputesSection } from "./sections/disputes";
import { rewardsSection } from "./sections/rewards";
import { tournamentSpecificSection } from "./sections/tournament-specific";
import { TournamentRuleSection } from "./types";

export const tournamentRulesData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: TournamentRuleSection[];
} = {
  title: "Tournament Rules",
  description:
    "Samjho ki Real Battle tournaments kaise kaam karte hain, including eligibility, registration, match conduct, scoring, verification aur dispute handling.",
  lastUpdated: "November 6, 2026",
  sections: [
    eligibilitySection,
    registrationSection,
    entryFeesSection,
    scheduleSection,
    roomRulesSection,
    teamRulesSection,
    matchConductSection,
    scoringSection,
    resultVerificationSection,
    disqualificationSection,
    technicalIssuesSection,
    disputesSection,
    rewardsSection,
    tournamentSpecificSection,
  ],
};