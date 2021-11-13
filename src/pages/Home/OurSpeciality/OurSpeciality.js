import React from "react";

const OurSpeciality = () => {
  return (
    <div className="my-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-4 lg:mx-16 md:mx-8 sm:mx-24 mx-8 ">
        <div className=" lg:w-full sm:w-full md:w-full mx-auto  rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className=" flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="https://i.ibb.co/yN7FmJj/photography.png"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">The Eagle's View</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              Get the perfect view that can not be seen from the ground! Now you
              can make Drone Photography special. You can get an incredible
              cinematic video for any needs to start your journey.
            </p>
            <a href="#products">
              <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
                Explore more
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-full sm:w-full md:w-full mx-auto rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className=" flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="https://i.ibb.co/khK9yKM/high-quality-1.png"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">4k Quality</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              We’ll create your perfect promo by providing the best quality
              video(4k) and professional drone videographers.travel, blog,
              advertisement, busines, almost everything is possible!
            </p>
            <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
              Explore more
            </button>
          </div>
        </div>
        <div className=" lg:w-full sm:w-full md:w-full mx-auto rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className="flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="https://i.ibb.co/Nr7VsrV/drone-1.png"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">Best Photography</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              Show your business from a new perspective. We’ll capture best
              photos to use for everything your needs for. Our hight resulation
              photos are unlike any other pictures.
            </p>
            <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
