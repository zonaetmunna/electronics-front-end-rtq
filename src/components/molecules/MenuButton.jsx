import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Button from '../atoms/Button';

const MenuButton = ({ icon, label, isOpen, onClick, isCollapsed }) => {
	const isDarkMode = useSelector((state) => state.settings.darkMode);

	return (
		<Button
			type="button"
			className={`flex items-center py-2 px-4  ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-md transition-colors duration-200 w-full`}
			onClick={onClick}
		>
			<span className="flex items-center gap-2">
				<span className="mr-2">{icon}</span>
				<span className={`${isCollapsed ? 'hidden' : ''}`}>{label}</span>
			</span>

			{isOpen !== undefined &&
				(isOpen ? (
					<FaChevronUp className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
				) : (
					<FaChevronDown className={`ml-auto ${isCollapsed ? 'hidden' : ''}`} />
				))}
		</Button>
	);
};

export default MenuButton;
