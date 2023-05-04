import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const PersonalInformation = () => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 lg:pr-8">
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-medium mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`border rounded-lg py-2 px-3 w-full
            }`}
            {...register("firstName", { required: "First name is required" })}
          />
          {/* {errors.firstName && (
            <span className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </span>
          )} */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className="block text-gray-700 font-medium mb-2"
          >
            Profile Image
          </label>
          <div className="flex items-center">
            <div className="w-16 h-16 mr-4 rounded-full overflow-hidden">
              <img
                src={user.profileImage} // assuming the profile image URL is stored in the user object
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              {...register("profileImage")}
            />
            <label
              htmlFor="profileImage"
              className="text-blue-500 cursor-pointer"
            >
              Change Image
            </label>
          </div>
        </div>
        {/* Repeat the above code for the other form fields */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
