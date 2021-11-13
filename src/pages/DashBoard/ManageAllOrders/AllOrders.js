import React from "react";

const AllOrders = ({ order, handleDeleteUser, handleUpdate }) => {
  const { _id, name, email, info, status } = order;
  const { productName, price, img } = info;

  return (
    <div className=" flex orders items-center ">
      <div className=" flex pb-4 items-center">
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
      <div>Status : {status}</div>
      <div>
        <button onClick={() => handleUpdate(_id)}>update</button>
      </div>
      <div className="mr-4   bg-red-600 text-white px-4 py-2 rounded-lg">
        <button onClick={() => handleDeleteUser(_id)}>Cencel Order</button>
      </div>
    </div>
  );
};

export default AllOrders;
