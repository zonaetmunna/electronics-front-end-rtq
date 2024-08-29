import { FaRProject, FaShippingFast } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';

const ProductDeliveryProcessBanner = () => {
	const deliveryProcessData = [
		{
			id: 1,
			icon: <FaShippingFast size={30} className="text-yellow-500" />,
			title: 'Free Shipping',
			description: 'When ordering over $100',
			backgroundColor: 'bg-blue-600',
		},
		{
			id: 2,
			icon: <IoIosAddCircle size={30} className="text-yellow-500" />,
			title: 'Free Return',
			description: 'Get Return within 30 days',
			backgroundColor: 'bg-green-600',
		},
		{
			id: 3,
			icon: <GrSecure size={30} className="text-yellow-500" />,
			title: 'Secure Payment',
			description: '100% Secure Online Payment',
			backgroundColor: 'bg-purple-600',
		},
		{
			id: 4,
			icon: <FaRProject size={30} className="text-yellow-500" />,
			title: 'Best Quality',
			description: 'Original Product Guaranteed',
			backgroundColor: 'bg-red-600',
		},
	];

	return (
		<div className="my-10">
			<div className="container mx-auto border-t-2 border-b-2 px-4  border-gray-200 py-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded shadow-md">
					{deliveryProcessData.map((process) => (
						<div
							key={process.id}
							className={`flex justify-around items-center px-2 py-2 h-[100px] rounded ${process.backgroundColor}`}
						>
							<div>{process.icon}</div>
							<div className="">
								<h4 className="text-lg font-semibold text-white">{process.title}</h4>
								<p className="text-sm text-gray-300">{process.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDeliveryProcessBanner;
