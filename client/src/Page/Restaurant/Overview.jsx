import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  IoMdArrowDropright,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import Slider from "react-slick";

// Component
import MenuCollections from "../../Components/Restaurant/MenuCollections";
import OverviewSimilarRestaurant from "../../Components/Restaurant/overviewSimilarRestaurant";
import { NextArrow, PrevArrow } from "../../Components/CarouselArrow";

const Overview = () => {
  const { id } = useParams();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-8/12">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:pb-6">
            About this place
          </h2>
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <h3 className="text-xl">Menu</h3>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center text-red-500 gap-1">
                See all menus <IoMdArrowDropright className="text-xl mt-1" />
              </span>
            </Link>
          </div>

          <MenuCollections
            menuTitle="Menu"
            pages="4"
            image="https://b.zmtcdn.com/data/menus/277/18921277/50a7b1f53c8eb5ef92971e844678343f.jpg"
          />

          <h3 className="text-xl mb-3">Cuisines</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="border shadow-sm text-blue-400 rounded-full p-2 text-lg">
              Burger
            </span>
            <span className="border shadow-sm text-blue-400 rounded-full p-2 text-lg">
              Fast Food
            </span>
            <span className="border shadow-sm text-blue-400 rounded-full p-2 text-lg">
              Beverages
            </span>
            <span className="border shadow-sm text-blue-400 rounded-full p-2 text-lg">
              Desserts
            </span>
          </div>

          <h3 className="text-xl mb-2">Popular Dishes</h3>
          <p className="text-lg font-light mb-6">
            Whopper Meal, Mutton Patty, Veg Burger, Fries
          </p>

          <h3 className="text-xl mb-2">People Say This Place Is Known For</h3>
          <p className="text-lg font-light mb-6">
            Plenty of Vegetarian Options, Chirpy Crowd, Lovely Ambience,
            Elegantly Decorated, Good Crowd, Great Recommendations
          </p>

          <h3 className="text-xl mb-2">Average Cost</h3>
          <p className="text-lg font-light">₹400 for two people (approx.)</p>
          <p className="text-sm font-thin mb-6">
            Exclusive of applicable taxes and charges, if any
          </p>

          <p className="text-xl font-light mb-6">
            Cash and Cards accepted Digital payments accepted
          </p>

          <h3 className="text-xl mb-3">More Info</h3>
          <div className="flex items-center gap-6 md:gap-56 mb-6">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1 text-base font-light">
                <IoIosCheckmarkCircleOutline className="text-2xl text-blue-600" />
                Breakfast
              </span>
              <span className="flex items-center gap-1 text-base font-light">
                <IoIosCheckmarkCircleOutline className="text-2xl text-blue-600" />
                Takeaway Available
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1 text-base font-light">
                <IoIosCheckmarkCircleOutline className="text-2xl text-blue-600" />
                Home Delivey
              </span>
              <span className="flex items-center gap-1 text-base font-light">
                <IoIosCheckmarkCircleOutline className="text-2xl text-blue-600" />
                Indoor Seating
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">Similar Restaurants</h3>
            <Slider {...settings}>
              <OverviewSimilarRestaurant
                image="https://b.zmtcdn.com/data/pictures/chains/2/2900222/263e5a9cdf0128c15fa06d5990f36be9_featured_v2.jpg"
                title="KFC"
              />
              <OverviewSimilarRestaurant
                image="https://b.zmtcdn.com/data/pictures/2/19461322/69c3f6221a3850e154f530af25fda7ac_featured_v2.jpg"
                title="KFC"
              />
              <OverviewSimilarRestaurant
                image="https://b.zmtcdn.com/data/pictures/chains/1/2901221/7d4c7b59e76f8ec9b5f67b1da74bde2a_featured_v2.jpg"
                title="KFC"
              />
              <OverviewSimilarRestaurant
                image="https://b.zmtcdn.com/data/pictures/chains/1/18336901/e59e612b3dc79ab72dd1f12e6bdaf1ff_featured_v2.jpg"
                title="KFC"
              />
            </Slider>
          </div>
        </div>

        <aside
          style={{ height: "fit-content" }}
          className="hidden md:block md:w-4/12 sticky top-2 shadow-lg rounded-md p-3 m-6 bg-white shadow-xl"
        ></aside>
      </div>
    </>
  );
};

export default Overview;
