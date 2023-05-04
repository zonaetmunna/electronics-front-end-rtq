import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
// import { toggle, toggleBrands } from "../../../../features/filter/filterSlice";
import Sidebar from "../sidebar/Sidebar";

const Products = ({ products }) => {
  console.log(products);
  const filter = useSelector((state) => state.filter);
  const { stock, brands } = filter;
  // const dispatch = useDispatch();

  // const activeClass = "text-white bg-indigo-500 border-white";

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
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap -mx-4">
        {/* Filter sidebar */}
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <Sidebar />
        </div>
        {/* Products listing */}
        <div className="w-full lg:w-3/4 px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
