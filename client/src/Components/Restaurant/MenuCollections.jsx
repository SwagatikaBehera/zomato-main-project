import React from "react";

const MenuCollections = (props) => {
  return (
    <>
      <div className="w-32 h-40 md:w-40 md:h-56 flex flex-col mb-6 font-light">
        <div className="w-full h-full overflow-hidden rounded-md">
          <img
            src={props.image}
            alt="Menu"
            className="w-full h-full transform transition hover:scale-110 rounded-md"
          />
        </div>
        <h5>{props.menuTitle}</h5>
        <p className="text-sm md:text-base">{props.pages} pages</p>
      </div>
    </>
  );
};

export default MenuCollections;
