import React, { useState } from "react";
import Rating from "react-rating-stars-component";

//Component
import ReviewModal from "./ReviewModel";

const AddReviewCard = () => {
  const handleRating = (value) => console.log(value);

  const [isOpen, setIsOpen] = useState(false);

  const openModel = () => setIsOpen(true);

  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Rate your experience for</h3>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center text-lg font-light">
            <input type="radio" name="review" id="dining" />
            <label htmlFor="dining">Dining</label>
          </div>
          <div className="flex gap-2 items-center text-lg font-light">
            <input type="radio" name="review" id="delivery" />
            <label htmlFor="delivery">Delivery</label>
          </div>
        </div>
        <div>
          <Rating count={5} size={24} onChange={handleRating} />
        </div>
        <h3
          className="text-lg text-zomato-300 font-light cursor-pointer "
          onClick={openModel}
        >
          Write a Review
        </h3>
      </div>
    </>
  );
};

export default AddReviewCard;
