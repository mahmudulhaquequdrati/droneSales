import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview.js/SingleReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="py-4">
      <h2 className="text-3xl text-purple-500 text-center review-text">
        Reviews by clients
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 m-16 ">
        {reviews.map((review) => (
          <SingleReview review={review} key={review.id}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
