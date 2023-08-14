import React, { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { VscAccount, VscListOrdered, VscSettingsGear } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../features/auth/authSlice";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    user: { firstName, role, image },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(isOpen);
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div
      className={`user-sidebar mt-10  rounded-lg shadow-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-300 h-screen w-72  transform transition-transform ease-in-out duration-300 z-50`}
    >
      {/* <button className="toggle-button p-4" onClick={toggleSidebar}>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
      </button> */}
      <div className="sidebar-content p-4">
        <div className="user-info flex items-center p-4 border-b border-gray-300">
          <div className="avatar w-10 h-10 bg-gray-500 rounded-full mr-3">
            <img
              src={image}
              alt="logo"
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">{firstName}</h3>
        </div>
        <ul className="sidebar-menu py-4">
          <li className="sidebar-menu-item">
            <Link
              to="/profile"
              className="flex items-center py-2 px-4 hover:bg-gray-100"
            >
              <VscAccount size={20} className="mr-2" />
              <span>Your Profile</span>
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link
              to="orders"
              className="flex items-center py-2 px-4 hover:bg-gray-100"
            >
              <VscListOrdered size={20} className="mr-2" />
              <span className="mr-2">Your Orders</span>
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link
              to="settings"
              className="flex items-center py-2 px-4 hover:bg-gray-100"
            >
              <VscSettingsGear size={20} className="mr-2" />
              <span>Settings</span>
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <button
              onClick={handleSignOut}
              className="logout-button flex items-center py-2 px-4 hover:bg-gray-100"
            >
              <RiLogoutCircleRLine size={20} className="mr-2" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
