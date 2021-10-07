import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

// Component
import FoodItems from "../Components/Cart/FoodItems";
import PaymentAddressList from "../Components/Payments/Address";

const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gym",
      address: "India",
    },
    {
      name: "Office",
      address: "India",
    },
  ];

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
          <div className="flex flex-col items-center gap-3 md:w-3/5 w-full">
            <h4 className="text-lg font-semibold ">Select Address</h4>
            <PaymentAddressList address={address} />
            <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
              Pay Securely <BsShieldLockFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
