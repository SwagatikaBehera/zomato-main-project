import React, { useState } from "react";

// Component
import MenuCollections from "../../Components/Restaurant/MenuCollections";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {menus.map((menu) => {
          <MenuCollections {...menu} />;
        })}
      </div>
    </>
  );
};

export default Menu;
