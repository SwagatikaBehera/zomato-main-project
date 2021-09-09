import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="p-4 bg-white shadow-md flex items-center justify-between">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white py-1.5 px-3 rounded-full">
            Use App
          </button>
          <span className="border border-gray-300 p-2.5 text-zomato-400 rounded-full">
            <FaUserAlt />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
