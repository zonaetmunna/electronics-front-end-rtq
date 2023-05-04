import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const NavSeconed = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-3 px-4 shadow-md">
      <div className="w-48">
        <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Select language"
        />
      </div>

      {/*  */}
      <div className=" ml-3">
        <ul className="flex">
          <li className="mr-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="contact"
              className="text-gray-800 hover:text-gray-600 transition duration-200"
            >
              Contact
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="privacy-policy"
              className="text-gray-800 hover:text-gray-600 transition duration-200"
            >
              Privacy-Policy
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="terms"
              className="text-gray-800 hover:text-gray-600 transition duration-200"
            >
              Terms&Condition
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="blog"
              className="text-gray-800 hover:text-gray-600 transition duration-200"
            >
              Our-Blog
            </Link>
          </li>
        </ul>
      </div>
      {/*  */}
      <div>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex justify-between items-center font-bold"
        >
          <span className="mr-2">become a Seller</span>
          <span>
            <MdOutlineKeyboardArrowRight size={20} />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavSeconed;
