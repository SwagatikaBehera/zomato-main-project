import React from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  return (
    <>
      <DeliveryCarousel />
      <Brand />
      <RestaurantCard />
    </>
  );
};

export default Delivery;
