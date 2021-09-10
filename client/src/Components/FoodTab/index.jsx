import React from "react";
import { RiShoppingBag3Line, RiFootprintLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline } from "react-icons/io5";

const TabSm = () => {
  return (
    <>
      <div className="bg-white shadow-lg p-3 fixed bottom-0 w-full flex items-center justify-between text-gray-500 border z-10 md:justify-evenly lg:hidden">
        <div className="flex flex-col items-center">
          <RiShoppingBag3Line className="text-2xl" />
          <h5 className="text-sm">Delivery</h5>
        </div>
        <div className="flex flex-col items-center ">
          <RiFootprintLine className="text-2xl" />
          <h5 className="text-sm">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center ">
          <BiDrink className="text-2xl" />
          <h5 className="text-sm">Nightlife</h5>
        </div>
        <div className="flex flex-col items-center ">
          <IoNutritionOutline className="text-2xl" />
          <h5 className="text-sm">Nutrition</h5>
        </div>
      </div>
    </>
  );
};

const TabLg = () => {
  return (
    <>
      <div className="hidden lg:flex container mx-auto px-52 gap-10">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 rounded-full p-2.5">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
              alt="Delivery Logo"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 rounded-full p-2.5">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp"
              alt="Dining Out Logo"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 rounded-full p-2.5">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt="Nightlife Logo"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nightlife</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 rounded-full p-2.5">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
              alt="Nutrition Logo"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <TabSm />
        <TabLg />
      </div>
    </>
  );
};

export default FoodTab;
