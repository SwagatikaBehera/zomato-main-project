import React from "react";
import { HiMenu } from "react-icons/hi";

const FloatMenubtn = () => {
  return (
    <>
      <button className="flex items-center gap-2 fixed bottom-2 right-2 text-white bg-pink-700 rounded-full px-3 py-2 md:hidden">
          <HiMenu/> Menu
      </button>
    </>
  );
};

export default FloatMenubtn;
