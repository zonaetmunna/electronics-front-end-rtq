import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "rating-desc", label: "Rating: High to Low" },
  { value: "rating-asc", label: "Rating: Low to High" },
];

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="md:w-1/4 px-4 py-8 bg-gray-100">
      <h3 className="text-lg font-medium mb-2">Filter By</h3>
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-1">Sort By</h4>
        <Select
          options={options}
          value={selectedOption}
          onChange={handleChange}
          className="w-full"
          placeholder="Select an option"
        />
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-1">Price Range</h4>
        <input type="range" min="0" max="100" step="1" className="w-full" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-1">Categories</h4>
        <ul>
          <li className="py-1">
            <input type="checkbox" id="category1" />
            <label htmlFor="category1" className="ml-2">
              Category 1
            </label>
          </li>
          <li className="py-1">
            <input type="checkbox" id="category2" />
            <label htmlFor="category2" className="ml-2">
              Category 2
            </label>
          </li>
          <li className="py-1">
            <input type="checkbox" id="category3" />
            <label htmlFor="category3" className="ml-2">
              Category 3
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
