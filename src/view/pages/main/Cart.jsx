import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../../../features/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "MX", label: "Mexico" },
];

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // remove product from cart
  const handleRemoveProductCart = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="text-center px-5 py-5">
          <h5 className="font-bold text-lg">Your Cart Products</h5>
          <hr className="bg-yellow-500" />
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="py-2 inline-block sm:px-6 lg:px-8">
              <div className="shadow border-b border-gray-200 sm:rounded-lg">
                <table className="divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        product model
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        price
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span className="">remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart &&
                      cart
                        ?.sort((a, b) => a.cartPosition - b.cartPosition)
                        .map((product) => (
                          <tr key={product._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={product.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product.model}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {product.price}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {product.quantity}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Total</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div
                                className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                                onClick={handleRemoveProductCart(product._id)}
                              >
                                <AiOutlineDelete size={20} />
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* update cart and continue shopping */}
        <div className="flex justify-end">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              <AiOutlineShoppingCart className="inline-block mr-2" />
              Continue shopping
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
              Update Cart
            </button>
          </div>
        </div>
      </div>

      {/* shipping option */}
      <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md">
        <div>
          <div>
            <h4>SubTotal</h4>
            <h4>365</h4>
          </div>
        </div>
        <hr />
        {/* shipping */}
        <div>
          <div className=" p-4 border border-gray-300 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-1">Shipping</h4>
            <div className="">
              <input
                type="checkbox"
                id="free-shipping"
                name="shipping-option"
                value="free-shipping"
                checked={selectedOption === "free-shipping"}
                onChange={() => handleOptionChange("free-shipping")}
                className="mr-2"
              />
              <label htmlFor="free-shipping" className="text-lg font-medium">
                Free Shipping
              </label>
              <p className="text-gray-500">+$000</p>
            </div>
            <div>
              <input
                type="checkbox"
                id="flat-rate"
                name="shipping-option"
                value="flat-rate"
                checked={selectedOption === "flat-rate"}
                onChange={() => handleOptionChange("flat-rate")}
                className="mr-2"
              />
              <label htmlFor="flat-rate" className="text-lg font-medium">
                Flat Rate
              </label>
              <p className="text-gray-500">+$000</p>
            </div>
            <div>
              <input
                type="checkbox"
                id="local-delivery"
                name="shipping-option"
                value="local-delivery"
                checked={selectedOption === "local-delivery"}
                onChange={() => handleOptionChange("local-delivery")}
                className="mr-2"
              />
              <label htmlFor="local-delivery" className="text-lg font-medium">
                Local Delivery
              </label>
              <p className="text-gray-500">Use your location</p>
            </div>
          </div>
        </div>
        <hr />
        {/* select country dropdown */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md flex justify-between my-6">
          <div className="w-1/2 pr-3">
            <label
              htmlFor="country"
              className="block text-gray-700 font-medium mb-2"
            >
              Country
            </label>
            <Select
              options={options}
              placeholder="Select a country"
              className="bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-1/2 pl-3">
            <label
              htmlFor="postal"
              className="block text-gray-700 font-medium mb-2"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postal"
              name="postal"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        {/* total amount */}
        <div className="flex justify-around items-center">
          <h4>Total</h4>
          <h4>$365</h4>
        </div>
        {/* discount coupon */}
        <div className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-4">
            <label
              htmlFor="coupon"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Discount Coupon
            </label>
            <div className="flex">
              <input
                type="text"
                id="coupon"
                name="coupon"
                className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-l-md w-full"
                placeholder="Enter coupon code"
              />
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-r-md hover:bg-indigo-600 transition-all duration-200">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* checkout page */}
        <div className="flex justify-end mt-4">
          <Link
            to="/checkout"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Process to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
