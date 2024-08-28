/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';

import Button from '../../../components/atoms/Button';
import { useGetBrandsQuery } from '../../../features/brand/brandApi';

const BrandsListAdminPage = () => {
	const { data } = useGetBrandsQuery({});
	const brands = data;

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Brands List</h2>

				<div className="flex justify-end mb-4">
					<Button
						// onClick={}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
					>
						Add Brand
					</Button>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full bg-white rounded-lg shadow-lg">
						<thead>
							<tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
								<th className="py-3 px-4">Brand ID</th>
								<th className="py-3 px-4">Brand Name</th>
								<th className="py-3 px-4">Brand Description</th>
							</tr>
						</thead>
						<tbody>
							{brands &&
								brands.map((brand) => (
									<tr key={brand._id} className="border-b border-gray-200">
										<td className="py-3 px-4">
											<Link to={`/dashboard/brand/${brand?._id}`}>{brand._id}</Link>
										</td>
										<td className="py-3 px-4">{brand.name}</td>
										<td className="py-3 px-4">{brand.description}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>

				<div className="flex justify-center mt-4">
					<nav className="flex items-center justify-between">
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Previous</Button>
						<span className="mx-2 text-gray-700">Page 1 of 5</span>
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Next</Button>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default BrandsListAdminPage;
