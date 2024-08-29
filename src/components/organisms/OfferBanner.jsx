import { useNavigate } from 'react-router-dom';

import Button from '../atoms/Button';

const OfferBanner = () => {
	const navigate = useNavigate();
	return (
		<div className="my-10">
			<div className="bg-gray-100 mx-auto container py-10 px-8 rounded-lg flex justify-center items-center">
				<img
					src="https://live.staticflickr.com/65535/52521844202_dd853335c9_o.jpg"
					alt="Offer Banner"
					className="w-40 h-40 rounded-full mr-8 border-2 border-blue-500"
				/>
				<div>
					<h2 className="text-3xl font-bold mb-2 text-gray-800">Limited Time Offer</h2>
					<p className="text-gray-700 mb-4">
						Get <span className="text-blue-500 font-bold">10% off</span> on all products. Use code{' '}
						<span className="text-blue-500 font-bold">LIMITED10</span> at checkout.
					</p>
					<Button
						onClick={() => navigate('shop')}
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
					>
						Shop Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OfferBanner;
