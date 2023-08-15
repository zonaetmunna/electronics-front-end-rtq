import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../../../features/brand/brandApi";
import { useGetCategoriesQuery } from "../../../../features/category/categoryApi";
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

  // redux toolkit query api call
  const {
    data,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
  } = useGetProductsQuery({});
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
      {/* Add Category Modal Link */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddModalOpen}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
        >
          Add Product
        </button>
      </div>
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
            products?.map((product) => (
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
