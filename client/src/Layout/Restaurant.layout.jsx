import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShareForwardLine, RiDirectionLine } from "react-icons/ri";

// Component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import FoodGrid from "../Components/Restaurant/foodGrid";
import FoodInfo from "../Components/Restaurant/FoodInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabContainer from "../Components/Restaurant/Tabs";

const RestaurantLayout = (props) => {
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
        <FoodInfo
          title="Burger King"
          restaurantRating="4.3"
          deliveryRating="4.4"
          address="Patia, Bhubaneshwar"
          cuisine="Burger, Fast Food, Beverages, Dessert"
        />

        <div className="flex flex-wrap gap-2">
          <InfoButtons isActive>
            <AiOutlineStar /> Add Review
          </InfoButtons>

          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>

          <InfoButtons>
            <BsBookmarkPlus /> Bookmark
          </InfoButtons>

          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>

        <div>
          <TabContainer />
        </div>
      </div>
    </>
  );
};

export default RestaurantLayout;
