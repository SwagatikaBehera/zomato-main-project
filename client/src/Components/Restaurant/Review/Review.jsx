import React, { useState, useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

// Reducer
import { getUser } from "../../../Redux/Reducer/user/user.action";

const Review = (props) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(props.user)).then((data) =>
      // setUser(data.payload.user.user.user)
      console.log({ data })
    );
  }, []);

  return (
    <>
      <div className="my-12">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/7e1/a736a9cef38bb5c62a7db6965cdee7e1.jpg"
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-lg">{user?.fullname}</h3>
              <p className="text-gray-400">332 reviews &bull; 2778 Followers</p>
            </div>
          </div>
          <button className="border border-zomato-400 text-lg text-zomato-400 rounded-md p-2">
            Follow
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-0.5 bg-green-700 text-white text-sm px-1 font-semibold rounded-md">
            5 <TiStarFullOutline />
          </span>
          <h4 className="font-light uppercase">
            {props.isRestaurantReview ? "Dining" : "Delivery"}
          </h4>
          <h4 className="text-gray-400">
            {dayjs(props.createdAt).format("DD MM YYYY")}
          </h4>
        </div>
        <div className="w-full">
          <p className="w-full text-gray-500 text-lg">
            The chicken wasn't cooked properly and the prawns quantity as well
            as size wasn't up to the mark
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
