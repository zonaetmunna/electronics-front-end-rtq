import { useParams } from 'react-router-dom';

import { useGetCategoryQuery } from '../../../features/category/categoryApi';

const CategoryDetailsAdminPage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetCategoryQuery(id);
	const category = data;

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Category Details</h2>

				<div className="bg-white p-6 rounded-lg shadow-md">
					{isError && (
						<p className="text-red-500">Error loading category details: {error.message}</p>
					)}
					{isLoading ? (
						<p>Loading category details...</p>
					) : (
						<div>
							{/* eslint-disable-next-line no-underscore-dangle */}
							<p className="text-gray-700 mb-2">Category ID: {category?._id}</p>
							<p className="text-gray-700 mb-2">Name: {category?.name}</p>
							<p className="text-gray-700">Description: {category?.description}</p>
						</div>
					)}
				</div>

				<div className="mt-4">
					<h3 className="text-xl font-semibold mb-2">Products in this Category</h3>
					{category?.products?.length > 0 ? (
						<ul className="list-disc pl-6">
							{category.products.map((product) => (
								// eslint-disable-next-line no-underscore-dangle
								<li key={product._id} className="text-gray-700">
									{product.name}
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-700">No products found in this category.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryDetailsAdminPage;
