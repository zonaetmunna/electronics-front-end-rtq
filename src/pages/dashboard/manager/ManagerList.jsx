import { useState } from 'react';

import Button from '../../../components/atoms/Button';
import ManagerTableDashboard from '../../../components/features/manager/ManagerTableDashboard';
import { useGetAllManagersQuery } from '../../../features/manager/managerApi';

const ManagerList = () => {
	const [params, setParams] = useState([]);
	console.log('🚀 ~ AdminList ~ setParams:', setParams);
	const [page, setPage] = useState(1);
	console.log('🚀 ~ AdminList ~ setPage:', setPage);
	const {
		data: managerData,
		isLoading,
		isFetching,
	} = useGetAllManagersQuery([
		{ name: 'page', value: page },
		{ name: 'sort', value: 'id' },
		...params,
	]);

	console.log('🚀 ~ AdminList ~ adminData:', managerData);

	console.log({ isLoading, isFetching });

	const metaData = managerData?.meta;
	const managers = managerData?.data;

	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold mb-4">Manager-List</h2>
			<hr className="border-gray-200 my-2" />
			<div className="flex justify-end mb-4">
				<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
					Create Manager
				</Button>
			</div>
			<ManagerTableDashboard metaData={metaData} managers={managers} />
		</div>
	);
};

export default ManagerList;
