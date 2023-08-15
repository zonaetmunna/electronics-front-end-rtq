import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { setSelectedCategory } from "../../../../features/filter/filterSlice";

const NavSeconed = ({ categories }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Get the dispatch function

  console.log(categories);
  const categoryOptions = categories?.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  const handleSelectChange = (selectedOption) => {
    const selectedCategory = selectedOption.value; // Use the selected category's value
    dispatch(setSelectedCategory(selectedCategory)); // Dispatch the Redux action
    navigate(`/shop/${selectedCategory}`);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-3 px-4 shadow-md">
      <Select options={categoryOptions} onChange={handleSelectChange} />

      <div className=" ml-3">
        <ul className="flex">
          <li className="mr-6">
            <Link
              to="/"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/" ? "border-b-2 border-black" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/shop"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/shop" ? "border-b-2 border-black" : ""
              }`}
            >
              Shop
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="contact"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/contact"
                  ? "border-b-2 border-black"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="privacy-policy"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/privacy-policy"
                  ? "border-b-2 border-black"
                  : ""
              }`}
            >
              Privacy-Policy
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="terms"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/terms" ? "border-b-2 border-black" : ""
              }`}
            >
              Terms&Condition
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="blog"
              className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
                location.pathname === "/blog" ? "border-b-2 border-black" : ""
              }`}
            >
              Our-Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavSeconed;
