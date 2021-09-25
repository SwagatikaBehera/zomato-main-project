import React, { useState } from "react";

// Component
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  const [selected, setselected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setselected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="flex flex-col gap-1 p-2 h-full overflow-y-scroll shadow-md rounded-md">
        <MenuCategory
          name="Recommended"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommended"}
        />
        <MenuCategory
          name="Recommelnded"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommelnded"}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
