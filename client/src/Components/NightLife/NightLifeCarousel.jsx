import React from "react";
import Slider from "react-slick";

// Component
import PictureCarouselCard from "../PictureCarousel";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const NightLifeCarousel = () => {
  const resPicture = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/2900633/b6429ddad24625e65344caabb921bd57.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25",
      title: "Trending This Week",
      available: "30 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/18788770/b643543e2ec4675f3fb12fe188eb1b19.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25",
      title: "Best of Bhubaneswar",
      available: "19 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/2900660/a874c7e5dfb17a190d6cd869a446c5bc.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25",
      title: "Sweet Tooth ",
      available: "8 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/19020936/a260f586172300814bae1debe6fcfc88.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25",
      title: "All-Day Dining",
      available: "14 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/0/18346990/89857a1bd086ea773430a62a36950d9e.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25",
      title: "Best Bars & Pubs",
      available: "11 Places",
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

  /*
   <Slider {...settings}>
          {resPicture.map((restaurant) => (
            < PictureCarouselCard {...restaurant} />
          ))}
        </Slider>
        
        */

  return (
    <div className="w-full">
      <Slider {...settings}>
        {resPicture.map((restaurant) => (
          <PictureCarouselCard {...restaurant} />
        ))}
      </Slider>
    </div>
  );
};

export default NightLifeCarousel;
