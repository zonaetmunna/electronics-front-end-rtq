// import
import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo/brand-logo.png";
import { logout } from "../../../../features/auth/authSlice";

const Navbar = ({ onCartClick, searchQuery, setSearchQuery }) => {
  // redux toolkit state for auth,cart,wishlist state with useSelector
  const {
    user: { firstName, email, role },
  } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  //  hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state for show profile menu
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // handle search
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/shop/${searchQuery}`);
  };

  // handle signOut
  const handleSignOut = () => {
    dispatch(logout());
  };

  // handle blur
  const handleBlur = () => {
    // Close the menu when the button loses focus
    setShowProfileMenu(false);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              <img src={logo} alt="Logo" className="h-12 w-12" />
            </Link>
          </div>

          {/* Search Input */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full sm:w-auto mt-4 sm:mt-0"
          >
            <div className="relative">
              <input
                type="search"
                id="default-search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="block w-full p-2 sm:p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 mt-2 mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-800 hover:text-gray-600">
              <div className="relative">
                <FaHeart size={22} className="text-blue-500" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>

            {/* Cart */}
            <div
              onClick={onCartClick}
              className="text-gray-800 hover:text-gray-600"
            >
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
            {email && role === "admin" ? (
              <Link to="/dashboard" className="mr-6 hover:text-gray-500">
                <span className="text-gray-500">Dashboard</span>
              </Link>
            ) : (
              <Link to="/login" className="mr-6 hover:text-gray-500">
                <span className="text-gray-500">Login</span>
              </Link>
            )}
            {email && role === "user" && role === "admin" ? (
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
                      to="profile"
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
// export
export default Navbar;
