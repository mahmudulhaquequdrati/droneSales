import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import SingleExplore from "./SingleExplore/SingleExplore";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://drone-sales-2021.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mx-8 my-16 ">
        {products.map((product) => (
          <SingleExplore key={product._id} product={product}></SingleExplore>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
