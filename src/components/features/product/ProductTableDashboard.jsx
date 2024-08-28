import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../../features/theme/modalSlice';
import Button from '../../atoms/Button';

/* eslint-disable no-underscore-dangle */
const ProductTableDashboard = ({
	products,
	filteredProducts,
	handleProductSelect,
	handleDeleteModalOpen,
}) => {
	const dispatch = useDispatch();

	return (
		<table className="min-w-full">
			<thead>
				<tr>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Name
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Description
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Category
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Brand
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Price
					</th>

					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						stockQuantity
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Stock
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Actions
					</th>
				</tr>
			</thead>
			<tbody className="">
				{products &&
					filteredProducts?.map((product) => (
						<tr key={product?._id}>
							<td className="px-6 py-4 whitespace-no-wrap ">
								<Link to={`/dashboard/product/${product?._id}`}>
									<div className="flex items-center">
										<div className="ml-4">
											<div className="text-sm leading-5 font-medium text-gray-900">
												{product?.name}
											</div>
										</div>
									</div>
								</Link>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">{product?.description}</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">
											{product?.category?.name}
										</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">{product?.brand?.name}</div>
									</div>
								</div>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">${product?.stockQuantity}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">${product?.price}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">{product?.stock}</div>
							</td>
							<td>
								<div className="px-3 py-3">
									<Button
										type="button"
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
										onClick={() => {
											dispatch(openModal('editProductModal'));
											handleProductSelect(product);
										}}
									>
										<FaEdit />
									</Button>
									<Button
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
										onClick={() => {
											handleProductSelect(product);
											handleDeleteModalOpen();
										}}
									>
										<FaTrash />
									</Button>
								</div>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default ProductTableDashboard;
