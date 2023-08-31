import React, { useMemo, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useGetBrandsQuery } from "../../../../features/brand/brandApi";
import { useGetCategoriesQuery } from "../../../../features/category/categoryApi";
import {
  clearFilters,
  setItemsPerPage,
  setMaxPrice,
  setMinPrice,
  setSearchText,
  setSelectedBrand,
  setSelectedCategory,
  setSortBy,
  setStock,
} from "../../../../features/filter/filterSlice";
import {
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "../../../../features/product/productApi";
import AddProductModal from "../../../components/common/Modal/AddProductModal";
import DeleteProductModel from "../../../components/common/Modal/DeleteProductModel";
import EditProductModal from "../../../components/common/Modal/EditProductModal";

const AllProducts = () => {
  // state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // hooks
  const dispatch = useDispatch();

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

  // redux toolkit query api call
  const {
    data,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
  } = useGetProductsQuery({
    category: selectedCategory,
    brand: selectedBrand,
    search: searchText,
    page: currentPage,
    limit: itemsPerPage,
    minPrice: minPrice,
    maxPrice: maxPrice,
    stock: stock,
  });
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useGetCategoriesQuery({});
  const categories = categoriesData;
  const {
    data: brandsData,
    isError: isErrorBrands,
    error: errorBrands,
    isLoading: isLoadingBrands,
  } = useGetBrandsQuery({});
  const brands = brandsData;
  console.log(data);
  const products = data?.data;
  const [addProduct, { isError: isAddError, isSuccess: isAddSuccess }] =
    useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [
    removeProduct,
    { isError: isRemoveError, isSuccess: isRemoveSuccess, error: removeError },
  ] = useRemoveProductMutation();

  const handleSearchTextChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category.label));
  };

  const handleBrandChange = (brand) => {
    console.log(brand.value);
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

  // Options for React-Select components
  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const brandOptions = brands?.map((brand) => ({
    value: brand._id,
    label: brand.name,
  }));

  // filter products with useMemo
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

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const handlePageChange = (newPage) => {
    // Dispatch an action to update the current page
    // You can use the setPage action from your filterSlice
    dispatch(setItemsPerPage(newPage)); // You need to define setPage action
  };

  const handleSortChange = (selectedOption) => {
    // Dispatch action to update sorting state
    dispatch(setSortBy(selectedOption?.value));
  };
  // error handle
  if (isLoadingProducts) {
    <h1>page is loading</h1>;
  }

  // handlers modal open and close
  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  // handlers submit
  const handleAddSubmit = (product) => {
    addProduct(product);
    setIsAddModalOpen(false);
  };
  const handleEditSubmit = (product) => {
    updateProduct({ productId: product.id, updatedProduct: product });
    handleEditModalClose();
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteSubmit = () => {
    removeProduct(selectedProduct.id);
    handleDeleteModalClose();
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      {/* filter products */}
      <div className="flex justify-between items-center mb-4 px-2 py-4">
        {/* Search Text */}
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md p-2 "
          onChange={handleSearchTextChange}
        />

        {/* Category */}
        <Select
          options={categoryOptions}
          placeholder="Category"
          onChange={handleCategoryChange}
          className="ml-2"
        />

        {/* Brand */}
        <Select
          options={brandOptions}
          placeholder="Brand"
          onChange={handleBrandChange}
          className="ml-2"
        />

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="border rounded-md p-2 ml-2"
          onChange={handleMinPriceChange}
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="border rounded-md p-2 ml-2"
          onChange={handleMaxPriceChange}
        />

        {/* Stock */}
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 ml-2 text-indigo-600 "
            onChange={handleStockChange}
          />
          <span className="ml-2 text-gray-700">stock</span>
        </label>

        {/* Clear Filters */}
        <button
          className=" bg-gray-700 text-white px-2 py-2 rounded-md ml-2"
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </div>
      <hr className="border-gray-200 my-2" />
      {/* add product modal link */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddModalOpen}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
        >
          Add Product
        </button>
      </div>
      {/* product table */}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Name
            </th>
            {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Description
            </th> */}
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Brand
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Price
            </th>

            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              stockQuantity
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products &&
            filteredProducts?.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <Link to={`/dashboard/product/${product._id}`}>
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {product.name}
                          <div className="text-sm text-gray-500">
                            {product._id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.category.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.brand.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${product.stockQuantity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.stock}</div>
                </td>
                <td>
                  <div className="px-3 py-3">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                      onClick={() => {
                        handleProductSelect(product);
                        handleEditModalOpen();
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => {
                        handleProductSelect(product);
                        handleDeleteModalOpen();
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <nav>
          <ul className="pagination">
            <li
              className={`pagination-item ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <span className="pagination-link">Previous</span>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`pagination-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                <span className="pagination-link">{index + 1}</span>
              </li>
            ))}
            <li
              className={`pagination-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span className="pagination-link">Next</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* modals */}
      {isAddModalOpen && (
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={handleAddModalClose}
          onSubmit={handleAddSubmit}
          categories={categories}
          brands={brands}
        />
      )}

      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          isOpen={isEditModalOpen}
          onClose={handleEditModalClose}
          onSubmit={handleEditSubmit}
        />
      )}
      {selectedProduct && (
        <DeleteProductModel
          product={selectedProduct}
          isOpen={isDeleteModalOpen}
          onClose={handleDeleteModalClose}
          onSubmit={handleDeleteSubmit}
        />
      )}
    </div>
  );
};

export default AllProducts;
