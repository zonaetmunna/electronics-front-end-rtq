import React, { useState } from "react";

const NotificationSetting = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });
  const handleToggleNotification = (type) => {
    setNotifications((prevState) => {
      return {
        ...prevState,
        [type]: !prevState[type],
      };
    });
  };
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Notification Settings</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">Email Notifications</div>
          <div>
            <button
              onClick={() => handleToggleNotification("email")}
              className={`bg-gray-300 text-white rounded-full px-3 py-1 ${
                notifications.email ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {notifications.email ? "On" : "Off"}
            </button>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          Get notified by email when there is a new update or feature added.
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">Push Notifications</div>
          <div>
            <button
              onClick={() => handleToggleNotification("push")}
              className={`bg-gray-300 text-white rounded-full px-3 py-1 ${
                notifications.push ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {notifications.push ? "On" : "Off"}
            </button>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          Get notified on your phone when there is a new update or feature
          added.
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">SMS Notifications</div>
          <div>
            <button
              onClick={() => handleToggleNotification("sms")}
              className={`bg-gray-300 text-white rounded-full px-3 py-1 ${
                notifications.sms ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {notifications.sms ? "On" : "Off"}
            </button>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          Get notified by SMS when there is a new update or feature added.
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
