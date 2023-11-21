import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Select from 'react-select';

import Button from '../atoms/Button';
import Label from '../atoms/Label';

const AddProductModal = ({ categories, brands, onSubmit, isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const categoriesOption = categories.map((category) => ({
		// eslint-disable-next-line no-underscore-dangle
		value: category._id,
		label: category.name,
	}));
	const brandsOption = brands.map((brand) => ({
		// eslint-disable-next-line no-underscore-dangle
		value: brand._id,
		label: brand.name,
	}));

	const handleFormSubmit = (data) => {
		onSubmit(data);

		reset();

		toast.success('Product added successfully!');
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
										Add Product
									</h3>
									<div className="grid grid-cols-1 gap-4">
										<div className="mb-4">
											<Label htmlFor="name" className="block font-semibold mb-1">
												Product Name
											</Label>
											<input
												type="text"
												id="name"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('name', {
													required: 'Product name is required',
												})}
												className="w-full border rounded p-2"
											/>
											{errors.name && <p className="text-red-500">{errors.name.message}</p>}
										</div>
										<div className="mb-4">
											<Label htmlFor="price" className="block font-semibold mb-1">
												Price
											</Label>
											<input
												type="number"
												id="price"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('price', {
													required: 'Price is required',
													min: 0,
												})}
												className="w-full border rounded p-2"
											/>
											{errors.price && <p className="text-red-500">{errors.price.message}</p>}
										</div>
									</div>
									<div className="grid grid-cols-1 gap-4">
										<div className="mb-4">
											<Label htmlFor="category" className="block font-semibold mb-1">
												Category
											</Label>
											<Select
												id="category"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('category', {
													required: 'Category is required',
												})}
												options={categoriesOption}
												className="w-full"
											/>
											{errors.category && <p className="text-red-500">{errors.category.message}</p>}
										</div>

										<div className="mb-4">
											<Label htmlFor="brand" className="block font-semibold mb-1">
												Brand
											</Label>
											<Select
												id="brand"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('brand', {
													required: 'Brand is required',
												})}
												options={brandsOption}
												className="w-full"
											/>
											{errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
										</div>
									</div>

									<div className="grid grid-cols-1 gap-4">
										<div className="mb-4">
											<Label htmlFor="image" className="block font-semibold mb-1">
												Image
											</Label>
											<input
												type="file"
												id="image"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('image')}
												className="w-full border rounded p-2"
											/>
										</div>
										<div className="mb-4">
											<Label htmlFor="others" className="block font-semibold mb-1">
												Others images
											</Label>
											<input
												type="file"
												id="othersImage"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('othersImage')}
												className="w-full border rounded p-2"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-4">
										<div className="mb-4">
											<Label htmlFor="description" className="block font-semibold mb-1">
												Description
											</Label>
											<textarea
												id="description"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('description')}
												className="w-full border rounded p-2"
											/>
										</div>

										<div className="mb-4">
											<Label htmlFor="stockQuantity" className="block font-semibold mb-1">
												Stock Quantity
											</Label>
											<input
												type="number"
												id="stockQuantity"
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...register('stockQuantity', {
													required: 'Stock quantity is required',
													min: 0,
												})}
												className="w-full border rounded p-2"
											/>
											{errors.stockQuantity && (
												<p className="text-red-500">{errors.stockQuantity.message}</p>
											)}
										</div>
									</div>

									<div className="flex justify-between">
										<div className="justify-between items-center w-1/3">
											<Button
												type="submit"
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
											>
												Add Product
											</Button>
										</div>
										<div className="flex justify-between items-center w-1/3">
											<Button
												className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
												type="button"
												onClick={onClose}
											>
												Cancel
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

export default AddProductModal;
