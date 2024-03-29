import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { setSelectedCategory } from '../../features/filter/filterSlice';

const NavSecond = ({ categories }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

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

	return (
		<nav className="bg-white py-3 px-4 shadow-md">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between">
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
				</div>
			</div>
		</nav>
	);
};

export default NavSecond;
