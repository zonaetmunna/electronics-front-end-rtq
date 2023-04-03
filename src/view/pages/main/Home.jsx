import React from "react";
import Slider from "../../components/common/slider/Slider";
import Sidebar from "../../components/main/sidebar/Sidebar";
import Products from "../../components/main/products/Products";
import MiddleBanner from "../../components/main/home/MiddleBanner";
import DiscountBanner from "../../components/common/DiscountBanner/DiscountBanner";
import { useGetProductsQuery } from "../../../features/product/productApi";
import ProductCard from "../../components/main/ProductCard/ProductCard";

const Home = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const products = data?.data;
  console.log(products);
  return (
    <div className="px-2">
      <div className="">{/* <Slider products={products} /> */}</div>
      <div className="grid grid-cols-12 p-3 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 rounded-lg">
          <div>
            <h3 className="text-center text-yellow-500 my-2">ALL Products</h3>
          </div>
          <div>
            {isLoading && <h1>Page loading...</h1>}
            {isError && <h1>{error}</h1>}
            <div className="grid grid-cols-4 gap-2">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* middle banner */}
      <div>
        <MiddleBanner />
      </div>
      <div>
        <DiscountBanner />
      </div>
    </div>
  );
};

export default Home;
//
