import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShareForwardLine, RiDirectionLine } from "react-icons/ri";


// Component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import FoodGrid from "../Components/Restaurant/foodGrid";
import FoodInfo from "../Components/Restaurant/FoodInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

// Redux action
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({
    image: [],
    name: "",
    cuisine: "",
    address: "",
  });
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
        setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
      );
    });
  }, []);

  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-52 py-8">
        <FoodGrid images={restaurant?.image} />
        <FoodInfo
          title={restaurant?.name}
          restaurantRating={restaurant?.rating || 0}
          deliveryRating={restaurant?.rating || 0}
          address={restaurant?.address}
          cuisine={restaurant?.cuisine}
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
        <div className="">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
