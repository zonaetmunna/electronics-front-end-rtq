import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo/brand-logo.png";
import { logout } from "../../../../features/auth/authSlice";

const Navbar = ({ onCartClick, searchQuery, setSearchQuery }) => {
  const {
    user: { firstName, email, role },
  } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/shop/${searchQuery}`);
  };
  // handle cart

  // handle signOut
  const handleSignOut = () => {
    dispatch(logout());
  };

  const handleBlur = () => {
    // Close the menu when the button loses focus
    setShowProfileMenu(false);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* logo part */}
          <div className="flex items-center rounded-full shadow-md p-2 bg-white hover:shadow-lg transition-all duration-300">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 rounded-full shadow-md"
              />
            </Link>
          </div>
          {/* search input part */}
          <div className="flex items-center justify-between">
            <form onSubmit={handleSearchSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* others */}
          <div className="flex items-center">
            {/* cart */}
            <Link to="/wishlist" className="mr-6 hover:text-gray-500 ">
              <div className="relative">
                <FaHeart size={22} className="text-blue-500 " />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>
            {/* wishlist */}
            <div onClick={onCartClick} className="mr-6">
              <div className="relative">
                <FaShoppingCart size={22} className="text-blue-500" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
            {/* login or dashboard or profile */}
            {email && role === "admin" && (
              <Link to="/dashboard" className="mr-6 hover:text-gray-500">
                <span className="text-gray-500">Dashboard</span>
              </Link>
            )}
            {email && role === "user" ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  onBlur={handleBlur}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                  <span>
                    <VscAccount size={20} />
                  </span>
                  <span className="ml-2">{firstName}</span>
                </button>
                {showProfileMenu && (
                  <div className="absolute top-12 right-0 px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow">
                    {/* Profile link */}
                    <Link
                      to="/profile"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      Profile
                    </Link>
                    {/* Sign Out button */}
                    <button
                      type="button"
                      className="w-full text-left text-red-600 py-1 hover:bg-gray-100"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 "
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
