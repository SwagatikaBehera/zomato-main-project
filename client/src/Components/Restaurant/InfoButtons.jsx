import React from "react";
import classnames from "classnames";

const InfoButtons = (props) => {
  return (
    <>
      <button
        className={classnames(
          "flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg",
          {
            "text-white bg-zomato-300 border border-zomato-300": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </>
  );
};

export default InfoButtons;
