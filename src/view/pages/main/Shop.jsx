import React from "react";
import Products from "../../components/main/products/Products";
import { useGetProductsQuery } from "../../../features/product/productApi";

const Shop = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const products = data;
  console.log(products);
  return (
    <div>
      <div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Shop;
