import React from "react";
import Rating from "react-rating";

const SingleReview = ({ review }) => {
  const { name, rating, img, reviewDescription } = review;
  return (
    <div className="h-72 m-8  shadow rounded-lg">
      <div className="pt-2">
        <div>
          <img className="w-28 h-28 mx-auto rounded-full" src={img} alt="" />
        </div>
        <div className="text-center pb-4">
          <h2 className="font-medium text-lg mt-2">{name}</h2>
          <div>
            <Rating
              readonly
              className="text-yellow-400"
              initialRating={rating}
              emptySymbol="far fa-star "
              fullSymbol="fas fa-star "
            />
          </div>
          <p className="w-full px-2 mx-auto">{reviewDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
