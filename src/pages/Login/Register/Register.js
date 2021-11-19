import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import useAuth from "../../../hooks/useAuth";

import loading from "../../../images/loading.svg";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({});
  const { user, error, registerUser, isLoading } = useAuth();
  const history = useHistory();

  const handleRegistration = (e) => {
    if (registrationData.password !== registrationData.confirmPassword) {
      alert("password didn't match");
      return;
    }
    registerUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      history
    );
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registrationData };
    newRegisterData[field] = value;
    setRegistrationData(newRegisterData);
  };

  return (
    <div className="bg-purple-200 min-h-screen flex items-center justify-center pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-2">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/3180/3180151.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-700">
            Register your account !!
          </h2>
        </div>
        {isLoading && (
          <div className="w-7 mx-auto">
            <img src={loading} alt="" />
          </div>
        )}
        {!isLoading && (
          <form onSubmit={handleRegistration} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  onBlur={handleOnBlur}
                  required
                  className="appearance-none rounded relative block w-3/4 mx-auto px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  onBlur={handleOnBlur}
                  type="email"
                  required
                  className="appearance-none rounded relative block w-3/4 mx-auto px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onBlur={handleOnBlur}
                  type="password"
                  required
                  className="appearance-none rounded relative block w-3/4 mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  onBlur={handleOnBlur}
                  type="password"
                  required
                  className="appearance-none mt-2 rounded relative block w-3/4 mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-3/4 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Register
              </button>
              <div className="w-56 mx-auto text-blue-700 mt-4">
                <Link to="/login">
                  <button>Already Registered? Login Now</button>
                </Link>
              </div>
            </div>
          </form>
        )}
        {user?.email && (
          <div>
            <h2 className="text-green-600 text-center">
              account created successfully
            </h2>
          </div>
        )}
        {error && (
          <div>
            <h2 className="text-red-600 text-center">{error}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
