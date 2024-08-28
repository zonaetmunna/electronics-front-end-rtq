// import { useGetUsersQuery } from '../../features/auth/authApi';

import { useState } from 'react';

import Button from '../../../components/atoms/Button';
import CustomerTableDashboard from '../../../components/features/customer/CustomerTableDashboard';
import { useGetAllCustomersQuery } from '../../../features/customer/customerApi';

const CustomerListPage = () => {
	const [params, setParams] = useState([]);
	console.log('🚀 ~ CustomerListPage ~ setParams:', setParams);
	const [page, setPage] = useState(1);
	console.log('🚀 ~ CustomerListPage ~ setPage:', setPage);
	const {
		data: customerData,
		isLoading,
		isFetching,
	} = useGetAllCustomersQuery([
		{ name: 'page', value: page },
		{ name: 'sort', value: 'id' },
		...params,
	]);

	console.log('🚀 ~ AdminList ~ adminData:', customerData);

	console.log({ isLoading, isFetching });

	const metaData = customerData?.meta;
	const customers = customerData?.data;

	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold mb-4">Customer-List</h2>
			<hr className="border-gray-200 my-2" />
			<div className="flex justify-end mb-4">
				<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
					Create Customer
				</Button>
			</div>
			<CustomerTableDashboard metaData={metaData} customers={customers} />
		</div>
	);
};

export default CustomerListPage;
