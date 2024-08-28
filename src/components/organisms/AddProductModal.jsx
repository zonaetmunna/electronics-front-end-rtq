import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Select from 'react-select';

import Button from '../atoms/Button';
import Label from '../atoms/Label';
import Modal from '../ui/modal/Modal';

const AddProductModal = ({ categories, brands, onSubmit, isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const categoriesOption = categories?.map((category) => ({
		// eslint-disable-next-line no-underscore-dangle
		value: category._id,
		label: category.name,
	}));
	const brandsOption = brands?.map((brand) => ({
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
		<Modal title="Add Product" isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
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
						{errors.stockQuantity && <p className="text-red-500">{errors.stockQuantity.message}</p>}
					</div>
				</div>

				<div className="flex justify-between">
					<div className="justify-between items-center w-1/3">
						<Button
							type="submit"
							className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
						>
							Add Product
						</Button>
					</div>
				</div>
			</form>
		</Modal>
	);
};

export default AddProductModal;
