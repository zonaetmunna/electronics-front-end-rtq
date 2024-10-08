// import { useGetUserOrderQuery } from '../../features/order/orderApi';

const ProfileOrdersPage = () => {
	// const { user } = useSelector((state) => state.auth);
	// const { data, isLoading, isError, isSuccess } = useGetUserOrderQuery(user?.userId);
	// const orderData = data;

	/* useEffect(() => {
		if (isSuccess) {
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
	}, [isSuccess, isLoading, orderData, isError]); */

	return (
		<div className="rounded-lg shadow p-6">
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
					{/* <tbody>
						{orderData &&
							orderData?.map((order) => (
								<tr key={order._id} className="border-t border-gray-200">
									<td className="py-2 px-4">{order._id}</td>
									<td className="py-2 px-4">{order.status}</td>
									<td className="py-2 px-4">${order.totalAmount.toFixed(2)}</td>
								</tr>
							))}
					</tbody> */}
				</table>
			</div>
		</div>
	);
};

export default ProfileOrdersPage;
