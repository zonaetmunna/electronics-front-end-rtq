import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetBrandsQuery } from "../../../features/brand/brandApi";
import { useGetCategoriesQuery } from "../../../features/category/categoryApi";
import { setSearchText, setSortBy } from "../../../features/filter/filterSlice";
import { useGetProductsQuery } from "../../../features/product/productApi";
import ProductCard from "../../components/common/Card/ProductCard";
import FilterSidebar from "../../components/common/Sidebar/FilterSidebar";
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
  const {
    data,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productError,
  } = useGetProductsQuery({
    category: selectedCategory,
    brand: selectedBrand,
    search: searchText,
    page: currentPage,
    limit: itemsPerPage,
    minPrice: minPrice,
    maxPrice: maxPrice,
    stock: stock,
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
  const categories = categoriesData;
  console.log(categories);
  // brand query
  const {
    data: brandsData,
    isError: isErrorBrands,
    error: errorBrands,
    isLoading: isLoadingBrands,
  } = useGetBrandsQuery({});
  const brands = brandsData;

  /* all error handle */
  useEffect(() => {
    if (isProductsError) {
      console.log(productError);
      <p>Something went wrong products query</p>;
    }
    if (isErrorCategories) {
      console.log(errorBrands);
      <p>Something went wrong categories query</p>;
    }
    if (isErrorBrands) {
      console.log(errorBrands);
      <p>Something went wrong brands query</p>;
    }
  }, [
    isProductsError,
    productError,
    isErrorCategories,
    isErrorBrands,
    errorBrands,
  ]);

  const dispatch = useDispatch();

  /*  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("/shop"); */
  const { searchQuery } = useParams();
  useEffect(() => {
    dispatch(setSearchText(searchQuery || ""));
  }, [dispatch, searchQuery]);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products?.filter((product) => {
      if (
        // (searchQuery &&
        //   !product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (searchText &&
          !product.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (selectedCategory && selectedCategory !== product.category.name) ||
        (selectedBrand && selectedBrand !== product.brand.name) ||
        (minPrice !== "" && product.price < parseFloat(minPrice)) ||
        (maxPrice !== "" && product.price > parseFloat(maxPrice)) ||
        (stock && product.stock === true)
      ) {
        return false;
      }
      return true;
    });
  }, [
    products,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    stock,
    searchText,
  ]);

  const totalResults = filteredProducts?.length;
  const handleSortChange = (selectedOption) => {
    // Dispatch action to update sorting state
    dispatch(setSortBy(selectedOption?.value));
  };

  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div className="container mx-auto px-4 py-8 lg:px-12">
      {/* ShopBar */}
      <ShopBar
        totalResults={totalResults}
        gridView={gridView}
        toggleGridView={toggleGridView}
        handleSortChange={handleSortChange}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filter sidebar */}
        <div className="col-span-1 lg:col-span-1">
          <FilterSidebar categories={categories} brands={brands} />
        </div>
        {/* All products */}
        <div
          className={`col-span-1 lg:col-span-3 ${
            gridView
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col"
          }`}
        >
          {isProductsLoading ? (
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
