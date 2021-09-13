import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";
import DiningOut from "./Dining";

const Master = () => {
  const { type } = useParams();

  return (
    <div className="my-5">
      {type === "Delivery" && <Delivery />}
      {type === "Dining" && <DiningOut />}
    </div>
  );
};

export default Master;
