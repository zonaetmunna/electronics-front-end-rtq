import { Controller, useForm } from 'react-hook-form';

import Button from '../atoms/Button';
import Label from '../atoms/Label';

const UpdateBlogModal = ({
	isOpen,
	onClose,
	onUpdateBlog,
	isLoadingUpdateBlog,
	isErrorUpdateBlog,
	errorUpdateBlog,
	isSuccessUpdateBlog,
	blogToUpdate,
}) => {
	const { handleSubmit, control, reset } = useForm();

	const handleFormSubmit = (data) => {
		onUpdateBlog({ id: blogToUpdate.id, ...data });
		reset();
	};

	return (
		<div
			className={`${
				isOpen ? 'block' : 'hidden'
			} fixed inset-0 flex items-center justify-center z-50`}
		>
			<div className="modal-container">
				<div className="modal-content">
					<h2 className="text-2xl font-semibold mb-4">Update Blog</h2>
					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<div className="mb-4">
							<Label htmlFor="title" className="block text-gray-700 font-bold">
								Title
							</Label>
							<Controller
								name="title"
								control={control}
								defaultValue={blogToUpdate?.title}
								render={({ field }) => (
									<input
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...field}
										type="text"
										id="title"
										className="form-input mt-1 block w-full"
									/>
								)}
							/>
						</div>

						<div className="mb-4">
							<Label htmlFor="author" className="block text-gray-700 font-bold">
								Author
							</Label>
							<Controller
								name="author"
								control={control}
								defaultValue={blogToUpdate?.author}
								render={({ field }) => (
									<input
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...field}
										type="text"
										id="author"
										className="form-input mt-1 block w-full"
									/>
								)}
							/>
						</div>

						<div className="mb-4">
							<Label htmlFor="category" className="block text-gray-700 font-bold">
								Category
							</Label>
							<Controller
								name="category"
								control={control}
								defaultValue={blogToUpdate?.category}
								render={({ field }) => (
									<input
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...field}
										type="text"
										id="category"
										className="form-input mt-1 block w-full"
									/>
								)}
							/>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								disabled={isLoadingUpdateBlog}
							>
								{isLoadingUpdateBlog ? 'Updating...' : 'Update Blog'}
							</button>
						</div>
					</form>
					{isErrorUpdateBlog && <p className="text-red-500 mt-4">{errorUpdateBlog.message}</p>}
					{isSuccessUpdateBlog && <p className="text-green-500 mt-4">Blog updated successfully!</p>}
					<Button
						onClick={() => {
							reset();
							onClose();
						}}
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
					>
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UpdateBlogModal;
