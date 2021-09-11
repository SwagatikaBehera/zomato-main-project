import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";

const Master = () => {
  const { type } = useParams();

  return <div className="my-5">{type === "Delivery" && <Delivery />}</div>;
};

export default Master;
