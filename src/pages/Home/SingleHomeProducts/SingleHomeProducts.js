import React from "react";
import { Link } from "react-router-dom";

const SingleHomeProducts = ({ product }) => {
  const { _id, name, img, description, price } = product;
  const newDescription = description.slice(0, 100);
  return (
    <>
      <div>
        <img className="rounded h-64" src={img} alt="" />
        <div className=" py-2">
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-gray-500">{newDescription}</p>
          <h6 className="text-lg font-medium text-blue-600 my-2">
            Price :${price}
          </h6>

          <Link to={`/placeorder/${_id}`}>
            <button className="font-semibold my-2 rounded px-4 py-2 bg-blue-700 text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleHomeProducts;
