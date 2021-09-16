import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
      title: "Paneer",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
      title: "Paratha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/173bc40a5058e328f998f55eed7b7a7f1612459047.png",
      title: "Momos",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/90cc74d5256f614fc6658cf7942dadd9.png",
      title: "Noodles",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/4e026537a7d32360c5a22b7cb2e7f61a.png",
      title: "Mushrooms",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/340a21ee9885b28c0b118d89362dda2d1612466192.png",
      title: "Soup",
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
      <h1 className="text-2xl font-semibold mb-4">
        Inspiration for your first order
      </h1>
      <div className="flex flex-wrap justify-between gap-4 lg:hidden">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;
