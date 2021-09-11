import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        right:"2px",
        height: "42px",
        width: "42px",
        background: "black",
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
        borderRadius: "50%",
        padding: "11px",
        zIndex: "1",
      }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        height: "42px",
        width: "42px",
        background: "black",
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
        borderRadius: "50%",
        padding: "11px",
        zIndex: "1",
      }}
      onClick={props.onClick}
    />
  );
};
