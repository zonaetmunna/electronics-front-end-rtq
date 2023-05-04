import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../../features/wishlist/wishListSlice";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist({ productId }));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((productId) => (
            <li key={productId} className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">Product {productId}</h2>
                <button
                  onClick={() => handleRemove(productId)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Remove
                </button>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishList;
