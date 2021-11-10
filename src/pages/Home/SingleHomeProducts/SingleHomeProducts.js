import React from "react";

const SingleHomeProducts = ({ product }) => {
  const { name, img, description } = product;
  const newDescription = description.slice(0, 100);
  return (
    <div className="  ">
      <img className="rounded" src={img} alt="" />
      <div className="px-6 py-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-500">{newDescription}</p>
        <button className="font-semibold my-2 rounded px-4 py-2 bg-blue-700 text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleHomeProducts;
