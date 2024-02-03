import { FaBell, FaShareAlt, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SettingSidebar = () => {
	return (
		<div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 relative inset-y-0 left-0">
			<nav>
				<ul className="mt-10">
					<li className="py-2">
						<Link to="personal-information">
							<span className="flex items-center">
								<FaUserAlt className="mr-2" /> Personal Information
							</span>
						</Link>
					</li>
					<li className="py-2">
						<Link to="notification-setting">
							<span className="flex items-center">
								<FaBell className="mr-2" /> Notification Settings
							</span>
						</Link>
					</li>
					<li className="py-2">
						<Link to="login-activity-settings">
							<span className="flex items-center">
								<FaSignInAlt className="mr-2" /> Login Activity
							</span>
						</Link>
					</li>
					<li className="py-2">
						<Link to="connect-media-setting">
							<span className="flex items-center">
								<FaShareAlt className="mr-2" /> Connect Social Media
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SettingSidebar;
