import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "../Components/Delivery";
import DiningOut from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

const Home = () => {
  const { type } = useParams();

  return (
    <div className="my-5">
      {type === "Delivery" && <Delivery />}
      {type === "Dining" && <DiningOut />}
      {type === "Nightlife" && <NightLife />}
      {type === "Nutrition" && <Nutrition />}
    </div>
  );
};

export default Home;
