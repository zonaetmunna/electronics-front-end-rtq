import React from "react";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../../../features/brand/brandApi";

const BrandsList = () => {
  // redux toolkit query api call
  const { data, isLoading, isError, error } = useGetBrandsQuery({});
  const brands = data;
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Brands List</h2>

        {/* Add Brand Modal Button */}
        <div className="flex justify-end mb-4">
          <button
            // onClick={}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
          >
            Add Brand
          </button>
        </div>

        {/* Brand List Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
                <th className="py-3 px-4">Brand Name</th>
                {/* ... other columns */}
              </tr>
            </thead>
            <tbody>
              {brands &&
                brands.map((brand) => (
                  <tr key={brand._id} className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <Link to={`/dashboard/brand/${brand?._id}`}>
                        {brand.name}
                      </Link>
                    </td>
                    {/* ... other columns */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="flex items-center justify-between">
            <button className="py-1 px-3 bg-gray-200 rounded-lg">
              Previous
            </button>
            <span className="mx-2 text-gray-700">Page 1 of 5</span>
            <button className="py-1 px-3 bg-gray-200 rounded-lg">Next</button>
          </nav>
        </div>

        {/* Other Components */}
      </div>
    </div>
  );
};

export default BrandsList;
