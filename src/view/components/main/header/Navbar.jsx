import { signOut } from "firebase/auth";
import React from "react";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/Electronics-logo.png";
import { logOut } from "../../../../features/auth/authSlice";
import auth from "../../../../firebase/firebase.config";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(email);

  // handle signOut
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* logo link */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
            </Link>
          </div>
          {/* Search */}
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Search products"
              className="block w-full bg-gray-100 rounded-md py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            {/* wishlist */}
            <Link to="/wishlist" className="mr-6 hover:text-gray-500">
              <FaHeart className="text-gray-500" />
            </Link>
            {/* Cart */}
            <Link to="/cart" className="mr-6 hover:text-gray-500">
              <FaShoppingCart className="text-gray-500" />
            </Link>
            {/* Dashboard */}
            {email && (
              <Link to="/dashboard" className="mr-6 hover:text-gray-500">
                <span className="text-gray-500">Dashboard</span>
              </Link>
            )}
            {/* login and signUp or user */}
            {email ? (
              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  onClick={handleSignOut}
                >
                  <span>
                    <VscAccount size={20} />
                  </span>
                  <span className="ml-2">Sign Out</span>
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="ml-2">Log In</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
