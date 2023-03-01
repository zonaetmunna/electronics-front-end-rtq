import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../../features/api/apiSlice';
import { addToCart } from '../../../features/cart/cartSlice';




const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {isError,isLoading,data}=useGetSingleProductQuery(id);


  return (
    <div className='flex justify-around items-center'>
      <div>
        <img src={data.data?.image} alt="" />
      </div>
      <div>
        <h4>{data?.model}</h4>
        <div className='mx-2 my-2'>
          <h1 className='mx-2 my-2'>Key Feature</h1>
          {/* {product.keyFeature.map((feature) => <div>
            <li className='mx-2 ps-2 my-2'>{feature}</li>
          </div>)} */}
        </div>
        <div>
          <div className='flex justify-center items-center'>
                <button onClick={() => dispatch(addToCart(data))}>+</button>
                <p>{data?.quantity}</p>
                {/* <button
                  onClick={() => {
                    if (data?.quantity > 1) {
                      dispatch(removeToCart(data?._id));
                    } 
                  }}
                >-</button> */}
              </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;