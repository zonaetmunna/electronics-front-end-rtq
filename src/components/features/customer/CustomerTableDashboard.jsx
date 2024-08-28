/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';

const CustomerTableDashboard = ({ customers }) => {
	return (
		<table className="min-w-full bg-gray-200 text-gray-600 ">
			<thead>
				<tr>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Name
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Email
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						contactNo
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						dateOfBirth
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Role
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						BloodGroup
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						Gender
					</th>

					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						permanentAddress
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						presentAddress
					</th>
					<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
						profileImg
					</th>
				</tr>
			</thead>
			<tbody className="">
				{customers &&
					customers?.map((customer) => (
						<tr key={customer?._id} className="bg-white">
							<td className="px-6 py-4 whitespace-no-wrap ">
								<Link to={`/dashboard/product/${customer?._id}`}>
									<div className="flex items-center">
										<div className="ml-4">
											<div className="text-sm leading-5 font-medium text-gray-900">
												{customer?.name}
											</div>
										</div>
									</div>
								</Link>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">{customer?.email}</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">{customer?.contactNo}</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="ml-4">
										<div className="text-sm font-medium text-gray-900">{customer?.dateOfBirth}</div>
									</div>
								</div>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">${customer?.role}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">${customer?.bloodGroup}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">{customer?.gender}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">{customer?.permanentAddress}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">{customer?.presentAddress}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">{customer?.profileImg}</div>
							</td>
							{/* <td>
								<div className="px-3 py-3">
									<Button
										type="button"
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
										onClick={() => {
											dispatch(openModal('editProductModal'));
											handleProductSelect(admin);
										}}
									>
										<FaEdit />
									</Button>
									<Button
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
										onClick={() => {
											handleProductSelect(admin);
											handleDeleteModalOpen();
										}}
									>
										<FaTrash />
									</Button>
								</div>
							</td> */}
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default CustomerTableDashboard;
