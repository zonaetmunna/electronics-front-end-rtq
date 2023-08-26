import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/common/NavigationBar/DashboardNavbar";
import DashboardSidebar from "../components/common/Sidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <DashboardSidebar />
        <div className="flex-grow bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
