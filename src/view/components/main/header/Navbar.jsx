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
    <div className="bg-gray-900 text-white py-2 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo link */}
        <div className="border rounded">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
          </Link>
        </div>
        {/* Search */}
        <form className="flex items-center mx-4">
          <input
            type="text"
            placeholder="Search products"
            className="bg-gray-800 rounded-l-full py-2 px-4 border border-gray-700 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
          />
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 rounded-r-full py-2 px-4"
          >
            <FaSearch />
          </button>
        </form>
        <div className="flex items-center">
          {/* wishlist */}
          <Link to="/wishlist" className="mr-6 hover:text-gray-500">
            <FaHeart />
          </Link>
          {/* Cart */}
          <Link to="/cart" className="mr-6 hover:text-gray-500">
            <FaShoppingCart />
          </Link>

          {/* Dashboard */}
          {email && (
            <Link to="/dashboard" className="mr-6 hover:text-gray-500">
              Dashboard
            </Link>
          )}
          {/* login and signUp or user */}
          {email ? (
            <div>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleSignOut}
              >
                <span>
                  <VscAccount size={20} />
                </span>
              </button>
            </div>
          ) : (
            <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
