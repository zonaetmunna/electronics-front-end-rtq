import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Policy = () => {
  const [termsCollapsed, setTermsCollapsed] = useState(true);
  const [dataCollapsed, setDataCollapsed] = useState(true);

  const toggleTerms = () => {
    setTermsCollapsed(!termsCollapsed);
  };

  const toggleData = () => {
    setDataCollapsed(!dataCollapsed);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-dark mb-6">
          Privacy and Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Personal Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={toggleData}
            >
              {dataCollapsed ? (
                <>
                  <FaChevronDown className="inline-block mr-2" />
                  Show More
                </>
              ) : (
                <>
                  <FaChevronUp className="inline-block mr-2" />
                  Show Less
                </>
              )}
            </button>

            {!dataCollapsed && (
              <div className="bg-gray-100 p-4 mt-4">
                <p className="text-gray-600 leading-relaxed mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
              Terms and Conditions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={toggleTerms}
            >
              {termsCollapsed ? (
                <>
                  <FaChevronDown className="inline-block mr-2" />
                  Show More
                </>
              ) : (
                <>
                  <FaChevronUp className="inline-block mr-2" />
                  Show Less
                </>
              )}
            </button>
            {!termsCollapsed && (
              <div className="bg-gray-100 p-4 mt-4">
                <p className="text-gray-600 leading-relaxed mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
