import SingleReview from "./SingleReview.js/SingleReview";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.scss";

import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
// Import Swiper styles

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://drone-sales-2021.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="py-4">
      <h2 className="text-3xl text-purple-500 my-4 text-center review-text">
        Client Reviews
      </h2>

      <Swiper navigation={true} className="">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <SingleReview review={review}></SingleReview>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
