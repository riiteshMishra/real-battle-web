import LeftSection from "./left/left-section";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-primary/10 absolute top-10 left-1/2 size-72 -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="bg-primary/5 absolute right-0 bottom-0 size-64 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <LeftSection
          className="items-center text-center"
          title="India's Fastest-Growing Tournament Platform"
          highlightText="Real Battle"
          description="Join daily tournaments, compete with skilled players, win exciting rewards, and experience professional esports from your mobile."
          primaryButtonText="Download App"
          primaryButtonLink="/download"
          secondaryButtonText="How It Works"
          secondaryButtonLink="#how-it-works"
          badges={["Instant Payouts", "Fair Play", "24/7 Support"]}
        />
      </div>
    </section>
  );
};

export default HomeHero;
