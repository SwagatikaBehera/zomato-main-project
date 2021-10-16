import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// Component
import MenuListContainer from "./MenuListContainer";

const FloatMenubtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toogleMenu = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-2 z-10 right-2 w-3/6 flex flex-col gap-3 items-end md:hidden">
        {isClicked && (
          <div className="bg-white w-full h-56 border">
            <MenuListContainer />
          </div>
        )}

        <button
          className="flex items-center gap-2 text-white bg-pink-700 rounded-full px-3 py-2"
          onClick={toogleMenu}
        >
          {isClicked ? <AiOutlineClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
};

export default FloatMenubtn;
