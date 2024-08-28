import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubMenu = ({ isOpen, items, isCollapsed }) => {
	const isDarkMode = useSelector((state) => state.settings.darkMode);

	return (
		<div className={`ml-4 ${isOpen ? '' : 'hidden'}`}>
			{items.map(({ to, icon, label }) => (
				<Link
					key={to}
					to={to}
					className={`flex items-center py-2 px-4  ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-md transition-colors duration-200`}
				>
					<span className="mr-2">{icon}</span>
					<span className={`${isCollapsed ? 'hidden' : ''}`}>{label}</span>
				</Link>
			))}
		</div>
	);
};

export default SubMenu;
