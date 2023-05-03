import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../../../../features/filter/filterSlice";
import Sidebar from "../sidebar/Sidebar";

const Products = ({ products }) => {
  console.log(products);
  const filter = useSelector((state) => state.filter);
  const { stock, brands } = filter;
  const dispatch = useDispatch();

  const activeClass = "text-white bg-indigo-500 border-white";

  let content;

  if (products) {
    content = products?.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products && (filter.stock || filter.brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <div className="md:ml-8 flex-grow">
        {/* <div>
          <button
            onClick={() => dispatch(toggle())}
            className={`border px-3 py-2 rounded-full font-semibold ${
              stock ? activeClass : null
            } `}
          >
            In Stock
          </button>
          <button
            onClick={() => dispatch(toggleBrands("amd"))}
            className={`border px-3 py-2 rounded-full font-semibold ${
              brands.includes("amd") ? activeClass : null
            }`}
          >
            AMD
          </button>
          <button
            onClick={() => dispatch(toggleBrands("intel"))}
            className={`border px-3 py-2 rounded-full font-semibold ${
              brands.includes("intel") ? activeClass : null
            }`}
          >
            Intel
          </button>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Products;
