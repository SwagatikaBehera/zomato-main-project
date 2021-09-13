import React from "react";
import Slider from "react-slick";

// Category
import {
  NextArrow,
  PrevArrow,
  NextArrowSm,
  prevArrow,
  PrevArrowSm,
} from "../CarouselArrow";

const Brand = (props) => {
  const Logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/334fc7a8dcd2b4b921c0779c21c43655_1628839459.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521807124.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/0e5857a0f43acb75517b97b5a29e9138_1625244133.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/b5bd4b19f13623ee1c09460162fb1cb8_1583315109.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6bd2c15220c3172678ce92b42036430f_1605098977.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/645fad57cae9811ff7fd9cbb2f2689f5_1608106456.png?output-format=webp",
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: <NextArrowSm />,
          prevArrow: <PrevArrowSm />,
        },
      },
    ],
  };

  return (
    <div className="my-5 mb-32">
      <Slider {...settings}>
        {Logos.map((logo) => (
          <div className="w-24 h-24 bg-white shadow-md rounded-lg ">
            <img
              src={logo}
              alt="Brand"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
