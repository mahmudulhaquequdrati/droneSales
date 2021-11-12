import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import Rating from "react-rating";
import "./UserReview.css";

const UserReview = () => {
  const [review, setReview] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();

    // send data to the server
    fetch("https://drone-sales-2021.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setReview(true);
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-4xl text-green-600 font-sans font-bold mb-4">
        Your Review is Important to Us
      </h2>
      {review && (
        <div className="flex justify-center w-96 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-green-600 flex justify-center text-center">
            Your Review Has updated, Go to homepage to see
          </h2>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="reviewInput border border-purple-400 w-full sm:w-3/4 md:w-2/4 lg:w-2/4 px-2 py-2 my-1 rounded-md mx-auto"
          placeholder="Your Name"
          {...register("name")}
        />
        <input
          className="reviewInput border border-purple-400 w-full sm:w-3/4 md:w-2/4 lg:w-2/4 px-2 py-2 my-1 rounded-md mx-auto"
          placeholder="Image Link"
          {...register("img")}
        />
        <div className="flex justify-center">
          <textarea
            className="reviewTextArea border border-purple-400 w-full sm:w-3/4 md:w-2/4 lg:w-2/4 px-2 py-2 my-1 rounded-md"
            placeholder="Your Review"
            {...register("reviewDescription")}
          />
        </div>
        <input
          className="reviewInput border border-purple-400 w-full sm:w-3/4 md:w-2/4 lg:w-2/4 px-2 py-2 my-1 rounded-md mx-auto"
          placeholder="Rating (1-5) "
          type="number"
          {...register("rating", { min: 1, max: 5 })}
        />

        <div className="flex justify-center">
          <input
            type="submit"
            className="w-full sm:w-3/4 md:w-2/4 lg:w-2/4 mt-2 py-2 rounded-md bg-blue-600 text-gray-100"
          />
        </div>
      </form>
    </div>
  );
};

export default UserReview;
