/* eslint-disable prettier/prettier */
import { useState } from 'react';

import Button from '../../components/atoms/Button';
import PaginationBlog from '../../components/molecules/PaginationBlog';
import AddBlogModal from '../../components/organisms/AddBlogModal';
import DeleteBlogModal from '../../components/organisms/DeleteBlogModal';
import UpdateBlogModal from '../../components/organisms/UpdateBlogModal';
import {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from '../../features/blog/blogApi';

const BlogListAdminPage = () => {
	const {
		data: blogs,
		isLoading: isLoadingBlogs,
		isError: isErrorBlogs,
		error: errorBlogs,
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

	const [isAddModalOpen, setAddModalOpen] = useState(false);
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [blogToUpdate, setBlogToUpdate] = useState(null);
	// eslint-disable-next-line no-unused-vars
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
	// eslint-disable-next-line no-unused-vars
	const currentBlogs = blogsData?.slice(indexOfFirstBlog, indexOfLastBlog);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-4">All Blogs</h2>

			<div className="overflow-x-auto">
				{isErrorBlogs && <p className="text-red-500">{errorBlogs?.message}</p>}
				{isLoadingBlogs ? (
					<p className="text-gray-500">Loading blogs...</p>
				) : (
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
								<tr key={blog?.id}>
									<td className="px-4 py-2">{blog?.title}</td>
									<td className="px-4 py-2">{blog?.author?.firstName}</td>
									<td className="px-4 py-2">{blog?.category}</td>
									<td className="px-4 py-2">
										<Button
											onClick={() => openUpdateModal(blog)}
											className="text-blue-500 hover:underline mr-2"
										>
											Edit
										</Button>
										<Button
											onClick={() => openDeleteModal(blog)}
											className="text-red-500 hover:underline"
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
				{blogsData?.length === 0 && <p className="text-gray-500">No blogs found.</p>}
			</div>

			<PaginationBlog
				// eslint-disable-next-line no-unsafe-optional-chaining
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

export default BlogListAdminPage;
