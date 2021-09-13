import React, { useState } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setrestaurantList] = useState([
    {
      _id: "8895",
      isPro: true,
      isOff: 80,
      durationOfdelivery: 35,
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/2/2900222/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "KFC",
      restaurantReviewValue: 4.3,
      cuisine: ["Burger", "Fast Food", "Beverages"],
      averageCost: 400,
    },
    {
      _id: "8895",
      isPro: true,
      isOff: 20,
      durationOfdelivery: 31,
      photos: [
        "https://b.zmtcdn.com/data/pictures/3/19549423/7f55dda47bec6a0406e90382811cf418_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Pabrai's Fresh & Naturelle Ice Cream",
      restaurantReviewValue: 4.5,
      cuisine: ["Dessert", "Ice Cream"],
      averageCost: 200,
    },
    {
      _id: "8895",
      isPro: false,
      isOff: 50,
      durationOfdelivery: 47,
      photos: [
        "https://b.zmtcdn.com/data/pictures/4/2900044/357b1ef61611d93c190158459c2adc4d_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Mamma Mia - Mayfair Lagoon",
      restaurantReviewValue: 3.7,
      cuisine: ["Cafe", "Bakery", "Beverages", "Continental"],
      averageCost: 400,
    },
  ]);

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
