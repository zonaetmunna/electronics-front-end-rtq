import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const SidebarThree = () => {
  const [productCollapsed, setProductCollapsed] = useState(false);

  const toggleProduct = () => {
    setProductCollapsed(!productCollapsed);
  };
  return (
    <div className="h-screen w-64 py-4 px-2 bg-gray-800 text-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <button className="text-gray-400 hover:text-gray-300 focus:outline-none">
          <FiShoppingBag className="w-6 h-6" />
        </button>
      </div>
      <ul>
        <li className="mb-4">
          <Link
            to="/dashboard/products"
            className="flex items-center text-sm font-medium"
          >
            <FiShoppingBag className="w-6 h-6 mr-2" />
            Products
            {productCollapsed ? (
              <FiChevronUp
                className="w-5 h-5 ml-auto"
                onClick={toggleProduct}
              />
            ) : (
              <FiChevronDown
                className="w-5 h-5 ml-auto"
                onClick={toggleProduct}
              />
            )}
          </Link>
          {productCollapsed && (
            <ul className="pl-4 mt-2">
              <li>
                <Link
                  to="/dashboard/products"
                  className="flex items-center text-sm font-medium"
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/products/add"
                  className="flex items-center text-sm font-medium"
                >
                  Add Product
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SidebarThree;
