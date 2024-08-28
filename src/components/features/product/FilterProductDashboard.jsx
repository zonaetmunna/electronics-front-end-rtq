/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import {
  clearFilters,
  setMaxPrice,
  setMinPrice,
  setSearchText,
  setSelectedBrand,
  setSelectedCategory,
  setStock,
} from '../../../features/filter/filterSlice';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';

const FilterProductDashboard = ({categories, brands}) => {
	const dispatch = useDispatch();
	const handleSearchTextChange = (e) => {
		dispatch(setSearchText(e.target.value));
	};

	const handleCategoryChange = (category) => {
		dispatch(setSelectedCategory(category.label));
	};

	const handleBrandChange = (brand) => {
		dispatch(setSelectedBrand(brand.label));
	};

	const handleMinPriceChange = (e) => {
		dispatch(setMinPrice(e.target.value));
	};

	const handleMaxPriceChange = (e) => {
		dispatch(setMaxPrice(e.target.value));
	};

	const handleStockChange = (e) => {
		dispatch(setStock(e.target.checked));
	};

	const handleClearFilters = () => {
		dispatch(clearFilters());
	};


  const categoryOptions = categories?.map((category) => ({
		// eslint-disable-next-line no-underscore-dangle
		value: category._id,
		label: category.name,
	}));

	const brandOptions = brands?.map((brand) => ({
		// eslint-disable-next-line no-underscore-dangle
		value: brand._id,
		label: brand.name,
	}));

	return (
		<div className="flex justify-start items-center mb-4 px-2 py-4">
			<input
				type="text"
				placeholder="Search"
				className="border rounded-md p-2 "
				onChange={handleSearchTextChange}
			/>

			<Select
				options={categoryOptions}
				placeholder="Category"
				onChange={handleCategoryChange}
				className="ml-2"
			/>

			<Select
				options={brandOptions}
				placeholder="Brand"
				onChange={handleBrandChange}
				className="ml-2"
			/>

			<input
				type="number"
				placeholder="Min Price"
				className="border rounded-md p-2 ml-2"
				onChange={handleMinPriceChange}
			/>

			<input
				type="number"
				placeholder="Max Price"
				className="border rounded-md p-2 ml-2"
				onChange={handleMaxPriceChange}
			/>

			<Label className="flex items-center mt-2">
				<input
					type="checkbox"
					className="form-checkbox h-4 w-4 ml-2 text-indigo-600 "
					onChange={handleStockChange}
				/>
				<span className="ml-2 text-gray-700">stock</span>
			</Label>

			<Button
				className=" bg-gray-700 text-white px-2 py-2 rounded-md ml-2"
				onClick={handleClearFilters}
			>
				Clear Filters
			</Button>
		</div>
	);
};

export default FilterProductDashboard;
