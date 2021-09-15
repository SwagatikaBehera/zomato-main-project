import React from "react";

// Component
import DiningCarousel from "./DiningCarousel";

const DiningOut = () => {
  return (
    <div>
      <div className="overflow-x-auto md:hidden">
        <DiningCarousel />
      </div>
      <div className="hidden md:block">
        <DiningCarousel />
      </div>
      <h1 className="text-xl md:text-3xl md:font-semibold md:my-8">
        Dine-Out Restaurants in Patia, Bhubaneswar, India
      </h1>
    </div>
  );
};

export default DiningOut;
