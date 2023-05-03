import React from "react";

const Sidebar = ({ dispatch, filters }) => {
  return (
    <div className="bg-yellow-500 px-3 py-4 rounded">
      <div className="text-black text-center font-bold ">
        <h3>Filter</h3>
      </div>
      <div className="">
        <div>
          <button
            onClick={() => dispatch(toggleStock())}
            className={`border px-3 py-2 rounded-full font-semibold ${
              stock ? activeClass : null
            } `}
          >
            In Stock
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(toggleBrand("amd"))}
            className={`border px-3 py-2 rounded-full font-semibold ${
              brands.includes("amd") ? activeClass : null
            }`}
          >
            AMD
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(toggleBrand("intel"))}
            className={`border px-3 py-2 rounded-full font-semibold ${
              brands.includes("intel") ? activeClass : null
            }`}
          >
            Intel
          </button>
        </div>
        <div>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Headphone
          </button>
        </div>
        <div>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Keyboard
          </button>
        </div>
        <div>
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Mouse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
