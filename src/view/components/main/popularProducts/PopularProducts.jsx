import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const TopRated = ({ products }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Top Rated</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

const BestSelling = ({ products }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Best Selling</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Latest = ({ products }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Latest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

const PopularProducts = ({ products }) => {
  const [selectedTab, setSelectedTab] = useState("topRated");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  let tabContent;
  if (selectedTab === "topRated") {
    tabContent = <TopRated products={products} />;
  } else if (selectedTab === "bestSelling") {
    tabContent = <BestSelling products={products} />;
  } else if (selectedTab === "latest") {
    tabContent = <Latest products={products} />;
  }

  return (
    <div className="p-4">
      <div>
        <h2 className="text-lg font-semibold">Popular Products</h2>
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === "topRated"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("topRated")}
          >
            Top Rated
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === "bestSelling"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("bestSelling")}
          >
            Best Selling
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === "latest"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("latest")}
          >
            Latest
          </button>
        </div>
        <div>{tabContent}</div>
      </div>
    </div>
  );
};

export default PopularProducts;
