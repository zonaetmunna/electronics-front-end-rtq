import React from "react";
import Navbar from "./Navbar";
import NavSeconed from "./NavSeconed";

const NavigationBar = () => {
  return (
    <div className="shadow-md">
      <Navbar />
      <NavSeconed />
    </div>
  );
};

export default NavigationBar;
