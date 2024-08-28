import { useParams } from 'react-router-dom';

import { useGetSingleProductQuery } from '../../../features/product/productApi';

const ProductDetailsAdminPage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetSingleProductQuery(id);
	const product = data?.data;
	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Product Details</h2>
				{isError && <p>Error loading product details: {error.message}</p>}
				{isLoading ? (
					<p>Loading product details...</p>
				) : (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-lg font-semibold mb-2">{product?.name}</h3>
						<p className="text-gray-600 mb-4">${product?.price}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetailsAdminPage;
