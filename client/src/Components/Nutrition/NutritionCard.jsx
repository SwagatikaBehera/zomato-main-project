import React from "react";

const NutritionCard = ({ image, title }) => {
  return (
    <>
      <div className=" shadow-md md:my-4 w-24 md:w-56 lg:w-64">
        <div className="w-full md:h-36 my-4">
          <img
            src={image}
            alt="medicine"
            className="w-full h-full"
          />
        </div>
        <div>
          <h3 className="text-sm font-light text-center py-1 lg:text-lg">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default NutritionCard;
