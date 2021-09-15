import React from "react";
import Slider from "react-slick";

// Components
import NutritionCard from "./NutritionCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const NutritionCardCarousel = () => {
  const categories = [
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
      title: "Sleep & Stress",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
      title: "Proteins & Fitness",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
      title: "Digestion & Weightloss Loss",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
      title: "Omegass",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
      title: "Beauty & Skin Care",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 lg:hidden">
        {categories.map((med) => (
          <NutritionCard {...med} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((med) => (
            <NutritionCard {...med} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NutritionCardCarousel;
