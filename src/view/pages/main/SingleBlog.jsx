import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../features/blog/blogApi";

const SingleBlog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
    isSuccess,
  } = useGetSingleBlogQuery(id);
  const blogData = blog?.data;
  console.log(blogData);
  return (
    <div>
      {isLoading ? (
        <div className="text-center mt-8 text-gray-500">Loading...</div>
      ) : isError ? (
        <div className="text-center mt-8 text-red-500">
          Error loading blog post.
        </div>
      ) : isSuccess && blogData ? (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {blogData.title}
            </h1>
          </div>
          <div className="mt-6 prose prose-lg text-gray-600">
            <img
              src={blogData.image} // Add the image URL here
              alt={blogData.title}
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <p className="text-lg mb-4">{blogData.description}</p>
            <p className="text-sm text-gray-400">
              Author: {blogData.author.firstName} | Category: {blogData.category}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center mt-8 text-gray-500">No data found.</div>
      )}
    </div>
  );
};

export default SingleBlog;
