import { Outlet } from 'react-router-dom';

import SettingSidebar from '../components/templates/SettingSidebar';

const SettingAdminLayout = () => {
	return (
		<div className="flex relative bg-orange-300 text-dark">
			<SettingSidebar />
			<div className="flex-grow bg-gray-300 p-6 ">
				<Outlet />
			</div>
		</div>
	);
};

export default SettingAdminLayout;
