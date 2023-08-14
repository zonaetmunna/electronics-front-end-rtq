import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSeconed = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:gap-8">
          <div className="md:w-1/3">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase mb-4">
              Customer Service
            </h4>
            <ul className="mt-2">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase mb-4">
              Follow Us
            </h4>
            <ul className="mt-2">
              <li className="mb-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  <span className="flex items-center">
                    <FaFacebook className="mr-2" />
                    Facebook
                  </span>
                </a>
              </li>
              <li className="mb-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  <span className="flex items-center">
                    <FaTwitter className="mr-2" />
                    Twitter
                  </span>
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white font-medium block pb-2 text-sm"
                >
                  <span className="flex items-center">
                    <FaInstagram className="mr-2" />
                    Instagram
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0">
            <h2 className="text-lg font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-gray-400 focus:outline-none focus:border-gray-500 transition duration-300"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link
              to="/"
              className="text-gray-300 hover:text-white ml-6 font-medium text-sm"
            >
              Privacy Policy
            </Link>
            <span className="mx-4 text-gray-400">|</span>
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-medium text-sm"
            >
              Terms of Service
            </Link>
          </div>
          <div className="mt-2 md:mt-0 md:order-1">
            <p className="text-center text-gray-400 text-sm">
              © 2023 Single Vendor Ecommerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSeconed;
