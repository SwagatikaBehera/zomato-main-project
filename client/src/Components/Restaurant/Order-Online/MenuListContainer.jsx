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
      <div className="flex flex-col gap-1 p-2 md:pr-0 h-full overflow-y-scroll md:overflow-hidden shadow-md md:shadow-none rounded-md md:rounded-none">
        <MenuCategory
          name="Recommended"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommended"}
        />
        <MenuCategory
          name="Recommlnded"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommlnded"}
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
