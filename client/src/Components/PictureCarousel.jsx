import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = (props) => {
  return (
    <>
      <div className=" w-60 md:w-full h-60 md:h-80 relative px-2 md:px-4">
        <div className="relative w-full h-full">
          <img
            src={props.image}
            alt="restaurants and pubs"
            className="w-full h-full rounded-md object-cover"
          />
          <div
            className="w-full h-full absolute bottom-0 rounded-md"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>

        <div className="absolute bottom-2 text-white ml-5">
          <h4 className="text-xl">{props.title}</h4>
          <h6 className="flex items-center">
           {props.available} <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
