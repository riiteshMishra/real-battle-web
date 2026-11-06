import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { playerResponsibilitiesOverviewItems } from "./overview-items";

export default function PlayerResponsibilitiesOverview() {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description="The most important responsibilities every Real Battle player should follow."
      items={playerResponsibilitiesOverviewItems}
    />
  );
}