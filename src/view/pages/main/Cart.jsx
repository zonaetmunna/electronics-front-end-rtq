import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyDiscountCode,
  clearCart,
  removeFromCart,
  setDiscountCode,
  setTotal,
  updateQuantity,
} from "../../../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdRemoveCircleOutline } from "react-icons/md";
import ShippingOption from "../../components/main/cart/ShippingOption";

const Cart = () => {
  const { cart, subtotal, discountCode, total, shippingOption, shippingCost } =
    useSelector((state) => state.cart);
  console.log(cart.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // remove product from cart
  const handleRemoveProductCart = (id) => {
    const itemIndex = cart.findIndex((item) => item._id === id);
    if (itemIndex !== -1) {
      dispatch(removeFromCart(id));
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // shipping state
  /*   const [selectedShippingOption, setSelectedShippingOption] =
    useState("Free Shipping");
  const [shippingCost, setShippingCost] = useState(0); */

  // discount state
  // const [couponCode, setCouponCode] = useState("");
  // const [discount, setDiscount] = useState(0);
  // const [total, setTotal] = useState(subtotal);

  const handleApplyDiscount = () => {
    dispatch(applyDiscountCode(document.getElementById("coupon").value));
  };

  useEffect(() => {
    dispatch(setTotal(subtotal + shippingCost - discountCode));
  }, [subtotal, shippingCost, discountCode, dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="text-left font-normal py-2 w-2/5">Item</th>
                <th className="text-left font-normal py-2">Price</th>
                <th className="text-left font-normal py-2">Quantity</th>
                <th className="text-left font-normal py-2">Total</th>
                <th className="text-left font-normal py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-b border-gray-400">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 object-cover rounded"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="ml-4">
                        <h2 className="font-bold text-lg">{item.name}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      className="w-16 border border-gray-400 rounded py-1 px-2"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item._id, e.target.value)
                      }
                      min={1}
                      max={10}
                    />
                  </td>
                  <td className="py-4">${item.price * item.quantity}</td>
                  <td className="py-4">
                    <button
                      className="hover:text-red-600"
                      onClick={() => handleRemoveProductCart(item._id)}
                    >
                      <MdRemoveCircleOutline className="h-6 w-6 fill-current" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-8">
            <div className="flex items-center">
              <span className="text-lg font-bold">Subtotal:</span>
              <span className="text-lg font-bold ml-2">${subtotal}</span>
            </div>
            {/*  */}
            <div className="flex-shrink-0 bg-gray-100 p-5">
              {/*  */}
              <ShippingOption shippingCost={shippingCost} />
              <div className="flex flex-row justify-between items-center w-full my-4">
                <label htmlFor="coupon" className="font-bold mr-2">
                  Coupon Code:
                </label>
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  className="border rounded py-2 px-3"
                  value={discountCode}
                  onChange={(e) => dispatch(setDiscountCode(e.target.value))}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2"
                  onClick={handleApplyDiscount}
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between items-center my-5">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">${total}</span>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 my-5 rounded hover:bg-blue-600"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-lg">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
