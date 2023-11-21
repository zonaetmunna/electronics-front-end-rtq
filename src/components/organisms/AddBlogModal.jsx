import { Controller, useForm } from 'react-hook-form';

import Button from '../atoms/Button';
import Label from '../atoms/Label';

const AddBlogModal = ({
	isOpen,
	onClose,
	onAddBlog,
	isErrorAddBlog,
	isLoadingAddBlog,
	errorAddBlog,
	isSuccessAddBlog,
}) => {
	const { handleSubmit, control, reset } = useForm();

	const handleFormSubmit = (data) => {
		onAddBlog(data);
		reset(); // Clear the form after submission
	};

	return (
		<div
			className={`${
				isOpen ? 'block' : 'hidden'
			} fixed inset-0 flex items-center justify-center z-50`}
		>
			<div className="modal-container">
				<div className="modal-content">
					<h2 className="text-2xl font-semibold mb-4">Add Blog</h2>
					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<div className="mb-4">
							<Label htmlFor="title" className="block text-gray-700 font-bold">
								Title
							</Label>
							<Controller
								name="title"
								control={control}
								defaultValue=""
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
								defaultValue=""
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
								defaultValue=""
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
							<Button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								disabled={isLoadingAddBlog}
							>
								{isLoadingAddBlog ? 'Adding...' : 'Add Blog'}
							</Button>
						</div>
					</form>
					{isErrorAddBlog && <p className="text-red-500 mt-4">{errorAddBlog.message}</p>}
					{isSuccessAddBlog && <p className="text-green-500 mt-4">Blog added successfully!</p>}
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

export default AddBlogModal;
