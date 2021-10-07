import React from "react";

const FoodItems = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <h5>{props.name}</h5>
        <div className="flex flex-col items-end gap-2">
          <h5>₹{parseInt(props.price) * parseInt(props.quantity)}</h5>
          <div className="flex text-white rounded-lg bg-zomato-400 ">
            <button className="focus:bg-zomato-500 px-2 py-1 rounded-l-lg">
              -
            </button>
            <button className="focus:bg-zomato-500 px-1 py-1">23</button>
            <button className="focus:bg-zomato-500 px-2 py-1 rounded-r-lg">
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default FoodItems;
