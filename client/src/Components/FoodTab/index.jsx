import React, { useState } from "react";
import { RiShoppingBag3Line, RiFootprintLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { IoNutritionOutline } from "react-icons/io5";
import classnames from "classnames";

// URL parameter
import { useParams, Link } from "react-router-dom";

const TabSm = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `Delivery`,
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: `Dining`,
      icon: <RiFootprintLine />,
      name: "Dining Out",
      isActive: false,
    },
    {
      id: `Nightlife`,
      icon: <BiDrink />,
      name: "Nightlife",
      isActive: false,
    },
    {
      id: `Nutrition`,
      icon: <IoNutritionOutline />,
      name: "Nutrition",
      isActive: false,
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="bg-white shadow-lg p-2 fixed bottom-0 w-full flex items-center justify-between text-gray-500 border z-10 md:justify-evenly lg:hidden">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col items-center text-zomato-400 text-2xl relative "
                  : "flex flex-col items-center text-2xl"
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const TabLg = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `Delivery`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
      name: "Delivery",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      activeColor: "yellow",
    },
    {
      id: `Dining`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      name: "Dining Out",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",
    },
    {
      id: `Nightlife`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
      name: "Nightlife",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "green",
    },
    {
      id: `Nutrition`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      name: "Nutrition",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "purple",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="hidden lg:flex container mx-auto px-52 gap-10">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={classnames("flex items-center gap-3", {
                "border-b-2 border-zomato-400 pb-4 transition duration-700 ease-in-out" : type === items.id,
              })}
            >
              <div
                className={`w-14 h-14 bg-${
                  type === items.id ? items.activeColor : "gray"
                }-100 rounded-full p-2.5`}
              >
                <img
                  src={
                    type === items.id ? items.imageActive : items.imageDefault
                  }
                  alt="Delivery Logo"
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === items.id
                    ? "text-xl text-zomato-400 font-semibold"
                    : "text-xl text-gray-700 font-semibold"
                }
              >
                {items.name}
              </h3>
            </div>
          </Link>
        ))}
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
