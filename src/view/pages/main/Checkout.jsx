import React, { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";

const Checkout = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const email = useWatch({ control, name: "email" });
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (email !== undefined && email !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  const { cart, total, subTotal } = useSelector((state) => state.cart);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div class="container mx-auto py-10 px-10">
      <div className="px-5 py-3">
        <p className="font-bold text-lg text-center">Checkout</p>
      </div>
      <div className="px-2 py-2">
        <hr />
      </div>
      <div class="flex justify-between px-5 ">
        <div class="w-1/2 p-4 bg-gray-100 mx-5 shadow-lg">
          {/* Left section content goes here  */}
          <div className="border-b mb-6 pb-4 text-center">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Billing Details
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* first name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* first name */}
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    {...register("firstName", { required: true })}
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.firstName && "border-red-500"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs italic">
                      First name is required
                    </p>
                  )}
                </div>

                {/* last name */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    {...register("lastName", { required: true })}
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.lastName && "border-red-500"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs italic">
                      Last name is required
                    </p>
                  )}
                </div>

                {/* email */}
                {/* email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email && "border-red-500"
                    }`}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="text-red-500 text-xs italic">
                      Email is required
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="text-red-500 text-xs italic">
                      Invalid email address
                    </p>
                  )}
                </div>

                {/* number */}
                {/* phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs italic">
                      This field is required
                    </p>
                  )}
                </div>

                {/* address */}
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    {...register("address", { required: true })}
                    className={`w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.address && "border-red-500"
                    }`}
                    placeholder="123 Main St."
                  />
                  {errors.address && (
                    <p className="mt-2 text-sm text-red-600">
                      Address is required
                    </p>
                  )}
                </div>
                {/* country */}
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="country"
                    className="text-gray-700 font-bold mb-2"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    id="country"
                    className={`w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.country && "border-red-500"
                    }`}
                    {...register("country", { required: true })}
                  >
                    <option value="">Select a country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="india">India</option>
                    {/* add more countries here */}
                  </select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-red-600">
                      Country is required
                    </p>
                  )}
                </div>

                {/* city and zip */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label
                      htmlFor="city"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      {...register("city", { required: true })}
                      className={`w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.city && "border-red-500"
                      }`}
                      placeholder="Los Angeles"
                    />
                    {errors.city && (
                      <p className="mt-2 text-sm text-red-600">
                        City is required
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="zip"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      {...register("zip", {
                        required: true,
                        pattern: /^[0-9]{5}(?:-[0-9]{4})?$/i,
                      })}
                      className={`w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.zip && "border-red-500"
                      }`}
                      placeholder="90210"
                    />
                    {errors.zip && errors.zip.type === "required" && (
                      <p className="mt-2 text-sm text-red-600">
                        Zip code is required
                      </p>
                    )}
                    {errors.zip && errors.zip.type === "pattern" && (
                      <p className="mt-2 text-sm text-red-600">
                        Invalid zip code
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-gray-600">${item.price.toFixed(2)}</div>
              <div className="text-gray-600">x {item.quantity}</div>
            </div>
          ))}
          <div className="border-t-2 border-gray-200 py-2">
            <div className="flex justify-between items-center font-semibold">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium mb-2">Payment Method</h3>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                id="directBankTransfer"
                className="mr-2"
              />
              <label htmlFor="directBankTransfer" className="font-medium">
                Direct Bank Transfer
              </label>
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.
            </p>

            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                className="mr-2"
              />
              <label htmlFor="cashOnDelivery" className="font-medium">
                Cash on Delivery
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="paymentMethod"
                id="creditDebitCards"
                className="mr-2"
              />
              <label htmlFor="creditDebitCards" className="font-medium">
                Credit/Debit Cards or Paypal
              </label>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-indigo-500">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
