import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsPlus } from "react-icons/bs";

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-start md:items-center gap-4">
        <div className="md:w-1/6 w-4/12 h-32 md:h-40 rounded-md">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1 w-8/12">
          <div className="flex items-start gap-6">
            <h3 className="text-base">{props.title}</h3>
            <button className="md:hidden flex items-center gap-2 rounded-md text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1">
              <BsPlus /> Add
            </button>
          </div>
          <span className="bg-blue-400 text-xs md:text-sm text-white font-light rounded-md w-14 md:w-16 px-1 py-1">
            Must Try
          </span>
          <span className="text-sm text-gray-400 flex gap-4">
            <ReactStars count={5} value={props.rating} activeColor="#ffd700" />
            {props.votes} votes
          </span>
          <h5 className="md:text-lg font-light text-gray-400">₹{props.price}</h5>
          <h5 className="text-base text-gray-400 font-light truncate">
            {props.description}
          </h5>
        </div>

        <div className="hidden md:block">
          <button className="md:flex items-center gap-2 rounded-md text-zomato-400 bg-zomato-50 border border-zomato-400 px-3 py-1">
            <BsPlus /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
