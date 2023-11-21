import MiniNavbar from './MiniNavbar';
import Navbar from './Navbar';
import NavSecond from './NavSecond';

const NavigationBar = ({ onCartClick, searchQuery, setSearchQuery, categories }) => {
	return (
		<div className="shadow-md">
			<MiniNavbar />
			<Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onCartClick={onCartClick} />
			<NavSecond categories={categories} />
		</div>
	);
};

export default NavigationBar;
