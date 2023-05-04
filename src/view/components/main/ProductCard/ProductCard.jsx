import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaDollarSign, FaHeart } from "react-icons/fa";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { addToCart } from "../../../../features/cart/cartSlice";
import { addToWishlist } from "../../../../features/wishlist/wishListSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // handle add product cart
  const handleAddProductCart = () => {
    dispatch(addToCart(product));
  };
  // handle add product wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:bg-gray-200">
      {pathname.includes("/") && (
        <div>
          {/* image */}
          <div className="w-auto px-2 py-2">
            <img
              className="w-full rounded-lg"
              src={product?.image}
              alt="computer parts"
            />
          </div>
          <div className="px-3 py-2">
            <Link to={`/product/${product?._id}`}>
              <h5 className="text-md font-semibold tracking-tight text-black hover:text-lime-400">
                {product?.model}
              </h5>
            </Link>
            {/* rating */}
            <div className="px-1 py-1">
              <Rating
                initialRating={product?.rating}
                readonly
                emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                fullSymbol={<AiFillStar className="text-yellow-500" />}
              />
            </div>
            {/* price text*/}
            <div className="px-1 py-1">
              <div className="flex justify-start items-center">
                <span>
                  <FaDollarSign className="text-yellow-500" size={20} />
                </span>{" "}
                <span className="text-lg font-bold text-black">
                  {product?.price}
                </span>
              </div>
            </div>
            {/* add to cart button */}
            <div className="flex items-center justify-between px-1 py-1">
              <button
                onClick={handleAddProductCart}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mr-4"
              >
                {" "}
                <span>
                  <BsCart3 size={20} />
                </span>{" "}
              </button>
              {/* add to wish list */}
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                onClick={handleAddToWishlist}
              >
                <FaHeart />
              </button>
            </div>

            {/* remove to cart button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
