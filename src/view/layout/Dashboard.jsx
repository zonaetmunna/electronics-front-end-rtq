import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import SidebarTwo from "../components/dashboard/SidebarTwo";
import SidebarThree from "../components/dashboard/SidebarThree";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex h-screen">
        <SidebarTwo />
        <div className="flex-grow bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
