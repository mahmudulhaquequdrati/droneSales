import React from "react";

const SingleExplore = ({ product }) => {
  const { name, img, description } = product;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={img}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="px-8 py-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>

          <p className="mt-2 text-gray-500">{description}</p>
          <button className="bg-purple-900 text-md font-semibold text-white mt-2 px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleExplore;
