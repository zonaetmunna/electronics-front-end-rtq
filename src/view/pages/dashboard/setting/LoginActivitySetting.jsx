import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const LoginActivitySetting = () => {
  const loginActivities = useSelector((state) => state.loginActivity);
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Login Activity</h2>
      <div className="grid gap-4">
        {loginActivities.map((activity, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium">
                {activity.device} ({activity.location})
              </div>
              <div className="text-xs text-gray-500">
                {format(activity.timestamp, "MMM d, yyyy h:mm aa")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginActivitySetting;
