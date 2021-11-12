import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PlaceOrder from "../../PlaceOrder/PlaceOrder";
import SingleHomeProducts from "../SingleHomeProducts/SingleHomeProducts";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://drone-sales-2021.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mb-8" id="products">
      <h2 className="font-semibold text-center text-3xl text-blue-600">
        Our Top sales{" "}
      </h2>
      <p className="font-light text-lg text-center ">
        Get the letest products for better quality and growing business
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 mx-24 mt-16 mb-4 ">
        {products.slice(0, 6).map((product) => (
          <SingleHomeProducts
            key={product._id}
            product={product}
          ></SingleHomeProducts>
        ))}
      </div>
      <Link to="/explore">
        <button className="flex   mx-auto bg-purple-900 text-md font-semibold text-white mt-6 mb-2 px-4 py-2 rounded-lg">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default HomeProducts;
