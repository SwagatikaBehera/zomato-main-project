import React from "react";
import classnames from "classnames";

const MenuCategory = (props) => {
  return (
    <>
      <div
        className={classnames({
          "text-zoamto-400 bg-zomato-100 border-r-2 border-zomato-400":
            props.isActive,
        })}
        onClick={props.onClickHandler}
        id={props.name}
      >
        <h4>
          {props.name}({props.items.length})
        </h4>
      </div>
    </>
  );
};

export default MenuCategory;
