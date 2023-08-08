import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CartModal from "../components/common/cartModal/CartModal";
import FooterSeconed from "../components/main/footer/FooterSeconed";
import NavigationBar from "../components/main/header/NavigationBar";

const Main = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartModalClose = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <NavigationBar onCartClick={handleCartClick} />
      <Outlet />
      <FooterSeconed />
      {isCartOpen && <CartModal onClose={handleCartModalClose} />}
    </>
  );
};

export default Main;
