import React from "react";

// Component
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCardCarousel from "./NutritionCardCarousel";

const Nutrition = () => {
  return (
    <>
      <div>
        <NutritionHeroCarousel />
        <div className="my-9 mb-20">
          <NutritionCardCarousel />
        </div>
      </div>
    </>
  );
};

export default Nutrition;
