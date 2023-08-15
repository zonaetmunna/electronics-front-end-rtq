import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/category/categoryApi";
import FooterSeconed from "../components/common/Footer/FooterSeconed";
import CartModal from "../components/common/Modal/CartModal";
import NavigationBar from "../components/common/NavigationBar/NavigationBar";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data } = useGetCategoriesQuery({});
  const categories = data;
  console.log(categories);
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
        categories={categories}
      />
      <Outlet />
      <FooterSeconed />
      {isCartOpen && <CartModal onClose={handleCartModalClose} />}
    </>
  );
};

export default Main;
