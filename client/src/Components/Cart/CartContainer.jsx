import React, { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
  IoIosClose,
} from "react-icons/io";

// Component
import FoodItems from "./FoodItems";

const CartSm = ({ toggle }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full md:hidden">
        <div className="flex flex-col gap-1 items-start">
          <h4 className="flex items-center gap-1" onClick={toggle}>
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

const CartLg = ({ toggle }) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between w-full container px-52 py-1 mx-auto">
        <div className="flex gap-4 items-center">
          <h4 className="border border-gray-300 p-1 rounded " onClick={toggle}>
            <IoMdArrowDropup className="text-2xl" />
          </h4>
          <h4 className="text-lg bg-white">Your Order (1)</h4>
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
  const [isOpen, setIsOpen] = useState(false);

  const ToggleCart = () => setIsOpen((prev) => !prev);
  const CloseCart = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="flex flex-col gap-3 fixed w-full h-48 overflow-y-scroll bg-white z-30 p-2 bottom-16 md:px-52 ">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl">Your Orders</h3>
            <IoIosClose className="text-4xl" onClick={CloseCart} />
          </div>

          <hr />

          <div>
            <FoodItems name="Cheese in Tomato" price="20" quantity="2" />
            <FoodItems name="Cheese in Tomato" price="20" quantity="2" />
            <FoodItems name="Cheese in Tomato" price="20" quantity="2" />
          </div>
        </div>
      )}

      <div className="fixed w-full bg-white text-xl z-20 p-2 bottom-0 shadow-cart">
        <CartSm toggle={ToggleCart} />
        <CartLg toggle={ToggleCart} />
      </div>
    </>
  );
};

export default CartContainer;
