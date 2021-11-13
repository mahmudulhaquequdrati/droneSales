import React from "react";
import "./SingleOrder.css";

const SingleOrder = ({ order, handleDeleteUser }) => {
  const { _id, name, email, info, status } = order;
  const { productName, price, img } = info;
  return (
    <div className="py-2 flex flex-col lg:flex-row md:flex-row  orders items-center ">
      <div className=" flex items-center py-2">
        <img className="h-28 w-32 rounded-lg" src={img} alt="" />
        <div className="px-4">
          <h3 className="text-xl font-mono font-semibold">Order Info</h3>
          <h2>Product : {productName}</h2>
          <p>Price: ${price}</p>

          <div>
            <p>Receiver : {name}</p>
            <p>Email : {email}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center my-4 lg:my-0 md:my-0 sm:my-4">
        <h2 className="text-xs sm:text-xs md:text-base lg:text-base">
          Status : {status}
        </h2>
        <div className="ml-2 text-xs sm:text-xs lg:text-base md:text-base bg-red-600 text-white lg:px-4 lg:py-2 md:px-4  px-2 py-1 rounded-lg">
          <button onClick={() => handleDeleteUser(_id)}>Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
