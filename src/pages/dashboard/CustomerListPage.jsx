// import { useGetUsersQuery } from '../../features/auth/authApi';

const CustomerListPage = () => {
	// const { data, isLoading, isError, error } = useGetUsersQuery();
	// const users = data;

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			{/* <div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Customer List</h2>
				{isError && <p>Error loading customer data: {error.message}</p>}
				{isLoading ? (
					<p>Loading customer data...</p>
				) : (
					<div>
						<table className="w-full bg-white rounded-lg shadow-lg">
							<thead>
								<tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
									<th className="py-3 px-4">Customer ID</th>
									<th className="py-3 px-4">First Name</th>
									<th className="py-3 px-4">Last Name</th>
									<th className="py-3 px-4">Email</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									<tr key={user._id} className="border-b border-gray-200">
										<td className="py-3 px-4">
											<Link to={`/dashboard/customer/${user._id}`}>{user._id}</Link>
										</td>
										<td className="py-3 px-4">{user.firstName}</td>
										<td className="py-3 px-4">{user.lastName}</td>
										<td className="py-3 px-4">{user.email}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				<div className="flex justify-center mt-4">
					<nav className="flex items-center justify-between">
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Previous</Button>
						<span className="mx-2 text-gray-700">Page 1 of 5</span>
						<Button className="py-1 px-3 bg-gray-200 rounded-lg">Next</Button>
					</nav>
				</div>

			</div> */}
		</div>
	);
};

export default CustomerListPage;
