import { Link } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import { useUpdateBrandMutation } from '../../features/brand/brandApi';
import { useGetOrderQuery } from '../../features/order/orderApi';

const OrdersListAdminPage = () => {
	const { data, isLoading, isError } = useGetOrderQuery();
	const ordersData = data;
	// eslint-disable-next-line no-unused-vars
	const [updateOrder] = useUpdateBrandMutation();

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Orders List</h2>
				{isError && <p>Error loading orders.</p>}
				{isLoading ? (
					<p>Loading orders...</p>
				) : (
					<div>
						<table className="w-full bg-white rounded-lg shadow-lg">
							<thead>
								<tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
									<th className="py-3 px-4">Order ID</th>
									<th className="py-3 px-4">Total Amount</th>
									<th className="py-3 px-4">Status</th>
								</tr>
							</thead>
							<tbody>
								{ordersData.map((order) => (
									// eslint-disable-next-line no-underscore-dangle
									<tr key={order._id} className="border-b border-gray-200">
										<td className="py-3 px-4">
											<Link
												// eslint-disable-next-line no-underscore-dangle
												to={`/dashboard/order/${order?._id}`}
												className="text-blue-500 hover:underline"
											>
												{/* eslint-disable-next-line no-underscore-dangle */}
												{order._id}
											</Link>
										</td>

										<td className="py-3 px-4">${order?.totalAmount}</td>
										<td className="py-3 px-4 capitalize">{order?.status}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{/* Pagination */}
				<div className="flex justify-center mt-4">
					<nav className="flex items-center justify-between">
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Previous</Button>
						<span className="mx-2 text-gray-700">Page 1 of 5</span>
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Next</Button>
					</nav>
				</div>

				{/* Modal */}
				{/* ... Add your modal component here */}
			</div>
		</div>
	);
};

export default OrdersListAdminPage;
