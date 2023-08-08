import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  setMaxPrice,
  setMinPrice,
  setSearchText,
  setSelectedBrand,
  setSelectedCategory,
  setStock,
} from "../../../../features/filter/filterSlice";

const FilterSidebar = ({ categories, brands }) => {
  const dispatch = useDispatch();

  // Handle filter changes and dispatch actions
  const handleSearchTextChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleBrandChange = (brand) => {
    dispatch(setSelectedBrand(brand));
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

  // Options for React-Select components
  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const brandOptions = brands?.map((brand) => ({
    value: brand._id,
    label: brand.name,
  }));
  return (
    <div className="col-span-1 lg:col-span-1">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden divide-y divide-gray-200">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Filter Options
          </h3>
          <hr className="border-gray-200 my-2" />

          {/* Search Text */}
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2 w-full"
            onChange={handleSearchTextChange}
          />

          {/* Category */}
          <Select
            options={categoryOptions}
            placeholder="Select Category"
            onChange={handleCategoryChange}
          />

          {/* Brand */}
          <Select
            options={brandOptions}
            placeholder="Select Brand"
            onChange={handleBrandChange}
          />

          {/* Min Price */}
          <input
            type="number"
            placeholder="Min Price"
            className="border rounded-md p-2 w-full mt-2"
            onChange={handleMinPriceChange}
          />

          {/* Max Price */}
          <input
            type="number"
            placeholder="Max Price"
            className="border rounded-md p-2 w-full mt-2"
            onChange={handleMaxPriceChange}
          />

          {/* Stock */}
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
              onChange={handleStockChange}
            />
            <span className="ml-2 text-gray-700">Show only in stock</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
