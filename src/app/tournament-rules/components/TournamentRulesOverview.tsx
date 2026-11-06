import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { tournamentRulesOverviewItems } from "./overview-items";

export default function TournamentRulesOverview() {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description="Key areas covered by these Tournament Rules."
      items={tournamentRulesOverviewItems}
    />
  );
}