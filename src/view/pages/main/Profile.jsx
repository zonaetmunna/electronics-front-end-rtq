import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../components/common/sidebar/UserSidebar";

const Profile = () => {
  return (
    <div className="flex  bg-gray-100">
      <UserSidebar />

      <div className="flex-1 p-10">
        {/* Your profile content goes here */}

        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
