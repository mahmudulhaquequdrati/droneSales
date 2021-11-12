import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://drone-sales-2021.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`https://drone-sales-2021.herokuapp.com/products${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = products.filter(
              (order) => order._id !== id
            );
            setProducts(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-blue-600 font-semibold">
        Here is All Products Info
      </h2>
      {products.map((product) => (
        <ProductsList
          key={product._id}
          handleDeleteUser={handleDeleteUser}
          product={product}
        ></ProductsList>
      ))}
    </div>
  );
};

export default AllProducts;
