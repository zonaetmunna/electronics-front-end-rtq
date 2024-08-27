import { useState } from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { VscAccount, VscListOrdered, VscSettingsGear } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../features/auth/authSlice';
import Button from '../atoms/Button';

const UserSidebar = () => {
	// eslint-disable-next-line no-unused-vars
	const [isOpen, setIsOpen] = useState(true);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	/* const toggleSidebar = () => {
    setIsOpen(isOpen);
  }; */

	const handleSignOut = () => {
		dispatch(logout());
	};

	return (
		<div
			className={`user-sidebar rounded-lg shadow-md ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} bg-gray-100 border-r border-gray-300 max-h-[90vh] w-72  transform transition-transform ease-in-out duration-300 z-50`}
		>
			{/* <button className="toggle-button p-4" onClick={toggleSidebar}>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
        <div className="bar h-1 w-6 bg-gray-600 my-1"></div>
      </button> */}
			<div className="sidebar-content p-4">
				<div className="user-info flex items-center p-4 border-b border-gray-300">
					<div className="avatar w-10 h-10 bg-gray-500 rounded-full mr-3">
						{/* <img src={image} alt="logo" className="w-full h-full rounded-full shadow-lg" /> */}
					</div>
					<h3 className="text-lg font-semibold">{user?.role}</h3>
				</div>
				<ul className="sidebar-menu py-4">
					{/* profile information */}
					<li className="sidebar-menu-item">
						<Link to="/profile" className="flex items-center py-2 px-4 hover:bg-gray-100">
							<VscAccount size={20} className="mr-2" />
							<span>Your Profile</span>
						</Link>
					</li>
					{/* orders */}
					<li className="sidebar-menu-item">
						<Link to="orders" className="flex items-center py-2 px-4 hover:bg-gray-100">
							<VscListOrdered size={20} className="mr-2" />
							<span className="mr-2">Your Orders</span>
						</Link>
					</li>
					{/* message */}
					<li className="sidebar-menu-item">
						<Link to="messages" className="flex items-center py-2 px-4 hover:bg-gray-100">
							<VscListOrdered size={20} className="mr-2" />
							<span className="mr-2">Message</span>
						</Link>
					</li>
					{/* notification */}
					<li className="sidebar-menu-item">
						<Link to="notification" className="flex items-center py-2 px-4 hover:bg-gray-100">
							<VscListOrdered size={20} className="mr-2" />
							<span className="mr-2">Notification</span>
						</Link>
					</li>
					{/* settings */}
					<li className="sidebar-menu-item">
						<Link to="settings" className="flex items-center py-2 px-4 hover:bg-gray-100">
							<VscSettingsGear size={20} className="mr-2" />
							<span>Settings</span>
						</Link>
					</li>
					{/* logout */}
					<li className="sidebar-menu-item">
						<Button
							onClick={handleSignOut}
							className="logout-button flex items-center py-2 px-4 hover:bg-gray-100"
						>
							<RiLogoutCircleRLine size={20} className="mr-2" />
							<span>Logout</span>
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserSidebar;
