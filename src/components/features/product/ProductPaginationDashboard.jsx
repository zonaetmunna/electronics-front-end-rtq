import { useDispatch } from 'react-redux';

import { setItemsPerPage } from '../../../features/filter/filterSlice';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const ProductPaginationDashboard = ({ currentPage, totalPages }) => {
	const dispatch = useDispatch();

	const handlePageChange = (newPage) => {
		// Dispatch an action to update the current page
		// You can use the setPage action from your filterSlice
		dispatch(setItemsPerPage(newPage)); // You need to define setPage action
	};
	return (
		<div className="mt-4 flex justify-center">
			<nav>
				<ul className="pagination">
					<li
						className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
						onClick={() => handlePageChange(currentPage - 1)}
					>
						<span className="pagination-link">Previous</span>
					</li>
					{Array.from({ length: totalPages }, (_, index) => (
						<li
							key={index}
							className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}
							onClick={() => handlePageChange(index + 1)}
						>
							<span className="pagination-link">{index + 1}</span>
						</li>
					))}
					<li
						className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
						onClick={() => handlePageChange(currentPage + 1)}
					>
						<span className="pagination-link">Next</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default ProductPaginationDashboard;
