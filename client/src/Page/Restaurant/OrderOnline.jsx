import React from "react";

// Component
import FloatMenubtn from "../../Components/Restaurant/Order-Online/FloatMenubtn";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full">
        <aside className="hidden md:block w-1/4 border-r h-screen" >
          <MenuListContainer />
        </aside>
        <div className="w-full md:3/4"></div>
      </div>
      <FloatMenubtn />
    </>
  );
};

export default OrderOnline;
