import { Outlet } from 'react-router-dom';

import UserSidebar from '../components/templates/UserSidebar';

const ProfileLayout = () => {
	return (
		<div className="flex  bg-white container mx-auto my-5">
			<UserSidebar />
			<div className="flex-1  ml-5 ">
				<div className="bg-gray-100">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default ProfileLayout;
