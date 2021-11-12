import React from "react";
import { Link } from "react-router-dom";

const SingleExplore = ({ product }) => {
  const { _id, name, img, description, price } = product;

  return (
    <div className=" h-11/12 lg:h-auto  mx-auto md:h-auto bg-white rounded-xl shadow-md overflow-hidden ">
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
          <h6 className="text-lg font-medium text-blue-600 my-2">
            Price :${price}
          </h6>
          <Link to={`placeorder/${_id}`}>
            <button className="bg-purple-900 text-md font-semibold text-white mt-2 px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleExplore;
