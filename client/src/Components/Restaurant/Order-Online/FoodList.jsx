import React from "react";

// Component
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="sticky top-0 bg-white text-2xl font-semibold z-10 py-3">
          {props.name}
        </div>
        {props.items.map((item) => (
          <FoodItem key={item} _id={item} />
        ))}
      </div>
    </>
  );
};

export default FoodList;
