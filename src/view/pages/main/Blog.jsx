import React from "react";
import { FaTags, FaUser } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 fashion trends for summer 2022",
      date: "June 15, 2022",
      author: "Jane Doe",
      category: "Fashion",
      image: "/images/blog-1.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    },
    {
      id: 2,
      title: "New home decor collection now available",
      date: "May 25, 2022",
      author: "John Doe",
      category: "Home Decor",
      image: "/images/blog-2.jpg",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...",
    },
    {
      id: 3,
      title: " decor collection now available",
      date: "May 25, 2022",
      author: "John Doe",
      category: "Home Decor",
      image: "/images/blog-3.jpg",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...",
    },
    {
      id: 4,
      title: " decor collection now available",
      date: "May 25, 2022",
      author: "John Doe",
      category: "Home Decor",
      image: "/images/blog-3.jpg",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...",
    },
    // add more blogs here
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="px-4 py-6">
              <div className="text-gray-500 text-sm mb-2">
                <RiCalendarLine className="inline-block mr-2" />
                {blog.date}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaUser className="inline-block mr-1" />
                  <span className="text-gray-700 text-sm">{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <FaTags className="inline-block mr-1" />
                  <span className="text-gray-700 text-sm">{blog.category}</span>
                </div>
              </div>
              <Link
                to={`blog/${blog.id}`}
                className="text-blue-500 hover:text-blue-600 font-medium mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
