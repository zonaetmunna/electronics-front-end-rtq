import { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';

import logo from '../../assets/logo/brand-logo.png';
import { logout } from '../../features/auth/authSlice';
import { setSelectedCategory } from '../../features/filter/filterSlice';
import Button from '../atoms/Button';

const Navbar = ({ onCartClick, searchQuery, setSearchQuery, categories }) => {
	const { user } = useSelector((state) => state.auth);
	const { cart } = useSelector((state) => state.cart);
	const { wishlist } = useSelector((state) => state.wishlist);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();

	const customSelectStyles = {
		control: (base) => ({
			...base,
			backgroundColor: 'white',
			border: 'none',
			boxShadow: 'none',
			cursor: 'pointer',
			height: '36px',
		}),
	};

	const categoryOptions = categories?.map((category) => ({
		value: category.name,
		label: category.name,
	}));

	const handleSelectChange = (selectedOption) => {
		const selectedCategory = selectedOption.value;
		dispatch(setSelectedCategory(selectedCategory));
		navigate(`/shop/${selectedCategory}`);
	};

	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const handleSearchQueryChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/shop/${searchQuery}`);
	};

	const handleSignOut = () => {
		dispatch(logout());
	};

	const handleBlur = () => {
		setShowProfileMenu(false);
	};

	return (
		<div className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-3">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center">
						<Link to="/" className="text-gray-800 hover:text-gray-600">
							<img src={logo} alt="Logo" className="h-12 w-12" />
						</Link>
					</div>

					<form onSubmit={handleSearchSubmit} className="w-full sm:w-auto mt-4 sm:mt-0">
						<div className="relative">
							<input
								type="search"
								id="default-search"
								placeholder="Search..."
								value={searchQuery}
								onChange={handleSearchQueryChange}
								className="block w-full p-2 sm:p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
								required
							/>
							<Button
								type="submit"
								className="absolute top-0 right-0 mt-2 mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
							>
								Search
							</Button>
						</div>
					</form>

					<Select
						options={categoryOptions}
						onChange={handleSelectChange}
						className="w-full md:w-1/4"
						styles={customSelectStyles}
					/>

					<div className="ml-0 mt-3 md:ml-3 md:mt-0">
						<ul className="flex flex-wrap md:flex-nowrap">
							<li className="mr-6 mb-2 md:mb-0">
								<Link
									to="/"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/' ? 'border-b-2 border-black' : ''
									}`}
								>
									Home
								</Link>
							</li>
							<li className="mr-6 mb-2 md:mb-0">
								<Link
									to="/products"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/shop' ? 'border-b-2 border-black' : ''
									}`}
								>
									Products
								</Link>
							</li>
							<li className="mr-6">
								<Link
									to="contact"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/contact' ? 'border-b-2 border-black' : ''
									}`}
								>
									Contact
								</Link>
							</li>
							<li className="mr-6">
								<Link
									to="privacy-policy"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/privacy-policy' ? 'border-b-2 border-black' : ''
									}`}
								>
									Privacy-Policy
								</Link>
							</li>
							<li className="mr-6">
								<Link
									to="terms"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/terms' ? 'border-b-2 border-black' : ''
									}`}
								>
									Terms&Condition
								</Link>
							</li>
							<li className="mr-6">
								<Link
									to="blog"
									className={`text-gray-800 hover:text-gray-600 transition duration-200 ${
										location.pathname === '/blog' ? 'border-b-2 border-black' : ''
									}`}
								>
									Our-Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex items-center space-x-4 mt-4 sm:mt-0">
						<Link to="/wishlist" className="text-gray-800 hover:text-gray-600">
							<div className="relative">
								<FaHeart size={22} className="text-blue-500" />
								{wishlist.length > 0 && (
									<span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
										{wishlist.length}
									</span>
								)}
							</div>
						</Link>

						<Button onClick={onCartClick} className="text-gray-800 hover:text-gray-600">
							<div className="relative">
								<FaShoppingCart size={22} className="text-blue-500" />
								{cart.length > 0 && (
									<span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
										{cart.length}
									</span>
								)}
							</div>
						</Button>

						{/* for admin,manger,super-admin */}
						{user ? (
							<div className="relative">
								{user.role === 'superAdmin' || user.role === 'admin' || user.role === 'manager' ? (
									<Link
										to="/dashboard"
										className="mr-6 hover:text-gray-500 flex gap-1 items-center"
									>
										<span className="text-gray-500">Dashboard</span>
										<Button
											type="button"
											className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 "
											onClick={handleSignOut}
										>
											Sign Out
										</Button>
									</Link>
								) : (
									<Button
										onClick={() => setShowProfileMenu(!showProfileMenu)}
										onBlur={handleBlur}
										className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 "
									>
										<VscAccount size={20} />
										<span className="ml-2">{user.role}</span>
									</Button>
								)}
								{showProfileMenu && (
									<div className="absolute top-12 right-0 px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow">
										<Link
											to="profile"
											className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-100"
										>
											Profile
										</Link>
										<Button
											type="button"
											className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-100 "
											onClick={handleSignOut}
										>
											Sign Out
										</Button>
									</div>
								)}
							</div>
						) : (
							// Only show the "Log In" button if the user is not logged in
							<Link
								to="/login"
								className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300"
							>
								Log In
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
// export
export default Navbar;
