import React, { useState } from "react";
import {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "../../../../features/blog/blogApi";
import AddBlogModal from "../../../components/common/Modal/AddBlogModal";
import DeleteBlogModal from "../../../components/common/Modal/DeleteBlogModal";
import UpdateBlogModal from "../../../components/common/Modal/UpdateBlogModal";
import PaginationBlog from "../../../components/common/Pagination/PaginationBlog";

const AllBlogs = () => {
  // redux-toolkit-query api call for blogs
  const {
    data: blogs,
    isLoading: isLoadingBlogs,
    isError: isErrorBlogs,
    error: errorBlogs,
    isSuccess: isSuccessBlogs,
  } = useGetBlogsQuery({});
  const blogsData = blogs?.data;
  const [
    addBlog,
    {
      isLoading: isLoadingAddBlog,
      isError: isErrorAddBlog,
      error: errorAddBlog,
      isSuccess: isSuccessAddBlog,
    },
  ] = useAddBlogMutation();
  const [
    updateBlog,
    {
      isLoading: isLoadingUpdateBlog,
      isError: isErrorUpdateBlog,
      error: errorUpdateBlog,
      isSuccess: isSuccessUpdateBlog,
    },
  ] = useUpdateBlogMutation();
  const [
    deleteBlog,
    {
      isLoading: isLoadingDeleteBlog,
      isError: isErrorDeleteBlog,
      error: errorDeleteBlog,
      isSuccess: isSuccessDeleteBlog,
    },
  ] = useDeleteBlogMutation();

  // Modal States
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [blogToUpdate, setBlogToUpdate] = useState(null);
  const [blogToDelete, setBlogToDelete] = useState(null);

  // Function to open the Update Blog Modal
  const openUpdateModal = (blog) => {
    setBlogToUpdate(blog);
    setUpdateModalOpen(true);
  };

  // Function to open the Delete Blog Modal
  const openDeleteModal = (blog) => {
    setBlogToDelete(blog);
    setDeleteModalOpen(true);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
      {/* Blog List Table */}
      <div className="overflow-x-auto">
        {isLoadingBlogs ? (
          <p className="text-gray-500">Loading blogs...</p>
        ) : isErrorBlogs ? (
          <p className="text-red-500">{errorBlogs.message}</p>
        ) : isSuccessBlogs && blogsData ? (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogsData?.map((blog) => (
                <tr key={blog.id}>
                  <td className="px-4 py-2">{blog?.title}</td>
                  <td className="px-4 py-2">{blog?.author?.firstName}</td>
                  <td className="px-4 py-2">{blog?.category}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openUpdateModal(blog)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(blog)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>

      <PaginationBlog
        totalPages={Math.ceil(blogsData?.length / blogsPerPage)}
        currentPage={currentPage}
        onPageChange={paginate}
      />
      {/* Add Blog Modal */}
      <AddBlogModal
        isOpen={isAddModalOpen}
        onOpen={() => setAddModalOpen(true)}
        onAddBlog={addBlog}
        isErrorAddBlog={isErrorAddBlog}
        isLoadingAddBlog={isLoadingAddBlog}
        errorAddBlog={errorAddBlog}
        isSuccessAddBlog={isSuccessAddBlog}
      />
      {/* Update Blog Modal */}
      <UpdateBlogModal
        isOpen={isUpdateModalOpen}
        onOpen={() => setUpdateModalOpen(true)}
        onUpdateBlog={updateBlog}
        isLoadingUpdateBlog={isLoadingUpdateBlog}
        isErrorUpdateBlog={isErrorUpdateBlog}
        errorUpdateBlog={errorUpdateBlog}
        isSuccessUpdateBlog={isSuccessUpdateBlog}
      />
      {/* Delete Blog Modal */}
      <DeleteBlogModal
        isOpen={isDeleteModalOpen}
        onOpen={() => setDeleteModalOpen(true)}
        onDeleteBlog={deleteBlog}
        isLoadingDeleteBlog={isLoadingDeleteBlog}
        isErrorDeleteBlog={isErrorDeleteBlog}
        errorDeleteBlog={errorDeleteBlog}
        isSuccessDeleteBlog={isSuccessDeleteBlog}
      />
    </div>
  );
};

export default AllBlogs;
