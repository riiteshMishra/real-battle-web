import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { disclaimerOverviewItems } from "./disclaimerOverviewItems";

const DisclaimerOverview = () => {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description="Key areas covered by this Disclaimer, including gaming services, third-party content, and platform limitations."
      items={disclaimerOverviewItems}
    />
  );
};

export default DisclaimerOverview;
