import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { addToCart } from '../../../../features/cart/cartSlice';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // handle add product cart
  const handleAddProductCart = (data) => {
    dispatch(addToCart(data));
  };
  
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:bg-amber-200">
      {pathname.includes("/")&&<div>
        {/* image */}
        <div className='w-auto px-2 py-2'>
          <img className="w-full rounded-lg" src={data.image} alt="computer parts" />
        </div>
        <div className="px-3 py-2">
          <Link to={`/product/${data._id}`}>
            <h5 className="text-md font-semibold tracking-tight text-black hover:text-lime-400">{data.model}</h5>
          </Link>
          {/* rating */}
          <div className="px-1 py-1">
            <Rating
              initialRating={data.rating}
              readonly
              emptySymbol={<AiOutlineStar className='text-yellow-500' />}
              fullSymbol={<AiFillStar className='text-yellow-500' />}
            />
          </div>
          {/* price text*/}
          <div className='px-1 py-1'>
            <div className='flex justify-start items-center'>
              <span><FaDollarSign className='text-yellow-500' size={20} /></span> <span className="text-lg font-bold text-black">{data.price}</span>
            </div>
          </div>
          {/* add to cart button */}
          <div className="flex items-center justify-between px-1 py-1">
            <button onClick={handleAddProductCart(data)} className="text-black bg-yellow-500 hover:bg-yellow-600 border-orange-600 font-medium rounded-lg text-bold px-3 py-2 flex justify-around items-center"> <span><BsCart3 size={20} /></span> Add to cart <span></span></button>
          </div>
          {/* remove to cart button */}
        </div>
      </div>}
      
    </div>
  );
};

export default ProductCard;