import React from "react";

const ProductsList = ({ product, handleDeleteUser }) => {
  const { _id, name, img, price } = product;

  return (
    <div className="py-2 flex flex-col  lg:flex-row md:flex-row orders items-center ">
      <div className=" flex  items-center py-2">
        <img className="h-28 w-32 rounded-lg" src={img} alt="" />
        <div className="px-4">
          <h2>Product : {name}</h2>
          <p>Price: ${price}</p>
        </div>
      </div>
      <div className=" my-4 bg-red-600 text-white px-4 py-2 rounded-lg">
        <button onClick={() => handleDeleteUser(_id)}>Delete Product</button>
      </div>
    </div>
  );
};

export default ProductsList;
