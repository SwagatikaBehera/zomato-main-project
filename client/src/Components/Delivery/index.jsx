import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setrestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setrestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousel />
      <Brand />
      <h1 className="text-3xl mb-6">Best Food in Bhubaneswar</h1>
      <div className="flex flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
