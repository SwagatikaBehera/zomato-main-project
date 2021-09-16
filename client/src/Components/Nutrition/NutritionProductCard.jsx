import React from "react";
import { RiStarHalfSFill, RiStarSFill, RiStarSLine } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";

const NutritionProductCard = (props) => {
  return (
    <div className=" w-full h-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white w-full h-full shadow-lg rounded-2xl mb-10">
        <div className={`w-full h-full bg-${props.bg}-100 rounded-t-2xl`}>
          <img src={props.image} alt="Supplement" className="w-full h-full" />
        </div>

        <div className="flex items-center gap-3 my-2 pl-3">
          <div className="w-4 h-4">
            <img
              src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
              alt="veg"
              className="w-full h-full"
            />
          </div>
          <div>
            <ReactStars
              count={5}
              //onChange={ratingChanged}
              size={16}
              isHalf={true}
              value={3.5}
              emptyIcon={<RiStarSLine />}
              halfIcon={<RiStarHalfSFill />}
              fullIcon={<RiStarSFill />}
              activeColor="#ffd700"
            />
          </div>
          <span className="text-sm text-gray-500">12</span>
        </div>

        <div className="px-3 mb-3">
          <h2 className="font-bold text-lg">Burn - Weight Balance</h2>
          <p className="text-base text-gray-400">
            This formula with VFill technolgy will help improve metabolism and
            support fat burn.
          </p>
        </div>

        <div className="my-6 px-3">
          <hr />
        </div>

        <div className="pl-3 mb-3">
          <s className="text-gray-500 pr-3">₹650</s>
          <span className="font-bold">₹320</span>
          <p className="text-gray-500">monthly pack - 30 capsules</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionProductCard;
