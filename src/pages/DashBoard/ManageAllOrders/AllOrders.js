import React from "react";

const AllOrders = ({ order, handleDeleteUser, handleUpdate }) => {
  const { _id, name, email, info, status } = order;
  const { productName, price, img } = info;

  return (
    <div className=" flex flex-col my-4 lg:flex-row md:flex-row orders items-center ">
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
      <div className="flex flex-col lg:flex-row md:flex-row items-center">
        <h2 className="mx-1">Status : {status}</h2>
        <div className="mx-1 my-2 bg-blue-600 text-white rounded-md lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-1">
          <button onClick={() => handleUpdate(_id)}>update</button>
        </div>
        <div className="className='mx-1'  bg-red-600 text-white px-4 py-2 rounded-lg">
          <button className="" onClick={() => handleDeleteUser(_id)}>
            Cencel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
