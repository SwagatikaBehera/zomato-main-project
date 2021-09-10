import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const NavbarSm = () => {
  return (
    <div className="flex items-center justify-between lg:hidden">
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
    </div>
  );
};

const NavbarLg = () => {
  return (
    <>
      <div className="container mx-auto px-48 ">
        <div className="hidden lg:flex items-center gap-8 w-full ">
          <div className="w-40">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-2 w-3/4">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Patia,Bhubaneswar, India"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown className="text-gray-500" />
            </div>
            <div className="flex items-center text-gray-500 gap-2 w-full">
              <BiSearch className="text-xl" />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 ml-28">
            <button className="text-gray-500 hover:text-gray-900 text-xl">
              Login
            </button>
            <button className="text-gray-500 hover:text-gray-900 text-xl">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 bg-white shadow-md">
        <NavbarSm />
        <NavbarLg />
      </nav>
    </>
  );
};

export default Navbar;
