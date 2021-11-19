import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loading from "../../../images/loading.svg";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, error, googleSignIn } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    googleSignIn(location, history);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
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
            Sign in to your account !!
          </h2>
        </div>
        {isLoading && (
          <div className="w-7 mx-auto">
            <img src={loading} alt="" />
          </div>
        )}
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md  -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                onBlur={handleOnBlur}
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
                type="password"
                onBlur={handleOnBlur}
                required
                className="appearance-none rounded relative block w-3/4 mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
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
              Sign in
            </button>

            <div className="w-48 mx-auto text-blue-700 mt-1">
              <Link to="/register">
                <button>New Here? Register Today</button>
              </Link>
            </div>
          </div>
        </form>
        <div className="text-center mt-2">
          <h2>or SignIn with</h2>
          <button
            onClick={handleGoogleSignIn}
            className="rounded-md border border-gray-400 px-4 py-1 hover:bg-red-700 hover:text-white mt-2 googleSignInBtn"
          >
            <i className="googleIcon fab fa-google-plus-g text-red-600  h-5 my-auto"></i>{" "}
            Google
          </button>
        </div>
        {user?.email && (
          <div>
            <h2 className="text-green-600 text-center">
              You have successfully logged in
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

export default Login;
