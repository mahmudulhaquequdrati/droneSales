import React from "react";
import { Link } from "react-router-dom";
import PlaceOrder from "../../PlaceOrder/PlaceOrder";

const SingleHomeProducts = ({ product }) => {
  // const handleBuyNow = () => {
  //   <PlaceOrder product={product}></PlaceOrder>;
  // };

  const { name, img, description } = product;
  const newDescription = description.slice(0, 100);
  return (
    <>
      <div>
        <img className="rounded h-64" src={img} alt="" />
        <div className=" py-2">
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-gray-500">{newDescription}</p>

          <button
            // onClick={handleBuyNow}
            className="font-semibold my-2 rounded px-4 py-2 bg-blue-700 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleHomeProducts;
