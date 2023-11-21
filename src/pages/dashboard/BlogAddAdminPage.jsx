import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Button from '../../components/atoms/Button';
import Label from '../../components/atoms/Label';
import { useAddBlogMutation } from '../../features/blog/blogApi';

const BlogAddAdminPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// user state
	const { user } = useSelector((state) => state.auth);
	// redux toolkit query api use
	const [addBlog, { isLoading, isError, isSuccess }] = useAddBlogMutation();

	const onSubmit = async (data) => {
		const blogData = {
			title: data.title,
			description: data.description,
			image: data.image,
			category: data.category,
			// eslint-disable-next-line no-underscore-dangle
			author: user._id,
		};
		try {
			await addBlog(blogData);
		} catch (error) {
			// Handle error, display error messages, etc.
		}
	};
	return (
		<div className="container mx-auto mt-4">
			<h2 className="text-2xl font-semibold mb-4">Create a New Blog</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
				<div className="mb-4">
					<Label htmlFor="title" className="block font-medium mb-1">
						Title
					</Label>
					<input
						type="text"
						id="title"
						className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
							errors.title ? 'border-red-500' : 'focus:border-blue-500'
						}`}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('title', { required: true })}
					/>
					{errors.title && <p className="text-red-500 mt-1">Title is required</p>}
				</div>
				<div className="mb-4">
					<Label htmlFor="description" className="block font-medium mb-1">
						Description
					</Label>
					<textarea
						id="description"
						className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
							errors.description ? 'border-red-500' : 'focus:border-blue-500'
						}`}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('description', { required: true })}
					/>
					{errors.description && <p className="text-red-500 mt-1">Description is required</p>}
				</div>
				<div className="mb-4">
					<Label htmlFor="category" className="block font-medium mb-1">
						category
					</Label>
					<input
						type="text"
						id="category"
						className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
							errors.title ? 'border-red-500' : 'focus:border-blue-500'
						}`}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('category', { required: true })}
					/>
					{errors.category && <p className="text-red-500 mt-1">Title is required</p>}
				</div>
				<div className="mb-4">
					<Label htmlFor="image" className="block font-medium mb-1">
						Image URL
					</Label>
					<input
						type="text"
						id="image"
						className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
							errors.image ? 'border-red-500' : 'focus:border-blue-500'
						}`}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register('image', { required: true })}
					/>
					{errors.image && <p className="text-red-500 mt-1">Image URL is required</p>}
				</div>
				<Button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					disabled={isLoading}
				>
					{isLoading ? 'Creating...' : 'Create Blog'}
				</Button>
				{/* Display success or error messages based on isSuccess and isError */}
				{isSuccess && <p className="text-green-600 mt-2">Blog created successfully!</p>}
				{isError && <p className="text-red-600 mt-2">Error creating blog.</p>}
			</form>
		</div>
	);
};

export default BlogAddAdminPage;
