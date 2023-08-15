import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";
import { useGetSingleProductQuery } from "../../../features/product/productApi";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isError, error, isLoading } = useGetSingleProductQuery(id);
  console.log(data);
  const product = data?.data;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <p>Loading product details...</p>
        ) : isError ? (
          <p>Error loading product details: {error.message}</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-around items-center">
            <div>
              <img
                src={product?.image}
                alt={product?.name}
                className="w-64 h-64 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">{product?.name}</h1>
              <p className="text-gray-600 mb-4">${product?.price}</p>
              <p className="text-gray-600">{product?.description}</p>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                >
                  Add to Cart
                </button>
                <p className="text-gray-600">
                  Available Quantity: {product?.quantity}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
