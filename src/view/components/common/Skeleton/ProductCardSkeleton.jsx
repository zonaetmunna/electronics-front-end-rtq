import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white w-full rounded-lg shadow-md">
      <div className="animate-pulse">
        <div className="w-full h-64 bg-gray-300 rounded-t-lg"></div>
        <div className="px-4 py-2">
          <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-yellow-500 rounded-full"></div>
              <div className="h-6 w-16 bg-black ml-1"></div>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-purple-500 rounded-full mr-4"></div>
              <div className="h-10 w-10 bg-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
