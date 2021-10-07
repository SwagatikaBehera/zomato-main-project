import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";

const PaymentNavbar = () => {
  return (
    <>
      <nav className="p-4 bg-white shadow-md lg:shadow-none lg:px-60">
        <div className="flex items-center justify-between">
          <HiArrowNarrowLeft />
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 border border-gray-300 p-2.5 text-zomato-400 rounded-full">
              <FaUserAlt />
            </span>
            <h4>Swagatika</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PaymentNavbar;
