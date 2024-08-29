import MiniNavbar from './MiniNavbar';
import Navbar from './Navbar';

const NavigationBar = ({ onCartClick, searchQuery, setSearchQuery, categories }) => {
	return (
		<div className="shadow-md">
			<MiniNavbar />
			<Navbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				categories={categories}
				onCartClick={onCartClick}
			/>
			{/* <NavSecond categories={categories} /> */}
		</div>
	);
};

export default NavigationBar;
