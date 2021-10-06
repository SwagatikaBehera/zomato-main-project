import React from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
} from "react-icons/io";

const CartSm = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full md:hidden">
        <div className="flex flex-col gap-1 items-start">
          <h4 className="flex items-center gap-1">
            1 item <IoMdArrowDropup className="text-2xl" />
          </h4>
          <h4 className="text-lg">
            ₹300 <sub>(plus tax)</sub>
          </h4>
        </div>
        <button className="flex items-center text-lg gap-1 bg-zomato-400 px-3 py-2 text-white rounded-lg itemscenter">
          Continue <IoMdArrowDropright className="text-2xl" />
        </button>
      </div>
    </>
  );
};

const CartLg = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between w-full container px-52 py-1 mx-auto">
        <div className="flex gap-4 items-center">
          <h4 className="border border-gray-300 p-1 rounded ">
            <IoMdArrowDropup className="text-2xl" />
          </h4>
          <h4 className="text-lg">Your Order (1)</h4>
        </div>

        <div className="flex items-center gap-8">
          <h4 className="text-lg">Subtotal: ₹300</h4>
          <button className="flex items-center gap-1 text-lg font-light h-10 bg-zomato-400 px-3 py-2 text-white rounded-lg">
            Continue <IoMdArrowDropright className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

const CartContainer = () => {
  return (
    <>
      <div className="fixed w-full bg-white text-xl z-10 p-2 bottom-0 shadow-cart">
        <CartSm />
        <CartLg />
      </div>
    </>
  );
};

export default CartContainer;
