import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../../hooks/useAuth";
import Pay from "../Pay/Pay";
import UserReview from "../Review/UserReview";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import Footer from "../../Shared/Footer/Footer";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AllProducts from "../AllProducts/AllProducts";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div className="bg-purple-200">
      <div className="bg-purple-200">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      DashBoard
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">DashBoards</h3>

                    <Link to="/">
                      <button className="block w-5/6 mx-auto p-4 my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                        Home
                      </button>
                    </Link>

                    <Link to={`${url}`}>
                      <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                        My Order
                      </button>
                    </Link>

                    {admin && (
                      <div>
                        <Link to={`${url}/allOrders`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                            Manage Orders
                          </button>
                        </Link>
                        <Link to={`${url}/allProducts`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                            Manage Products
                          </button>
                        </Link>
                        <Link to={`${url}/makeAdmin`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                            Make Admin
                          </button>
                        </Link>
                        <Link to={`${url}/addProduct`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                            Add a Product
                          </button>
                        </Link>
                      </div>
                    )}
                    {!admin && (
                      <div>
                        <Link to={`${url}/pay`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                            Payment
                          </button>
                        </Link>
                        <Link to={`${url}/userreview`}>
                          <button className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg">
                            Review
                          </button>
                        </Link>
                      </div>
                    )}

                    <button
                      onClick={logOut}
                      className="block w-5/6 mx-auto my-2 bg-green-400 text-gray-100 py-2 px-8 rounded-lg"
                    >
                      LogOut
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-4 pb-6 border-b border-gray-400">
              <h1 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-blue-600 font-mono">
                Welcome to DashBoard
              </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Menus</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* <FilterIcon className="w-5 h-5" aria-hidden="true" /> */}
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-6  gap-10">
                {/* Filters */}
                <div className="hidden lg:block">
                  <h3 className="sr-only">Nested Menus</h3>
                  <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                    <Link to="/">Home</Link>
                  </button>

                  <Link to={`${url}`}>
                    <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                      My Orders
                    </button>
                  </Link>

                  {admin && (
                    <div>
                      <Link to={`${url}/allOrders`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Manage Orders
                        </button>
                      </Link>
                      <Link to={`${url}/allProducts`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Manage Products
                        </button>
                      </Link>
                      <Link to={`${url}/makeAdmin`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Make Admin
                        </button>
                      </Link>
                      <Link to={`${url}/addProduct`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Add a Product
                        </button>
                      </Link>
                    </div>
                  )}
                  {!admin && (
                    <div>
                      <Link to={`${url}/pay`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Payment
                        </button>
                      </Link>
                      <Link to={`${url}/userreview`}>
                        <button className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8 md:px-4  rounded-lg">
                          Review
                        </button>
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={logOut}
                    className="block w-full my-2 bg-green-400 text-gray-100 py-2 px-8  md:px-4 rounded-lg"
                  >
                    LogOut
                  </button>
                </div>

                {/* Product grid */}
                <div className="lg:col-span-5 ">
                  {/* Replace with your content */}
                  <div className="border-4 py-8 lg:py-16 px-4 lg:px-8 border-gray-200 rounded-lg h-full lg:h-full">
                    <Switch>
                      <Route exact path={path}>
                        <MyOrder></MyOrder>
                      </Route>
                      <AdminRoute path={`${path}/allOrders`}>
                        <ManageAllOrders />
                      </AdminRoute>
                      <AdminRoute path={`${path}/allProducts`}>
                        <AllProducts />
                      </AdminRoute>
                      <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                      </AdminRoute>
                      <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                      </AdminRoute>
                      <Route path={`${path}/pay`}>
                        <Pay></Pay>
                      </Route>
                      <Route path={`${path}/userreview`}>
                        <UserReview></UserReview>
                      </Route>
                    </Switch>
                  </div>

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
