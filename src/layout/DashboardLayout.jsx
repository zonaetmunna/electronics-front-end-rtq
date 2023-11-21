import { Outlet } from 'react-router-dom';

import DashboardNavbar from '../components/templates/DashboardNavbar';
import DashboardSidebar from '../components/templates/DashboardSidebar';

const DashboardLayout = () => {
	return (
		<>
			<DashboardNavbar />
			<div className="flex h-screen">
				<DashboardSidebar />
				<div className="flex-grow bg-gray-100 p-6 shadow-md rounded-md ml-5">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
