import { useParams } from 'react-router-dom';

import { useGetBrandQuery } from '../../../features/brand/brandApi';

const BrandDetailsAdminPage = () => {
	const { id } = useParams();
	// redux toolkit query api call
	const { data, isLoading, isError } = useGetBrandQuery(id);
	const brand = data;
	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-4">Brand Details</h2>
				{isError && <p className="text-center text-red-500">Error loading brand details.</p>}
				{isLoading ? (
					<p className="text-center text-gray-600">Loading brand details...</p>
				) : (
					<div>
						<p className="font-semibold">Brand ID:</p>
						{/* eslint-disable-next-line no-underscore-dangle */}
						<p>{brand?._id}</p>
						<p className="font-semibold">Brand Name:</p>
						<p>{brand?.name}</p>
						{/* ... other brand details */}
					</div>
				)}

				{/* ... other components */}
			</div>
		</div>
	);
};

export default BrandDetailsAdminPage;
