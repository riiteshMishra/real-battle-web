import Heading from "./Heading";
import { homeData } from "@/src/data/home";
import SubHeading from "./SubHeading";
import Steps from "./Steps";

const HeroSection = () => {
  return (
    <section id="home" className="px-4 py-15 md:py-20">
      <Heading />
      <div className="bg-primary rounded-ful mx-auto my-10 h-0.5 max-w-40" />
      <SubHeading
        title={homeData.subHeading}
        className="font-bricolage sm:text mx-auto max-w-95 text-center text-sm font-medium capitalize"
      />
      <Steps />
      {/* <HeroImg /> */}
    </section>
  );
};

export default HeroSection;
