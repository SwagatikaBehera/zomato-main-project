import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

// Component
import FoodItems from "../Components/Cart/FoodItems";
import PaymentAddressList from "../Components/Payments/Address";

const CheckoutLg = () => {
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
      <div className="hidden md:flex justify-between w-full gap-20 my-8">
        <div className="flex flex-col gap-4 w-1/2 ">
          <h1 className="text-xl md:text-3xl font-semibold">Checkout</h1>
          <div className="flex flex-col py-3 items-center rounded-lg shadow-lg bg-white w-full">
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

        <div className="flex flex-col items-center gap-3 md:w-2/6 w-full ">
          <h4 className="text-lg font-semibold ">Select Address</h4>
          <PaymentAddressList address={address} />
          <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 focus:bg-zomato-500 rounded-lg">
            Pay Securely <BsShieldLockFill />
          </button>
        </div>
      </div>
    </>
  );
};

const CheckoutSm = () => {
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
      <div className="md:hidden flex flex-col gap-3 items-center">
        <div className="w-full shadow-md text-2xl py-2 text-center font-semibold">
          Checkout
        </div>
        <div className="flex flex-col py-3 items-center px-4 rounded-lg shadow-lg bg-white w-full">
          <h3 className="text-lg font-semibold">Summary</h3>
          <div className="flex flex-col gap-2 items-center">
            <h5 className="tracking-wider">ORDER FROM</h5>
            <div className="flex flex-col items-center text-gray-400">
              <h4 className=" font-semibold">Delight Milkshakes</h4>
              <h5 className="text-sm">Patia, Bhubaneswar</h5>
            </div>
          </div>
          <div className="my-6 flex flex-col px-4 w-full">
            <FoodItems name="Burger" quantity={3} price={33} />
            <FoodItems name="Burger" quantity={3} price={33} />
            <FoodItems name="Burger" quantity={3} price={33} />
          </div>
          
          <div className="flex flex-col items-center gap-3 w-full">
            <h4 className="text-lg font-semibold ">Select Address</h4>
            <PaymentAddressList address={address} />
            <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
              Pay Securely <BsShieldLockFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Checkout = () => {
  return<>
  <CheckoutLg/>
  <CheckoutSm/>
  </>
};

export default Checkout;
