import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Loading from '../../components/atoms/SpinnerLoading';
import { useGetUserOrderQuery } from '../../features/order/orderApi';

const ProfileOrdersPage = () => {
	const {
		user: { _id },
	} = useSelector((state) => state.auth);
	const { data, isLoading, isError, isSuccess } = useGetUserOrderQuery(_id);
	const orderData = data;

	useEffect(() => {
		if (isSuccess) {
			// eslint-disable-next-line no-console
			console.log(orderData);
		}
		if (isLoading) {
			return <Loading />;
		}
		if (isError) {
			return <p>{isError.message}</p>;
		}
		// modify the code
		return () => {};
	}, [isSuccess, isLoading, orderData, isError]);

	return (
		<div className="bg-white rounded-lg shadow p-6">
			<h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr>
							<th className="py-2 px-4 text-left">Order ID</th>
							<th className="py-2 px-4 text-left">Status</th>
							<th className="py-2 px-4 text-left">Total Amount</th>
							{/* ... other header columns */}
						</tr>
					</thead>
					<tbody>
						{orderData &&
							orderData?.map((order) => (
								// eslint-disable-next-line no-underscore-dangle
								<tr key={order._id} className="border-t border-gray-200">
									{/* eslint-disable-next-line no-underscore-dangle */}
									<td className="py-2 px-4">{order._id}</td>
									<td className="py-2 px-4">{order.status}</td>
									<td className="py-2 px-4">${order.totalAmount.toFixed(2)}</td>
									{/* ... other columns */}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProfileOrdersPage;
