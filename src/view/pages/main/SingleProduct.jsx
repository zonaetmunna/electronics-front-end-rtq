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
    <div className="flex justify-around items-center">
      <div>
        <img src={product?.image} alt="" />
      </div>
      <div>
        <h4>{product?.name}</h4>
        <div className="mx-2 my-2">
          <h1 className="mx-2 my-2">Key Feature</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <button onClick={() => dispatch(addToCart(data))}>+</button>
            <p>{data?.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
