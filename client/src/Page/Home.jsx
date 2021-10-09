import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import Delivery from "../Components/Delivery";
import DiningOut from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

// Redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Home = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

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
