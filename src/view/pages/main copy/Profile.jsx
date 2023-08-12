import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../components/common/sidebar/UserSidebar";
import ProfileInformation from "../main/ProfileInformation";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <UserSidebar />

      <div className="flex-1 p-10">
        {/* Your profile content goes here */}
        <ProfileInformation />
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
