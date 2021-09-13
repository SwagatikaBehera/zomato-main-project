import React from "react";
import Slider from "react-slick";

// Component
import PictureCarouselCard from "../PictureCarousel";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const DiningCarousel = () => {
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
    <div className="w-full">
      <Slider {...settings}>
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
      </Slider>
    </div>
  );
};

export default DiningCarousel;