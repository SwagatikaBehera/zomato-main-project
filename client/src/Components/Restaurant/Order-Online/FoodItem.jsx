import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { BsPlus } from "react-icons/bs";

// REDUX ACTIONS
import { getFood } from "../../../Redux/Reducer/food/food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";

const FoodItem = (props) => {
  const [food, setFood] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood(props._id)).then((data) => {
      setFood(data.payload.foods);

      dispatch(getImage(data.payload.foods.photos)).then((data) => {
        const pic = data?.payload?.image?.image;
        pic?.length &&
          setFood((prev) => ({ ...prev, image: pic[0].location }));
      });
    });
  }, []);

  return (
    <>
      {food?.name && (
        <div className="flex items-start md:items-center gap-4">
          {food?.image && (
            <div className="md:w-1/6 w-4/12 h-32 md:h-40 rounded-md">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-md"
              />
            </div>
          )}

          <div className="flex flex-col gap-1 w-8/12">
            <div className="flex items-start gap-6">
              <h3 className="text-base">{food?.name}</h3>
              <button className="md:hidden flex items-center gap-2 rounded-md text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1">
                <BsPlus /> Add
              </button>
            </div>
            <span className="bg-blue-400 text-xs md:text-sm text-white font-light rounded-md w-14 md:w-16 px-1 py-1">
              Must Try
            </span>
            <span className="text-sm text-gray-400 flex gap-4">
              <ReactStars
                count={5}
                value={food?.rating || 0}
                activeColor="#ffd700"
              />
              {props.votes} votes
            </span>
            <h5 className="md:text-lg font-light text-gray-400">
              ₹{food?.price}
            </h5>
            <h5 className="text-base text-gray-400 font-light truncate">
              {food?.descript}
            </h5>
          </div>

          <div className="hidden md:block">
            <button className="md:flex items-center gap-2 rounded-md text-zomato-400 bg-zomato-50 border border-zomato-400 px-3 py-1">
              <BsPlus /> Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
