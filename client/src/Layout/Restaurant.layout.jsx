import React from "react";

// Component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import FoodGrid from "../Components/Restaurant/foodGrid";

const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-52 py-8">
        <FoodGrid
          image={[
            "https://b.zmtcdn.com/data/pictures/7/18921277/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
            "https://b.zmtcdn.com/data/pictures/6/18921286/7ebb5125f196fff3c0e37899d3575d5f.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/7/18921277/6ddd491a67928f38fcaedf86e3012bab.jpg",
            "https://b.zmtcdn.com/data/pictures/6/18921286/ef6e8705254e75852eccc5c999820069.jpeg",
            "https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg",
          ]}
        />
      </div>
    </>
  );
};

export default RestaurantLayout;
