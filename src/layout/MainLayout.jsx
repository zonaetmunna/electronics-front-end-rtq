import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import CartModal from '../components/organisms/CartModal';
import FooterSeconed from '../components/templates/FooterSeconed';
import NavigationBar from '../components/templates/NavigationBar';
import { useGetCategoriesQuery } from '../features/category/categoryApi';

const MainLayout = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { data } = useGetCategoriesQuery({});
	const categories = data;
	const handleCartClick = () => {
		setIsCartOpen(true);
	};

	const handleCartModalClose = () => {
		setIsCartOpen(false);
	};
	return (
		<div className="flex flex-col min-h-[100vh]">
			<NavigationBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				onCartClick={handleCartClick}
				categories={categories}
			/>
			<div style={{ flex: 1 }}>
				<Outlet />
			</div>
			<FooterSeconed />
			{isCartOpen && <CartModal onClose={handleCartModalClose} />}
		</div>
	);
};

export default MainLayout;
