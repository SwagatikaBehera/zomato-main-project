import React from "react";

// Component
import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
  return (
    <div>
      <div className="overflow-x-auto md:hidden">
        <NightLifeCarousel />
      </div>
      <div className="hidden md:block">
        <NightLifeCarousel />
      </div>

      <h1 className="text-xl md:text-3xl md:font-semibold md:my-8">
        Nightlife Restaurants in Patia, Bhubaneswar, India
      </h1>
    </div>
  );
};

export default NightLife;
