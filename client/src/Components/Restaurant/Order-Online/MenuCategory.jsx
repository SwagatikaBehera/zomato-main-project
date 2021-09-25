import React from "react";
import classnames from "classnames";

const MenuCategory = (props) => {
  return (
    <>
      <div
        className={classnames("flex p-2", {
          "text-zomato-400 bg-zomato-100 border-r-2 border-zomato-400":
            props.isActive,
        })}
      >
        <h4
          className="pr-1 truncate ..."
          id={props.name}
          onClick={props.onClickHandler}
        >
          {props.name}
        </h4>
        <h4>({props.items.length})</h4>
      </div>
    </>
  );
};

export default MenuCategory;
