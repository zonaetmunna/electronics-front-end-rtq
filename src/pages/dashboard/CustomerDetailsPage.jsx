import { useParams } from 'react-router-dom';

import { useGetUserQuery } from '../../features/auth/authApi';

const CustomerDetailsPage = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useGetUserQuery(id);
	const user = data;

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				{isError && <p>Error loading customer details: {error.message}</p>}
				{isLoading ? (
					<p>Loading customer details...</p>
				) : (
					<div>
						<h2 className="text-2xl font-semibold mb-4">Customer Details - {user?.firstName}</h2>
						<div className="bg-white rounded-lg shadow-lg p-4">
							<p>
								{/* eslint-disable-next-line no-underscore-dangle */}
								<strong>Customer ID:</strong> {user?._id}
							</p>
							<p>
								<strong>First Name:</strong> {user.firstName}
							</p>
							<p>
								<strong>Email:</strong> {user.email}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomerDetailsPage;
