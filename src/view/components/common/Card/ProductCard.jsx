import React from "react";
import { toast } from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";
import { FaDollarSign, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../../../features/cart/cartSlice";
import { addToWishlist } from "../../../../features/wishlist/wishListSlice";

const ProductCard = ({ product }) => {
  // hooks
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // handle add product cart
  const handleAddProductCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart"); // Show success toast
  };

  // handle add product wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    toast.success("Product added to wishlist"); // Show success toast
  };

  return (
    <div className="bg-white w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {pathname.includes("/") && (
        <div>
          <div className="relative">
            <img
              className="w-full h-64 rounded-t-lg object-cover"
              src={product?.image}
              alt="computer parts"
            />
            <div className="absolute bottom-0 right-0 bg-white text-black rounded-tl-lg py-1 px-2 m-2">
              {/* <Rating
                initialRating={product?.rating}
                readonly
                emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                fullSymbol={<AiFillStar className="text-yellow-500" />}
              /> */}
            </div>
          </div>
          <div className="px-4 py-2">
            <Link
              to={`/product/${product?._id}`}
              className="text-md font-semibold tracking-tight text-black hover:text-lime-400"
            >
              {product?.name}
            </Link>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg font-bold">
                  <FaDollarSign />
                </span>
                <span className="text-lg font-bold text-black ml-1">
                  {product?.price}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleAddProductCart}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                >
                  <BsCart3 />
                </button>
                <button
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                  onClick={handleAddToWishlist}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
