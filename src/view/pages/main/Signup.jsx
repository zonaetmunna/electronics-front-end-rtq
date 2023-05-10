import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/login-image.jpg";
import { signupUser } from "../../../features/auth/authSlice";

const Signup = () => {
  const {
    user: { email },
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.auth);
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    dispatch(
      signupUser({
        email: data.email,
        password: data.password,
      })
    );
    console.log(data);
    reset();
  };

  // redirect
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, []);

  // error
  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <div className="flex h-screen items-center bg-gray-50">
      <div className="hidden md:block w-1/2 h-full p-20">
        <img src={loginImage} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="w-full md:w-1/2 grid place-items-center">
        <div className="bg-white shadow-md rounded-lg p-10 md:p-20 w-full md:max-w-md">
          <h1 className="mb-10 font-medium text-2xl md:text-3xl text-center">
            Sign up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email")}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password")}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirm-password"
                className="font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                {...register("confirmPassword")}
                className="block w-full rounded-md border-gray--300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-medium text-white bg-primary rounded-md hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-8 text-base font-medium text-gray-700">
            Already have an account?{" "}
            <span
              className="text-primary hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
