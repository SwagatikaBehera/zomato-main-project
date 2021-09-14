import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";
import DiningOut from "./Dining";
import NightLife from "./NightLife";

const Master = () => {
  const { type } = useParams();

  return (
    <div className="my-5">
      {type === "Delivery" && <Delivery />}
      {type === "Dining" && <DiningOut />}
      {type=== "Nightlife"&& <NightLife />}
    </div>
  );
};

export default Master;
