import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { refundOverviewItems } from "./overview-items";

const RefundOverview = () => {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description="Key areas covered by this Refund Policy, including refund eligibility, tournament cancellations, and payment issues."
      items={refundOverviewItems}
    />
  );
};

export default RefundOverview;
