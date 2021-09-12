import React from "react";
import { TiStar } from "react-icons/ti";

const RestaurantCard = () => {
  return (
    <>
      <div className="bg-white md:w-1/2 lg:w-1/3 shadow-lg lg:shadow-none p-2 w-full hover:shadow-xl rounded-2xl mb-20">
        <div className="w-full h-52 lg:h-64 relative mb-2">
          <div className="absolute flex flex-row items-end w-full justify-between bottom-3">
            <div className="flex flex-col gap-3 items-start">
              <span className="bg-pink-600 text-white px-2 py-1 rounded-r text-sm">
                Pro extra 20% OFF
              </span>
              <span className="bg-blue-400 text-white px-2 py-1 rounded-r text-sm">
                ₹350 OFF
              </span>
            </div>
            <span className="bg-white text-gray-700 bg-opacity-75 py-0.5 px-1 rounded text-sm font-semibold mr-2">
              32 min
            </span>
          </div>
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/7/19628787/761476e14adfc798be41b0cb56880f15_o2_featured_v2.jpg?output-format=webp"
            alt="food"
            className="w-full h-full rounded-t-2xl md:rounded-2xl"
          />
        </div>
        <div className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-medium">Frozit</h3>
            <span className="bg-green-800 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
              3.7 <TiStar />
            </span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 text-xs lg:text-base">
              North Indian, Fast Food, Bakery, Desserts
            </p>
            <p className="text-gray-400 text-xs lg:text-base">₹350 for one</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
