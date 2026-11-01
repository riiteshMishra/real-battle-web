import OverviewTemplate from "@/src/components/doc/overview/OverviewTemplate";
import { termsOverviewItems } from "./termsOverviewItems";

const TermOverview = () => {
  return (
    <OverviewTemplate
      title="Quick Overview"
      description="These Terms explain the rules and responsibilities that apply when you use Real Battle or participate in our gaming tournaments."
      items={termsOverviewItems}
    />
  );
};

export default TermOverview;
