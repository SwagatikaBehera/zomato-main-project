import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const Review = () => {
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
              <h3 className="text-lg">Arupananda</h3>
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
          <h4 className="font-light uppercase">Delivery</h4>
          <h4 className="text-gray-400">2 months ago</h4>
        </div>
        <div className="w-full">
          <p className="w-full text-gray-500 text-lg">
            Fries were crisp and upto mark and were. Stressbusters amid work.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            consequatur corrupti, eveniet modi totam, porro sunt iusto rem minus
            exercitationem at enim quasi repudiandae ducimus voluptatibus eum
            similique rerum praesentium?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iure ut error, minus saepe mollitia recusandae
            reiciendis laboriosam, eaque similique quasi eum? Quisquam error
            perspiciatis nihil nam modi deleniti aspernatur quia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
