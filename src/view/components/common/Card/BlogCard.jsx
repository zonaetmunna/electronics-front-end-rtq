import React from "react";
import { FaTags, FaUser } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />
      <div className="px-4 py-6">
        <div className="text-gray-500 text-sm mb-2">
          <RiCalendarLine className="inline-block mr-2" />
          {blog.createdAt}
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{blog.title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="inline-block mr-1" />
            <span className="text-gray-700 text-sm">
              {blog?.author?.firstName}
            </span>
          </div>
          <div className="flex items-center">
            <FaTags className="inline-block mr-1" />
            <span className="text-gray-700 text-sm">{blog.category}</span>
          </div>
        </div>
        <Link
          to={`/blog/${blog._id}`}
          className="text-blue-500 hover:text-blue-600 font-medium mt-4"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
