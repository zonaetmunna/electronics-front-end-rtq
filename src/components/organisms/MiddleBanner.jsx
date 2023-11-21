import { FaRProject, FaShippingFast } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';

const MiddleBanner = () => {
	return (
		<div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded shadow-md bg-gray-100 h-auto p-4 my-5">
				<div className="flex justify-around items-center px-2 py-2 rounded bg-blue-600">
					<div>
						<FaShippingFast size={30} className="text-yellow-500" />
					</div>
					<div className="mx-4">
						<h4 className="text-lg font-semibold text-white">Free Shipping</h4>
						<p className="text-sm text-gray-300">When ordering over $100</p>
					</div>
				</div>
				<div className="flex justify-around items-center px-2 py-2 rounded bg-green-600">
					<div>
						<IoIosAddCircle size={30} className="text-yellow-500" />
					</div>
					<div>
						<h4 className="text-lg font-semibold text-white">Free Return</h4>
						<p className="text-sm text-gray-300">Get Return within 30 days</p>
					</div>
				</div>
				<div className="flex justify-around items-center px-2 py-2 rounded bg-purple-600">
					<div>
						<GrSecure size={30} className="text-yellow-500" />
					</div>
					<div>
						<h4 className="text-lg font-semibold text-white">Secure Payment</h4>
						<p className="text-sm text-gray-300">100% Secure Online Payment</p>
					</div>
				</div>
				{/*  */}
				<div className="flex justify-around items-center px-2 py-2 rounded bg-red-600">
					<div>
						<FaRProject size={30} className="text-yellow-500" />
					</div>
					<div>
						<h4 className="text-lg font-semibold text-white">Best Quality</h4>
						<p className="text-sm text-gray-300">Original Product Guaranteed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiddleBanner;
