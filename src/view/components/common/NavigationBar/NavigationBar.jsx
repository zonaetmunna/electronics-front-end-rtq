import React from "react";
import MiniNavbar from "./MiniNavbar";
import NavSeconed from "./NavSeconed";
import Navbar from "./Navbar";

const NavigationBar = ({ onCartClick, searchQuery, setSearchQuery }) => {
  return (
    <div className="shadow-md">
      <MiniNavbar />
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={onCartClick}
      />
      <NavSeconed />
    </div>
  );
};

export default NavigationBar;
