import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../features/product/productApi";
import ProductCard from "../../components/common/Card/ProductCard";

const SingleProduct = () => {
  // hooks router and redux
  const { id } = useParams();
  const dispatch = useDispatch();
  // redux toolkit state data
  const {
    user: { _id },
  } = useSelector((state) => state.auth);
  // redux toolkit query api call
  const { data, isError, error, isLoading } = useGetSingleProductQuery(id);
  console.log(data);
  const product = data?.data;
  const {
    data: productData,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useGetProductsQuery({
    category: product?.category.name,
    // brand: product?.brand.name,
  });
  const products = productData?.data;
  const [
    updatedProduct,
    { isError: isUpdateError, isSuccess: isUpdateSuccess },
  ] = useUpdateProductMutation();

  // state
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // handlers
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleReviewSubmit = () => {
    // You can dispatch an action to submit the review to your backend here
    const reviewData = {
      id: id,
      userId: _id,
      rating: rating,
      comment: comment,
    };
    console.log(reviewData);
    updatedProduct(reviewData);
    // Reset the input fields after submission
    setRating(5);
    setComment("");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div>
          {isLoading ? (
            <p>Loading product details...</p>
          ) : isError ? (
            <p>Error loading product details: {error.message}</p>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-around items-center">
              {/* image part */}
              <div>
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-64 h-64 object-contain"
                />
              </div>
              {/* product details part */}
              <div>
                <h1 className="text-xl font-semibold mb-2">{product?.name}</h1>
                <p className="text-gray-600 mb-4">${product?.price}</p>
                <p className="text-gray-600">{product?.description}</p>
                {/* add to cart */}
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
                {/* categories box with button */}
                <div></div>
                {/* brand box with button */}
                <div></div>
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* review product part with rating */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
          {/* Display existing reviews */}
          {product?.reviews && product.reviews.length > 0 ? (
            <div>
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  {/* ... Display existing review details ... */}
                  <div>
                    <p>{review.comment}</p>
                    <p>Rating: {review.rating}</p>
                    <p>user:{review.userId}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}

          {/* Input field for submitting review */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Submit a Review</h4>
            <div className="flex">
              <label className="mr-2">Rating:</label>
              <select value={rating} onChange={handleRatingChange}>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <textarea
              className="mt-2 p-2 border rounded w-full"
              placeholder="Write your review..."
              value={comment}
              onChange={handleCommentChange}
            />
            <button
              className="mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
        <hr />
        {/* related products */}
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-2">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
            {!isLoading && products?.length === 0 && (
              <p className="text-center">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
