import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Explore", to: "/explore" },
  { name: "About", to: "/about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Disclosure as="nav" className="bg-purple-400 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:pl-2 md:pr-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex flex-1 justify-center sm:items-stretch sm:justify-center lg:justify-start md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/3180/3180151.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/3180/3180151.png"
                    alt="Workflow"
                  />
                  <span className="text-lg  text-white ml-2 logo-text">
                    Dream Drone
                  </span>
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-white hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* should be dynamic */}
                    {user?.email && (
                      <Link
                        className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/dashboard"
                      >
                        DashBoard
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                {/* add some nav for user info like username nad many more */}

                {/* Profile dropdown */}

                {/* try later */}
                <div className="hidden lg:block md:block text-gray-100 pr-1">
                  <span>
                    {user?.email && (
                      <div>
                        <h2 className="text-sm">{user.displayName}</h2>
                      </div>
                    )}
                  </span>
                </div>
                {/* should be dynamic */}
                {user?.email ? (
                  <button
                    onClick={logOut}
                    className="text-white hover:bg-gray-700 hover:text-white font-bold py-1 lg:py-2 lg:px-4 px-2 rounded-lg "
                  >
                    LogOut
                  </button>
                ) : (
                  <div>
                    <Link to="/login">
                      <button className="text-white hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded-lg ">
                        LogIn
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-white hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* should be dynamic */}
              {user?.email && (
                <Link
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium block"
                  to="/dashboard"
                >
                  DashBoard
                </Link>
              )}
              {user?.email && (
                <div className="text-white hover:bg-gray-700 hover:text-white px-3 pb-2 pt-1 rounded-md text-sm font-medium block">
                  <span>Hello : </span>
                  {user.displayName}
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
