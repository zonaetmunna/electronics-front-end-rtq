import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Button from '../../../components/atoms/Button';
import Label from '../../../components/atoms/Label';
import { useAddProductMutation } from '../../../features/product/productApi';

const ProductAddAdminPage = () => {
	const { register, handleSubmit, reset } = useForm();
	const [addProduct, { isError, error, isLoading, isSuccess }] = useAddProductMutation();

	useEffect(() => {
		if (isLoading) {
			toast.loading('posting.....', { id: 'addProduct' });
		}

		if (isSuccess) {
			toast.success('product added ', { id: 'addProduct' });
			reset();
		}
	}, [isLoading, isSuccess, reset]);

	const submitData = (data) => {
		const product = {
			model: data.model,
			image: data.image,
			brand: data.brand,
			price: data.price,
			status: data.status === 'true',
			keyFeature: [data.keyFeature1, data.keyFeature2, data.keyFeature3, data.keyFeature4],
			spec: [
				data.processor,
				data.motherboard,
				data.ram,
				data.graphics,
				data.storage,
				data.casing,
				data.psu,
			],
		};
		addProduct(product);
	};

	useEffect(() => {
		if (isError) {
			toast.error(error);
		}
	}, [isError, error]);

	return (
		<div className="flex justify-center items-center h-full ">
			<form
				className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
				onSubmit={handleSubmit(submitData)}
			>
				{/* model */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="model">
						Model
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" id="model" {...register('model')} required />
				</div>
				{/* image */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="image">
						Image
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="image" id="image" {...register('image')} required />
				</div>
				{/* brand */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-3" htmlFor="brand">
						Brand
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<select name="brand" id="brand" {...register('brand')} required>
						<option value="amd">AMD</option>
						<option value="intel">Intel</option>
					</select>
				</div>
				{/* price */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="price">
						Price
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="number" name="price" id="price" {...register('price')} required />
				</div>
				{/* status */}
				<div className="flex flex-col w-full max-w-xs">
					<h1 className="mb-3">Availability</h1>
					<div className="flex gap-3">
						<div>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<input type="radio" id="available" value {...register('status')} required />
							<Label className="ml-2 text-lg" htmlFor="available">
								Available
							</Label>
						</div>
						<div>
							<input
								type="radio"
								id="stockOut"
								name="status"
								value={false}
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...register('status')}
								required
							/>
							<Label className="ml-2 text-lg" htmlFor="stockOut">
								Stock out
							</Label>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-xs" />
				{/* feature 1 */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="keyFeature1">
						Key Feature 1
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="keyFeature1" id="keyFeature1" {...register('keyFeature1')} />
				</div>
				{/* feature 2 */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="keyFeature2">
						Key Feature 2
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="keyFeature2" id="keyFeature2" {...register('keyFeature2')} />
				</div>
				{/* feature 3 */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="keyFeature3">
						Key Feature 3
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="keyFeature3" id="keyFeature3" {...register('keyFeature3')} />
				</div>
				{/* feature 4 */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="keyFeature4">
						Key Feature 4
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="keyFeature4" id="keyFeature4" {...register('keyFeature4')} />
				</div>
				{/* sec processor */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="processor">
						processor
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="processor" id="processor" {...register('processor')} />
				</div>
				{/* sec motherboard */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="motherboard">
						motherboard
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="motherboard" id="motherboard" {...register('motherboard')} />
				</div>
				{/* sec ram */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="ram">
						ram
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="ram" id="ram" {...register('ram')} />
				</div>
				{/* sec graphics */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="graphics">
						graphics
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="graphics" id="graphics" {...register('graphics')} />
				</div>
				{/* sec storage */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="storage">
						storage
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="storage" id="storage" {...register('storage')} />
				</div>
				{/* sec casing */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="casing">
						casing
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="casing" id="casing" {...register('casing')} />
				</div>
				{/* sec psu */}
				<div className="flex flex-col w-full max-w-xs">
					<Label className="mb-2" htmlFor="psu">
						psu
					</Label>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<input type="text" name="psu" id="psu" {...register('psu')} />
				</div>
				{/* submit button */}
				<div className="flex justify-between items-center w-full">
					<Button
						className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
						type="submit"
					>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ProductAddAdminPage;
