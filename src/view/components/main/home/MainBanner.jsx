import React from "react";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto flex px-6 py-16 justify-center items-center relative z-10">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-dark">
            Welcome to our online store
          </h1>
          <p className="mb-8 leading-relaxed text-dark">
            We offer a wide selection of the latest fashion trends at the best
            prices online. Browse our collections and start shopping today!
          </p>
          <div className="flex justify-center">
            <Link
              to="shop"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/qCZrXGR/young-woman-enjoying-listening-music.jpg"
          />
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-600 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default MainBanner;
