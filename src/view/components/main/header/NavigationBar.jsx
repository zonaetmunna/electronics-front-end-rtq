import React from "react";
import MiniNavbar from "./MiniNavbar";
import NavSeconed from "./NavSeconed";
import Navbar from "./Navbar";

const NavigationBar = ({ onCartClick }) => {
  return (
    <div className="shadow-md">
      <MiniNavbar />
      <Navbar onCartClick={onCartClick} />
      <NavSeconed />
    </div>
  );
};

export default NavigationBar;
