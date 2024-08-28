import { useState } from 'react';

import Button from '../atoms/Button';

const DeleteProductModel = ({ product, isOpen, onClose, onSubmit }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleClose = () => {
		onClose();
		setIsDeleting(false);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		setIsDeleting(true);
		await onSubmit(product.id);
		handleClose();
	};

	return (
		<div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" aria-hidden="true">
					<div className="absolute inset-0 bg-gray-500 opacity-75" />
				</div>

				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
					&#8203;
				</span>

				<div
					className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
				>
					<form onSubmit={handleFormSubmit}>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
									<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
										Delete Product
									</h3>
									<p className="mt-2 text-gray-600">
										Are you sure you want to delete the product {product?.name}?
									</p>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<Button
								type="submit"
								className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm ${
									isDeleting && 'opacity-50 cursor-not-allowed'
								}`}
								disabled={isDeleting}
							>
								{isDeleting ? 'Deleting...' : 'Delete'}
							</Button>
							<Button
								type="button"
								className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								onClick={handleClose}
							>
								Cancel
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DeleteProductModel;
