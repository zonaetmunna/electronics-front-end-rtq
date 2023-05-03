import React from "react";

const OfferBanner = () => {
  return (
    <div className="bg-white py-6 px-8 rounded-lg shadow-md flex items-center">
      <img
        src="https://live.staticflickr.com/65535/52521844202_dd853335c9_o.jpg"
        alt="Offer Banner"
        className="w-32 h-32 mr-8"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">Limited Time Offer</h2>
        <p className="text-gray-700 mb-4">
          Get 10% off on all products. Use code LIMITED10 at checkout.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
