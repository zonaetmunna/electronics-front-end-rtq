import { useState } from 'react';

import Button from '../../../components/atoms/Button';
import AdminTableDashboard from '../../../components/features/admin/AdminTableDashboard';
import { useGetAllAdminsQuery } from '../../../features/admin/adminApi';

const AdminList = () => {
	const [params, setParams] = useState([]);
	console.log('🚀 ~ AdminList ~ setParams:', setParams);
	const [page, setPage] = useState(1);
	console.log('🚀 ~ AdminList ~ setPage:', setPage);
	const {
		data: adminData,
		isLoading,
		isFetching,
	} = useGetAllAdminsQuery([
		{ name: 'page', value: page },
		{ name: 'sort', value: 'id' },
		...params,
	]);

	console.log('🚀 ~ AdminList ~ adminData:', adminData);

	console.log({ isLoading, isFetching });

	const metaData = adminData?.meta;
	const admins = adminData?.data;

	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold mb-4">Admin-List</h2>
			<hr className="border-gray-200 my-2" />
			<div className="flex justify-end mb-4">
				<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
					Create Admin
				</Button>
			</div>
			<AdminTableDashboard metaData={metaData} admins={admins} />
		</div>
	);
};

export default AdminList;
