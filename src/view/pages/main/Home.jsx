import React from "react";
import { useGetProductsQuery } from "../../../features/product/productApi";
import ProductCard from "../../components/common/Card/ProductCard";
import Slider from "../../components/common/DSlider/Slider";
import OfferBanner from "../../components/main/Banner/OfferBanner";
import MainBanner from "../../components/main/home/MainBanner";
import MiddleBanner from "../../components/main/home/MiddleBanner";
import PopularProducts from "../../components/main/popularProducts/PopularProducts";

const Home = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery({});
  const products = data?.data;
  console.log(products);

  return (
    <div className="bg-gray-100">
      {/* mini banner */}
      <MainBanner />

      {/* slider */}
      <div className="p-5 bg-gray-100">
        {isLoading ? (
          <p className="text-center">Page loading...</p>
        ) : isError ? (
          <p className="text-center text-red-500">{error.message}</p>
        ) : (
          <Slider products={products} />
        )}
      </div>

      {/* popular products */}
      {products && (
        <div>
          <PopularProducts products={products} />
        </div>
      )}

      {/* products */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center text-yellow-500 text-2xl font-semibold mb-4">
          ALL Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
          {!isLoading && products?.length === 0 && (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>

      {/* middle banner */}
      <MiddleBanner />

      {/* offer banner */}
      <OfferBanner />
    </div>
  );
};

export default Home;
