import React, { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const [images, setImages] = useState({
    image: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) =>
        setImages(data.payload.image)
      );
  }, [props.photos]);

  return (
    <Link
      to={`/restaurant/${props._id}`}
      className="w-full h-full md:w-1/2 lg:w-1/3 "
    >
      <>
        <div className=" w-full h-full px-2">
          <div className="bg-white w-full h-full shadow-lg lg:shadow-none py-2 px-3 hover:shadow-card rounded-2xl mb-10">
            <div className="w-full h-52 lg:h-64 relative mb-2">
              <div className="absolute flex flex-row items-end w-full justify-between bottom-3">
                <div className="flex flex-col gap-3 items-start">
                  {props.isPro && (
                    <span className="bg-pink-600 text-white px-2 py-1 rounded-r text-sm">
                      Pro extra 20% OFF
                    </span>
                  )}
                  {props.isOff && (
                    <span className="bg-blue-400 text-white px-2 py-1 rounded-r text-sm">
                      ₹{`${props.isOff}`} OFF
                    </span>
                  )}
                </div>

                <span className="bg-white text-gray-700 bg-opacity-75 py-0.5 px-1 rounded text-sm font-semibold mr-2">
                  {props.durationOfdelivery} min
                </span>
              </div>

              <img
                src={images.image.length && images.image[0].location}
                alt="food"
                className="w-full h-full rounded-t-2xl md:rounded-2xl"
              />
            </div>

            <div className="px-3 md:px-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">{props.name}</h3>
                <span className="bg-green-800 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  {props.restaurantReviewValue} <TiStar />
                </span>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-400 text-xs lg:text-base">
                  {props.cuisine.join(", ")}
                </p>
                <p className="text-gray-400 text-xs lg:text-base">
                  ₹{props.averageCost} for one
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default RestaurantCard;
