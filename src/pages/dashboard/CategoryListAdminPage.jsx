/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import { useGetCategoriesQuery } from '../../features/category/categoryApi';

const CategoryListAdminPage = () => {
	const { data, isLoading, isError, error } = useGetCategoriesQuery({});
	const categories = data;

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className=" px-4">
				<h2 className="text-2xl font-semibold mb-4">Category List</h2>

				<div className="flex justify-end mb-4">
					<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
						Add Category
					</Button>
				</div>
				{isError && <p>Error loading categories: {error.message}</p>}
				{isLoading ? (
					<p>Loading categories...</p>
				) : (
					<table className="w-full bg-white rounded-lg shadow-lg">
						<thead>
							<tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
								<th className="py-3 px-4">Category ID</th>
								<th className="py-3 px-4">Category Name</th>
								{/* ... other columns */}
							</tr>
						</thead>
						<tbody>
							{categories?.map((category) => (
								<tr key={category._id} className="border-b border-gray-200">
									<td className="py-3 px-4">
										<Link to={`/dashboard/category/${category?._id}`}>{category._id}</Link>
									</td>
									<td className="py-3 px-4">{category.name}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}

				{/* Pagination */}
				<div className="flex justify-center mt-4">{/* ... Pagination component */}</div>

				{/* Others Modal */}
				{/* ... Add your modal component here */}
			</div>
		</div>
	);
};

export default CategoryListAdminPage;
