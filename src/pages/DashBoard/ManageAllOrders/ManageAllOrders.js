import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AllOrders from "./AllOrders";
import loading from "../../../images/loading.svg";

const ManageAllOrders = () => {
  const { isLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://drone-sales-2021.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`https://drone-sales-2021.herokuapp.com/orders/${id}`, {
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
    <div>
      {isLoading && (
        <div className="w-7 mx-auto">
          <img src={loading} alt="" />
        </div>
      )}
      {orders.map((order) => (
        <AllOrders
          key={order._id}
          handleDeleteUser={handleDeleteUser}
          order={order}
        ></AllOrders>
      ))}
    </div>
  );
};

export default ManageAllOrders;
