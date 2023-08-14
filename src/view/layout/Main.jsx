import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterSeconed from "../components/common/Footer/FooterSeconed";
import CartModal from "../components/common/Modal/CartModal";
import NavigationBar from "../components/common/NavigationBar/NavigationBar";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartModalClose = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <NavigationBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={handleCartClick}
      />
      <Outlet />
      <FooterSeconed />
      {isCartOpen && <CartModal onClose={handleCartModalClose} />}
    </>
  );
};

export default Main;
