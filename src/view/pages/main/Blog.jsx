import React from "react";
import { useGetBlogsQuery } from "../../../features/blog/blogApi";
import BlogCard from "../../components/common/Card/BlogCard";
import SkeletonBlogCard from "../../components/common/Skeleton/SkeletonBlogCard";
const Blog = () => {
  const { data: blogs, isLoading, isError, isSuccess } = useGetBlogsQuery({});
  const blogsData = blogs?.data;
  console.log(blogsData);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          // Display loading skeleton cards while data is being fetched
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlogCard key={index} />
          ))
        ) : isError ? (
          <p>Error fetching data</p>
        ) : isSuccess && blogsData ? (
          // Display actual blog cards once data is available
          blogsData.map((blog) => <BlogCard blog={blog} key={blog._id} />)
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
