import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getUser } from "../../../features/auth/authSlice";
import { useRegisterMutation } from "../../../features/auth/authApi";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const [userRegistration] = useRegisterMutation();

  function onSubmit(data) {
    console.log(data);
    const user = {
      email: data.email,
      password: data.password,
      role: "admin",
    };
    userRegistration(user);
    reset();
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="py-2 px-3 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                This field is required.
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="py-2 px-3 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600" id="password-error">
                This field is required.
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
