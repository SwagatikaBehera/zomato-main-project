import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

// Component
import SignIn from "../Auth/Signin";

const NavbarSm = ({ SignIn }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>

      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-1.5 px-3 rounded-full">
          Use App
        </button>
        <span
          className="border border-gray-300 p-2.5 text-zomato-400 rounded-full"
          onClick={() => setIsDropDownOpen((prev) => !prev)}
        >
          <FaUserAlt />
        </span>
        {isDropDownOpen && (
          <div className="absolute w-full bg-white z-10 flex flex-col gap-1 -bottom-28 -right-2 py-2 shadow-lg bg-zomato-100 rounded">
            <button
              className="text-lg font-medium focus:bg-zomato-200 py-1"
              onClick={SignIn}
            >
              Log In
            </button>

            <button className="text-lg font-medium focus:bg-zomato-200 py-1">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const NavbarLg = ({ SignIn }) => {
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
            <button
              className="text-gray-500 hover:text-gray-900 text-xl"
              onClick={SignIn}
            >
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
  const [openLogIn, setOpenLogIn] = useState(false);

  const openLogInModel = () => setOpenLogIn(true);

  return (
    <>
      <SignIn isOpen={openLogIn} setIsOpen={setOpenLogIn} />
      <nav className="p-4 bg-white shadow-md lg:shadow-none">
        <NavbarSm SignIn={openLogInModel} />
        <NavbarLg SignIn={openLogInModel} />
      </nav>
    </>
  );
};

export default Navbar;
