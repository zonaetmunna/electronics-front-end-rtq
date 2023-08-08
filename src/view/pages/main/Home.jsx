import React from "react";
import { useGetProductsQuery } from "../../../features/product/productApi";
import Slider from "../../components/common/slider/Slider";
import OfferBanner from "../../components/main/Banner/OfferBanner";
import ProductCard from "../../components/main/ProductCard/ProductCard";
import MainBanner from "../../components/main/home/MainBanner";
import MiddleBanner from "../../components/main/home/MiddleBanner";

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
        <Slider products={products} />
      </div>

      {/* products */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center text-yellow-500 text-2xl font-semibold mb-4">
          ALL Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading && <p className="text-center">Page loading...</p>}
          {isError && (
            <p className="text-center text-red-500">{error.message}</p>
          )}

          {products?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
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
