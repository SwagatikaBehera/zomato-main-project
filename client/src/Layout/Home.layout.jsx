import React from "react";

// Components
import Navbar from "../Components/Navbar";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-52">{props.children}</div>
    </>
  );
};

export default HomeLayout;
