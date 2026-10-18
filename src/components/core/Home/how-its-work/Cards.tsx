import { howItWorksData } from "@/src/data/how-it-works-data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 px-4 py-8 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-12 lg:grid-cols-4 lg:gap-5 lg:px-8">
      {howItWorksData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Cards;
