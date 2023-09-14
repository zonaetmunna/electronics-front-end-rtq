import React from "react";
import MiniNavbar from "./MiniNavbar";
import NavSecond from "./NavSecond";
import Navbar from "./Navbar";

const NavigationBar = ({
  onCartClick,
  searchQuery,
  setSearchQuery,
  categories,
}) => {
  return (
    <div className="shadow-md">
      <MiniNavbar />
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={onCartClick}
      />
      <NavSecond categories={categories} />
    </div>
  );
};

export default NavigationBar;
