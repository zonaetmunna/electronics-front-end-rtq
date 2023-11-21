import Button from '../atoms/Button';

const PaginationBlog = ({ totalPages, currentPage, onPageChange }) => {
	const pageNumbers = [];

	// eslint-disable-next-line no-plusplus
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="mt-4">
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
						<Button onClick={() => onPageChange(number)} className="page-link">
							{number}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PaginationBlog;
