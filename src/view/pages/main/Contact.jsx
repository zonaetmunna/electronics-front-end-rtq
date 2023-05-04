import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ReactMapGL, { Marker } from "react-map-gl";

const contactInfo = [
  { icon: <FaPhoneAlt />, text: "+1 234 567 8901" },
  { icon: <FaEnvelope />, text: "info@company.com" },
  // add more items as needed
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Here, you can handle form submission and API requests
    console.log(data);
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 13,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">
        Contact Us
      </h1>

      <div className="flex flex-wrap mx-4">
        {/* form section */}
        <div className="w-full md:w-1/2 md:pr-6 mb-8 md:mb-0">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.name ? "border-red-600" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-red-600 text-sm">
                  Please enter your name.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email ? "border-red-600" : ""
                }`}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="mt-2 text-red-600 text-sm">
                  Please enter your email.
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="mt-2 text-red-600 text-sm">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            ;
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-bold mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                {...register("subject", { required: true })}
                className={`w-full px-3 py-2 rounded-md border ${
                  errors.subject ? "border-red-500" : "border-gray-400"
                } focus:outline-none focus:border-blue-500`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  Subject is required.
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* another section */}
        <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-center">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Contact Information
          </h2>
          <ul className="list-disc pl-6">
            {contactInfo.map((item) => (
              <li key={item.text} className="flex items-center mb-2">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* map section */}
        <div className="relative w-full h-64">
          <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker latitude={37.7577} longitude={-122.4376}>
              <FaMapMarkerAlt size={32} className="text-red-500" />
            </Marker>
          </ReactMapGL>
        </div>
      </div>
    </div>
  );
};

export default Contact;
