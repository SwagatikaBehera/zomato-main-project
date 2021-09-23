import React from "react";
import { TiStar } from "react-icons/ti";

const OverviewSimilarRestaurant = ({image,title}) => {
  return (
    <>
      <div className="bg-white rounded-md w-52 md:w-60 h-68">
        <div className="w-full h-52 rounded-md mb-2">
          <img
            src={image}
            alt="Burger"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h3 className="md:text-xl">{title}</h3>
          <div className="flex items-center">
            <span className="flex items-center gap-1 border-r border-gray-400 pr-2 text-xs">
              <span className="flex items-center gap-1 bg-green-800 text-white px-1 py-0.5 rounded text-xs">
                3.3
                <TiStar />
              </span>
              DINING
            </span>
            <span className="flex items-center gap-1 text-xs ml-4">
              <span className="flex items-center gap-1 bg-green-800 text-white px-1 py-0.5 rounded text-xs">
                3.3
                <TiStar />
              </span>
              DELIVERY
            </span>
          </div>
          <h4 className="md:text-base font-normal text-gray-500">
            Burger, Fast Food, Beverages, Desserts
          </h4>
        </div>
        <h5 className="md:text-base font-light text-gray-400">
          Patia, Bhubaneshwar
        </h5>
      </div>
    </>
  );
};

export default OverviewSimilarRestaurant;
