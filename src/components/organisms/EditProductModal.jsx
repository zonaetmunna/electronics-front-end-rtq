import { useForm } from 'react-hook-form';

import Button from '../atoms/Button';
import Label from '../atoms/Label';
import Modal from '../ui/modal/Modal';

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
		<Modal title="Edit Product" isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
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
						{errors.name && <p className="text-red-500 text-sm mt-1">This field is required</p>}
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
			</form>
		</Modal>
	);
};

export default EditProductModal;
