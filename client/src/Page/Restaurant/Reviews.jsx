import React, { useState } from "react";

// Component
import Review from "../../Components/Restaurant/Review/Review";
import AddReviewCard from "../../Components/Restaurant/Review/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", ""]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden"> 
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <Review {...review} />
          ))}
        </div>

        <aside
          style={{ height: "fit-content" }}
          className="hidden md:block md:w-4/12 sticky top-2 rounded-lg p-4 m-6 bg-white shadow-md"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
};

export default Reviews;
