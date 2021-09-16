import React from "react";

// Component
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCardCarousel from "./NutritionCardCarousel";
import NutritionProductCard from "./NutritionProductCard";

const Nutrition = () => {
  return (
    <>
      <div>
        <NutritionHeroCarousel />
        <div className="my-9 mb-20">
          <NutritionCardCarousel />
        </div>
        <div className="flex flex-wrap ">
          <NutritionProductCard
            bg="red"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
          <NutritionProductCard
            bg="green"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
          <NutritionProductCard
            bg="blue"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
          <NutritionProductCard
            bg="gray"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
          <NutritionProductCard
            bg="yellow"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
          <NutritionProductCard
            bg="pink"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"
          />
        </div>
      </div>
    </>
  );
};

export default Nutrition;
