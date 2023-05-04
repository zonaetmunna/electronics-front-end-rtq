import React from "react";
import { FaUser, FaRegClock } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://images.unsplash.com/photo-1616439582228-90e1d34685d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Blog Post"
            />
          </div>
          <div className="px-4 py-4 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Blog Post Title
            </h1>
            <div className="flex items-center mb-2 text-sm text-gray-600">
              <FaUser className="inline-block mr-1" />
              By <span className="font-medium mr-2">Author Name</span>
              <FaRegClock className="inline-block mr-1" />
              Posted on <span className="font-medium mr-2">May 1, 2023</span>
              <IoMdChatbubbles className="inline-block mr-1" />
              <span className="font-medium">2 Comments</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus dui in erat laoreet, at bibendum sem dictum. Aliquam
              dapibus, nisl quis dapibus molestie, ex est facilisis mi, sit amet
              gravida tellus tellus ut tellus. Nulla facilisi. Phasellus
              consectetur purus vel nunc dignissim, eu scelerisque enim dictum.
              Sed at augue nunc. In hac habitasse platea dictumst.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Morbi commodo velit eu semper laoreet. Nullam tristique nisl id
              libero euismod pretium. Sed eleifend, ex a dapibus eleifend, augue
              sapien facilisis nunc, eu posuere libero ex eget augue. Praesent
              aliquam elementum odio at pretium. Curabitur eleifend sem non
              tincidunt molestie. Aenean dictum risus quis ex ornare tempus.
            </p>
          </div>
          <div className="px-4 py-2 sm:px-6 bg-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Comments</h2>
            <div className="flex items-center mb-4">
              <img
                className="h-10 w-10 rounded-full object-cover mr-4"
                src="https://images.unsplash.com/photo-1581092020911-1c5b"
                alt="d"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
