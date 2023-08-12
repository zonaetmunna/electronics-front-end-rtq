import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/Electronics-logo.png";

const Navbar = ({ onCartClick, searchQuery, setSearchQuery }) => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  console.log(email);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  // handle cart

  // handle signOut
  const handleSignOut = () => {
    // signOut(auth).then(() => {
    //   dispatch(logOut());
    // });
  };

  const handleBlur = () => {
    // Close the menu when the button loses focus
    setShowProfileMenu(false);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
            </Link>
          </div>
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-gray-500" />
            </span>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="block w-full bg-gray-100 rounded-md py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition-all duration-500"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="flex items-center">
            <Link to="/wishlist" className="mr-6 hover:text-gray-500">
              <div className="relative">
                <FaHeart size={20} className="text-yellow-500" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>
            <div onClick={onCartClick} className="mx-2">
              <div className="relative">
                <FaShoppingCart size={20} className="text-yellow-500" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
            {email && (
              <Link to="/dashboard" className="mr-6 hover:text-gray-500">
                <span className="text-gray-500">Dashboard</span>
              </Link>
            )}
            {email ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  onBlur={handleBlur}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-500"
                >
                  <span>
                    <VscAccount size={20} />
                  </span>
                  <span className="ml-2">Profile</span>
                </button>
                {showProfileMenu && (
                  <div className="absolute top-12 right-0 bg-white p-4 rounded shadow border">
                    <Link
                      to="profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
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
              <div>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-500"
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
