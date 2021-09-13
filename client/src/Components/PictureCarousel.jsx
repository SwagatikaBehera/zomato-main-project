import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="w-full h-80 relative px-4">
        <div className="relative w-full h-full">
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/3/2900633/b6429ddad24625e65344caabb921bd57.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25"
            alt="restaurants and pubs"
            className="w-full h-full rounded-lg object-cover"
          />
          <div
            className="w-full h-full absolute bottom-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>

        <div className="absolute bottom-2 text-white ml-5">
          <h4 className="text-xl">Trending This Week</h4>
          <h6 className="flex items-center">
            30 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
