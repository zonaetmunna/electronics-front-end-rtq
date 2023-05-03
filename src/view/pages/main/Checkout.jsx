import React, { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

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

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="px-5 py-3">
        <p className="font-bold text-lg text-center">Checkout</p>
      </div>
      <div className="px-2 py-2">
        <hr />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div>
            <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-none">
              log into your account
            </button>
          </div>
          <div>
            <div>
              <h4>Billing Details</h4>
            </div>
          </div>

          <div className="w-1/2 grid place-items-center">
            <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
              <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  {/* first name */}
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <label
                        htmlFor="firstName"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        {...register("firstName", { required: true })}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                          errors.firstName && "border-red-500"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs italic">
                          First name is required
                        </p>
                      )}
                    </div>
                    <div className="w-full px-3">
                      <label
                        htmlFor="lastName"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        {...register("lastName", { required: true })}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                          errors.lastName && "border-red-500"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs italic">
                          Last name is required
                        </p>
                      )}
                    </div>
                  </div>
                  {/* email */}
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        htmlFor="email"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
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
                  </div>

                  {/* number */}
                  <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block mb-2 font-bold text-gray-700"
                        htmlFor="phone"
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
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* address */}
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        htmlFor="address"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        {...register("address", { required: true })}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                          errors.address && "border-red-500"
                        }`}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs italic">
                          Address is required
                        </p>
                      )}
                    </div>
                  </div>
                  {/* country */}
                  <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block mb-2 font-bold text-gray-700"
                        htmlFor="country"
                      >
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        id="country"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.country ? "border-red-500" : ""
                        }`}
                        {...register("country", { required: true })}
                      >
                        <option value="">Select a country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        {/* add more countries here */}
                      </select>
                      {errors.country && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* city and zip */}
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        htmlFor="city"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        {...register("city", { required: true })}
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                          errors.city && "border-red-500"
                        }`}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs italic">
                          City is required
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        htmlFor="zip"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                          errors.zip && "border-red-500"
                        }`}
                      />
                      {errors.zip && errors.zip.type === "required" && (
                        <p className="text-red-500 text-xs italic">
                          Zip code is required
                        </p>
                      )}
                      {errors.zip && errors.zip.type === "pattern" && (
                        <p className="text-red-500 text-xs italic">
                          Invalid zip code
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <input
                      type="radio"
                      id="billing"
                      value={true}
                      {...register("billing")}
                      required
                    />
                    <label className="ml-2 text-lg" htmlFor="available">
                      billing Details
                    </label>
                  </div>

                  <div className="!mt-8 ">
                    <button
                      type="submit"
                      className="py-2 px-4 mx-3 my-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
                      disabled={disabled}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
