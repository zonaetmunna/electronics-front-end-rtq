import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import { FaUserCircle, FaBell, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BiMessageSquare } from "react-icons/bi";

const DashboardNavbar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New order received",
      time: "10 minutes ago",
      isRead: false,
    },
    {
      id: 2,
      message: "Product out of stock",
      time: "1 hour ago",
      isRead: true,
    },
    {
      id: 3,
      message: "New message from customer",
      time: "2 hours ago",
      isRead: false,
    },
  ]);

  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice",
      content: "Hey, how are you?",
    },
    {
      id: 2,
      sender: "Bob",
      content: "I am doing well. Thanks for asking!",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = messages.length + 1;
    const sender = "Me";
    const content = newMessage.trim();
    if (content) {
      setMessages([...messages, { id, sender, content }]);
      setNewMessage("");
    }
  };

  const {
    user: { email, role },
  } = useSelector((state) => state.auth);

  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  const markAsRead = (id) => {
    setNotifications((prevState) =>
      prevState.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* dashboard logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <span className="font-semibold text-xl ml-2">Dashboard</span>
            </Link>
          </div>
          {/*  */}
          <div className="flex justify-around items-center">
            {/* dark mode */}
            <div className="flex items-center">
              <button
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
                onClick={handleDarkMode}
              >
                {isDarkMode ? "Light mode" : "Dark mode"}
              </button>
            </div>
            {/* full screen */}
            <div className="flex items-center">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-500"
                onClick={handleFullscreen}
              >
                {isFullscreen ? (
                  <FiMinimize className="h-6 w-6" />
                ) : (
                  <FiMaximize className="h-6 w-6" />
                )}
              </button>
            </div>
            {/* message */}
            <div className="relative pl-3">
              <div className="relative">
                <button
                  className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => setShowMessages(!showMessages)}
                >
                  <BiMessageSquare className="w-6 h-6" />
                </button>
                {showMessages && (
                  <div className="absolute right-0 w-64 bg-white shadow-lg rounded-lg mt-2">
                    <div className="p-4">
                      <h2 className="font-bold text-lg mb-2">Messages</h2>
                      <ul>
                        {messages.map((message) => (
                          <li key={message.id} className="mb-2">
                            <p className="text-gray-700 font-medium">
                              {message.sender}
                            </p>
                            <p className="text-gray-600">{message.content}</p>
                          </li>
                        ))}
                      </ul>
                      <form onSubmit={handleSubmit} className="mt-4">
                        <textarea
                          className="w-full border rounded py-2 px-3 mb-2"
                          placeholder="Type your message here"
                          value={newMessage}
                          onChange={handleChange}
                        />
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* notification */}
            <div className="relative pl-3">
              <button
                className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={handleNotifications}
              >
                <FaBell className="w-6 h-6" />
              </button>
              <div
                className={`${
                  showNotifications ? "block" : "hidden"
                } origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="py-1" role="none">
                  {notifications.map((notification) => (
                    <Link
                      key={notification.id}
                      to="#"
                      className={`${
                        notification.isRead ? "text-gray-500" : "text-gray-900"
                      } block px-4 py-2 text-sm`}
                      role="menuitem"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{notification.message}</p>
                        <p className="text-xs text-gray-400">
                          {notification.time}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* user */}
            {email && (
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={handleUserDropdown}
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <FaUserCircle className="h-8 w-8 rounded-full text-gray-400" />
                  </button>
                </div>
                {showUserDropdown && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <p>{email}</p>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
