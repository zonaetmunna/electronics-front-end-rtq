import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBrandsQuery } from "../../../features/brand/brandApi";
import { useGetCategoriesQuery } from "../../../features/category/categoryApi";
import { setSortBy } from "../../../features/filter/filterSlice";
import { useGetProductsQuery } from "../../../features/product/productApi";
import ProductCard from "../../components/main/ProductCard/ProductCard";
import FilterSidebar from "../../components/main/filterSidebar/FilterSidebar";
import ShopBar from "../../components/main/shopBar/ShopBar";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const toggleGridView = () => {
    setGridView(!gridView);
  };
  const {
    searchText,
    currentPage,
    itemsPerPage,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    stock,
    sortBy,
  } = useSelector((state) => state.filter);
  // productsQuery
  const { data, isLoading, isError, error } = useGetProductsQuery({
    category: selectedCategory,
    search: searchText,
    page: currentPage,
    limit: itemsPerPage,
    minPrice: minPrice,
    maxPrice: maxPrice,
    // ... other parameters
  });
  const products = data?.data;
  console.log(products);
  // categoriesQuery
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useGetCategoriesQuery({});
  const categories = categoriesData?.data;
  console.log(categories);
  // brand query
  const {
    data: brandsData,
    isError: isErrorBrands,
    error: errorBrands,
    isLoading: isLoadingBrands,
  } = useGetBrandsQuery({});
  const brands = brandsData;

  const dispatch = useDispatch();

  const activeClass = "text-white bg-indigo-500 border-white";
  // Filter products based on selected filters
  const filteredProducts = products?.filter((product) => {
    let passFilters = true;

    if (selectedCategory && selectedCategory !== product.category.id) {
      passFilters = false;
    }

    if (selectedBrand && selectedBrand !== product.brand.id) {
      passFilters = false;
    }

    if (minPrice !== "" && product.price < parseFloat(minPrice)) {
      passFilters = false;
    }

    if (maxPrice !== "" && product.price > parseFloat(maxPrice)) {
      passFilters = false;
    }

    if (stock && product.stockQuantity <= 0) {
      passFilters = false;
    }

    return passFilters;
  });

  const totalResults = filteredProducts?.length;
  const handleSortChange = (selectedOption) => {
    // Dispatch action to update sorting state
    dispatch(setSortBy(selectedOption?.value));
  };

  let content;
  return (
    <div className="container mx-auto px-4 py-8 lg:px-12">
      {/* shopBar */}
      <ShopBar
        totalResults={totalResults}
        gridView={gridView}
        toggleGridView={toggleGridView}
        handleSortChange={handleSortChange}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filter sidebar */}
        <FilterSidebar categories={categories} brands={brands} />
        {/* all products */}
        <div
          className={`col-span-1 lg:col-span-3 ${
            gridView
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col"
          }`}
        >
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            filteredProducts?.map((product) => (
              <div
                key={product._id}
                className={`${
                  gridView ? "gridView" : "p-4 border rounded-md shadow-sm"
                }`}
              >
                {/* Render individual product card */}
                <ProductCard product={product} gridView={gridView} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
