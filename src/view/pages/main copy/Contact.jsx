import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center">
              <MdEmail className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Fill out the form below to send us a message
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-600">
                      Please enter your name
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="mt-2 text-xs text-red-600">
                      Please enter your email address
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="mt-2 text-xs text-red-600">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-600">
                      Please enter a message
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 12 4.293 7.707a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10 sm:flex sm:flex-col sm:items-center">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-6 w-6 text-gray-400" />
                <div className="ml-2">
                  <p className="text-base font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-500">
                    123 Main St.
                    <br />
                    Suite 100
                    <br />
                    Anytown, USA 12345
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <FaPhoneAlt className="h-6 w-6 text-gray-400" />
                <div className="ml-2">
                  <p className="text-base font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-500">555-555-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
