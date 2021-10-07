import React from "react";

// Component
import FoodItems from "../Components/Cart/FoodItems";

const Checkout = () => {
  return (
    <>
      <div className="my-3 flex flex-col gap-3 items-center">
        <h1 className="text-xl md:text-3xl text-center font-semibold">
          Checkout
        </h1>
        <div className="flex flex-col py-3 items-center rounded-lg shadow-lg bg-white w-full md:w-3/5">
          <h3 className="text-lg font-semibold">Summary</h3>
          <div className="flex flex-col gap-2 items-center">
            <h5 className="tracking-wider">ORDER FROM</h5>
            <div className="flex flex-col items-center text-gray-400">
              <h4 className=" font-semibold">Delight Milkshakes</h4>
              <h5 className="text-sm">Patia, Bhubaneswar</h5>
            </div>
          </div>
          <div className="my-6 flex flex-col px-4 md:px-0 w-full md:w-3/5">
            <FoodItems name="Burger" quantity={3} price={33} />
            <FoodItems name="Burger" quantity={3} price={33} />
            <FoodItems name="Burger" quantity={3} price={33} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
