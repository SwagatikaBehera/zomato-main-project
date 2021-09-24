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
      <div className="w-full">
        <MenuCategory
          name="Recommended"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected==="Recommended"}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
