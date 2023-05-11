import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import {
  setBrands,
  setPriceRange,
  toggle,
  toggleBrands,
} from "../../../../features/filter/filterSlice";

const Products = ({ products }) => {
  console.log(products);
  const {
    stock,
    brands,
    keywords,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    sortBy,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const activeClass = "text-white bg-indigo-500 border-white";

  let content;

  // if (products && (filter.stock || filter.brands.length)) {
  //   content = products
  //     .filter((product) => {
  //       if (stock) {
  //         return product.status === true;
  //       }
  //       return product;
  //     })
  //     .filter((product) => {
  //       if (brands.length) {
  //         return brands.includes(product.brand);
  //       }
  //       return product;
  //     })
  //     .map((product) => <ProductCard key={product.model} product={product} />);
  // }

  if (
    products &&
    (stock ||
      brands.length ||
      keywords ||
      minPrice !== null ||
      maxPrice !== null ||
      minRating !== null ||
      maxRating !== null ||
      sortBy)
  ) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === "Available";
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .filter((product) => {
        if (keywords) {
          const keyword = keywords.toLowerCase();
          return (
            product.name.toLowerCase().includes(keyword) ||
            product.brand.toLowerCase().includes(keyword)
          );
        }
        return product;
      })
      .filter((product) => {
        if (minPrice !== null && maxPrice !== null) {
          return product.price >= minPrice && product.price <= maxPrice;
        } else if (minPrice !== null && maxPrice === null) {
          return product.price >= minPrice;
        } else if (minPrice === null && maxPrice !== null) {
          return product.price <= maxPrice;
        }
        return product;
      })
      .filter((product) => {
        if (minRating !== null && maxRating !== null) {
          return product.rating >= minRating && product.rating <= maxRating;
        } else if (minRating !== null && maxRating === null) {
          return product.rating >= minRating;
        } else if (minRating === null && maxRating !== null) {
          return product.rating <= maxRating;
        }
        return product;
      })
      .sort((a, b) => {
        if (sortBy === "price-low-to-high") {
          return a.price - b.price;
        } else if (sortBy === "price-high-to-low") {
          return b.price - a.price;
        } else if (sortBy === "rating-low-to-high") {
          return a.rating - b.rating;
        } else if (sortBy === "rating-high-to-low") {
          return b.rating - a.rating;
        }
        return 0;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  } else {
    content = products?.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filter sidebar */}
        <div className="col-span-1 lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden divide-y divide-gray-200">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Filter Options
              </h3>
              <hr className="border-gray-200 my-2" />
              <div className="py-4">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  Stock
                </h4>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={stock}
                    onChange={() => dispatch(toggle())}
                    className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700 font-medium">
                    In Stock Only
                  </span>
                </label>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="py-4">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  Brands
                </h4>
                <select
                  multiple
                  className="block w-full focus:outline-none border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white text-gray-700 font-medium"
                  value={brands}
                  onChange={(e) => dispatch(setBrands(e.target.value))}
                >
                  {products?.map((product) => (
                    <option key={product._id} value={product.brand}>
                      {product.brand}
                    </option>
                  ))}
                </select>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="py-4">
                <h4 className="text-base font-medium text-gray-800 mb-4">
                  Price
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <label className="inline-flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Min:</span>
                    <input
                      type="number"
                      value={minPrice || ""}
                      onChange={(e) =>
                        dispatch(setPriceRange({ minPrice: e.target.value }))
                      }
                      className="border-gray-300 focus:ring-blue-500 rounded-md shadow-sm w-full px-2 py-1"
                    />
                  </label>
                  <label className="inline-flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">Max:</span>
                    <input
                      type="number"
                      value={maxPrice || ""}
                      onChange={(e) =>
                        dispatch(setPriceRange({ maxPrice: e.target.value }))
                      }
                      className="border-gray-300 focus:ring-blue-500 rounded-md shadow-sm w-full px-2 py-1"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* all products */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Products;

// //{/* <div className="lg:col-span-1">
//           <div>
//             <button
//               onClick={() => dispatch(toggle())}
//               className={`border px-3 py-2 rounded-full font-semibold ${
//                 stock ? activeClass : null
//               } `}
//             >
//               In Stock
//             </button>
//             <button
//               onClick={() => dispatch(toggleBrands("amd"))}
//               className={`border px-3 py-2 rounded-full font-semibold ${
//                 brands.includes("amd") ? activeClass : null
//               }`}
//             >
//               AMD
//             </button>
//             <button
//               onClick={() => dispatch(toggleBrands("intel"))}
//               className={`border px-3 py-2 rounded-full font-semibold ${
//                 brands.includes("intel") ? activeClass : null
//               }`}
//             >
//               Intel
//             </button>
//           </div>
//         </div> */}
