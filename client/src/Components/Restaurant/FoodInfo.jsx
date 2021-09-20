import React from "react";
import { TiStar } from "react-icons/ti";

const FoodInfo = () => {
  return (
    <>
      <div className="my-3">
        <div className="flex md:items-center flex-col flex-col-reverse md:flex-row justify-between md:my-1 gap-3">
          <h1 className="text-xl md:text-3xl font-semibold">Burger King</h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5 bg-green-800 rounded-md px-1 text-white font-semibold text-base">
                4.3 <TiStar />
              </span>
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">892 </h4>
                <p className="text-xs text-gray-500 border-b border-dashed pb-1">
                  Delivery Reviews
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5 bg-green-800 rounded-md px-1 text-white font-semibold text-base">
                4.4 <TiStar />
              </span>
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">27.4K </h4>
                <p className="text-xs text-gray-500 border-b border-dashed pb-1">
                  Delivery Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-base md:text-lg text-gray-500">
          <h3>Burger, Fast Food, Beverages, Desserts</h3>
          <h3 className="text-gray-400">Patia, Bhubaneshwar</h3>
          <h3 className="text-base">
            10am – 11pm
            <span className="text-yellow-400">(Open Now)</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default FoodInfo;
