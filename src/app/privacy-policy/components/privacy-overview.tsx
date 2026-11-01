import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { privacyOverviewItems } from "./privacyOverviewItems";

const PrivacyOverview = () => {
  return (
    <OverviewTemplate
      title="Privacy Policy Overview"
      description="A quick overview of how Real Battle handles player information, Free Fire gaming data, tournament information, data sharing, security, and privacy rights."
      items={privacyOverviewItems}
    />
  );
};

export default PrivacyOverview;
