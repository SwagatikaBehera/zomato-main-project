import React from "react";
import { RiImageAddLine } from "react-icons/ri";

const FoodGrid = (props) => {
  return (
    <>
      <div className="w-full h-48 rounded-lg md:hidden">
        <img
          src={props.image[0]}
          alt="food"
          className="w-full h-full rounded-lg "
        />
      </div>

      <div className="hidden md:flex gap-2 w-full lg:h-96 md:h-64">
        <div className="w-11/12 h-full overflow-hidden">
          <img
            src={props.image[0]}
            alt="food"
            className="w-full h-full object-cover transform transition duration-700 hover:scale-110 filter hover:brightness-110"
          />
        </div>

        <div className="flex flex-col w-3/12 h-full gap-2">
          <div className="w-full h-full overflow-hidden">
            <img
              src={props.image[1]}
              alt="food"
              className="w-full h-full object-cover transform transition duration-700 hover:scale-110 filter hover:brightness-110"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={props.image[2]}
              alt="food"
              className="w-full h-full object-cover transform transition duration-700 hover:scale-110 filter hover:brightness-110"
            />
          </div>
        </div>

        <div className="flex flex-col w-3/12 h-full gap-2">
          <div className="w-full h-full relative">
            <img src={props.image[3]} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40 w-full h-full" />
            <h3 className="w-full h-full absolute inset-y-2/4 text-white text-center text-lg">
              View Gallery
            </h3>
          </div>
          <div className="w-full h-full relative">
            <img
              src={props.image[4]}
              alt="food"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col items-center justify-center w-full h-full inset-0">
              <div className=" bg-black bg-opacity-40 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center">
                <RiImageAddLine />
              </div>
              <h4 className="text-white text-lg">Add Photos</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodGrid;
