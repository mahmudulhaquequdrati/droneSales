import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div className="">
      {orders.map((order) => (
        <SingleOrder
          key={order._id}
          handleDeleteUser={handleDeleteUser}
          order={order}
        ></SingleOrder>
      ))}
    </div>
  );
};

export default MyOrder;
