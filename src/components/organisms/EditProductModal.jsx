import { useForm } from 'react-hook-form';

import Button from '../atoms/Button';
import Label from '../atoms/Label';

const EditProductModal = ({ product, isOpen, onClose, onSubmit }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: product.name,
			description: product.description,
			price: product.price,
			category: product.category.name,
			brand: product.brand.name,
			stockQuantity: product.stockQuantity,
			stock: product.stock,
		},
	});

	const handleClose = () => {
		onClose();
		reset(product);
	};

	const handleFormSubmit = (data) => {
		onSubmit(data);
		handleClose();
	};
	return (
		<div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" aria-hidden="true">
					<div className="absolute inset-0 bg-gray-500 opacity-75" />
				</div>

				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
					&#8203;
				</span>

				<div
					className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
				>
					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
									<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
										Edit Product
									</h3>
									<div className="mt-2">
										<div className="mb-4">
											<Label htmlFor="name" className="block text-gray-700 font-bold mb-2">
												Name
											</Label>
											<input
												type="text"
												name="name"
												id="name"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('name', { required: true })}
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											/>
											{errors.name && (
												<p className="text-red-500 text-sm mt-1">This field is required</p>
											)}
										</div>
										<div className="mb-4">
											<Label htmlFor="description" className="block text-gray-700 font-bold mb-2">
												Description
											</Label>
											<textarea
												name="description"
												id="description"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('description', { required: true })}
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											/>
											{errors.description && (
												<p className="text-red-500 text-sm mt-1">This field is required</p>
											)}
										</div>
										<div className="mb-4">
											<Label htmlFor="price" className="block text-gray-700 font-bold mb-2">
												Price
											</Label>
											<input
												type="number"
												name="price"
												id="price"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('price', { required: true })}
											/>
										</div>
										<div className="mb-4">
											<Label htmlFor="category" className="block text-gray-700 font-bold mb-2">
												Category
											</Label>
											{/* eslint-disable-next-line react/jsx-props-no-spreading */}
											<input type="text" {...register('category', { required: true })} />
										</div>
										<div className="mb-4">
											<Label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
												Brand
											</Label>
											{/* eslint-disable-next-line react/jsx-props-no-spreading */}
											<input type="text" {...register('brand', { required: true })} />
										</div>
										<div className="mb-4">
											<Label htmlFor="stock" className="block text-gray-700 font-bold mb-2">
												Stock
											</Label>
											{/* eslint-disable-next-line react/jsx-props-no-spreading */}
											<input type="number" {...register('stockQuantity', { required: true })} />
										</div>

										<div className="mb-4">
											<Label htmlFor="stock" className="block text-gray-700 font-bold mb-2">
												Stock
											</Label>
											{/* eslint-disable-next-line react/jsx-props-no-spreading */}
											<input type="checkbox" {...register('stock')} />
										</div>

										<div className="flex justify-between items-center w-1/3">
											<Button
												className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
												type="button"
												onClick={handleClose}
											>
												Cancel
											</Button>
										</div>

										<div className="flex justify-between items-center  w-1/3">
											<Button
												className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
												type="submit"
											>
												Submit
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProductModal;
