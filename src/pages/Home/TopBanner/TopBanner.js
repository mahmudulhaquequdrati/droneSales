import React from "react";

const TopBanner = () => {
  return (
    <div className="relative bg-purple-100 overflow-hidden pt-2">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="uppercase  lg:text-5xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              drone that changes the game
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Best for photography and get mindblowing travel experience form
              our drones. we are currently running some research.
            </p>
          </div>
          <div>
            <div className="mt-6">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-56 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://i.ibb.co/CMmPZGL/pexels-screen-post-7582145.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1615178681722-dba718265c87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1562868114-b92695b6bdd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-56 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1618147913400-e50e2f771942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#products"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Explore Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
