import { AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const ShopBar = ({
	totalResults,
	gridView,
	toggleGridView,

	handleSortChange,
}) => {
	const { sortBy } = useSelector((state) => state.filter);
	const sortOptions = [
		{ value: 'latest', label: 'Latest Products' },
		{ value: 'priceHighToLow', label: 'Price High to Low' },
		{ value: 'priceLowToHigh', label: 'Price Low to High' },
	];
	return (
		<div>
			{/* Design with result count, grid view, list view, and sort select */}
			<div className="flex justify-between items-center mb-4 shadow-lg rounded-lg p-5 ">
				<div className="text-lg font-medium text-gray-800">
					Showing <span className="font-bold">{totalResults}</span> results
				</div>
				<div className="flex items-center space-x-2">
					<p className="text-lg font-medium text-gray-800">View:</p>
					<button
						type="button"
						className={`${gridView ? 'bg-indigo-500' : 'bg-gray-300'} px-2 py-1 rounded-full`}
						onClick={toggleGridView}
					>
						<AiOutlineAppstore size={18} />
					</button>
					<button
						type="button"
						className={`${gridView ? 'bg-gray-300' : 'bg-indigo-500'} px-2 py-1 rounded-full`}
						onClick={toggleGridView}
					>
						<AiOutlineBars size={18} />
					</button>
					<Select
						options={sortOptions}
						value={sortOptions.find((option) => option.value === sortBy)}
						onChange={handleSortChange}
						className="w-40"
						placeholder="Sort By"
					/>
				</div>
			</div>
		</div>
	);
};

export default ShopBar;
