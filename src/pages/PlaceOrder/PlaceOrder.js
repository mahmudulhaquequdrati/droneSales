import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [product, setProduct] = useState({});
  const { name, img, price } = product;
  const { user } = useAuth();
  const { displayName, email } = user;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.info = {
      productName: name,
      price: price,
      img: img,
    };
    reset();
    // send data to server
    fetch(`https://drone-sales-2021.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      });
  };

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://drone-sales-2021.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div>
      <Navigation></Navigation>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mx-8 my-12 ">
        <div className="text-center rounded-lg pb-4">
          <h3 className="text-center font-semibold text-purple-600 text-2xl">
            {name}
          </h3>
          <div className="  py-4 h-96 mx-auto">
            <img
              className="h-full w-11/12 rounded-lg mx-auto"
              src={img}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl text-indigo-600">${price}</p>
        </div>
        <div className=" py-24  flex ">
          <form
            className="flex flex-col justify-center mx-auto w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            {orderSuccess && (
              <div className="flex justify-center w-96 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-green-600  text-center">
                  Order Placed Successfully. Click my order to see
                </h2>
              </div>
            )}
            <input
              className="border w-full customInput"
              placeholder="Your Name"
              defaultValue={displayName}
              {...register("name", { required: true })}
            />
            <input
              className="border  customInput"
              placeholder="Your Email"
              defaultValue={email}
              {...register("email")}
            />
            <textarea
              className="border w-full customTextArea"
              placeholder="Address (Ex- Banani, Dhaka)"
              {...register("address")}
            />
            <input
              defaultValue="pending"
              className="hidden"
              {...register("status")}
            />

            <button className="w-28 text-gray-50 rounded-lg mt-2 p-2 bg-purple-800 ">
              Order Now
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
