import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "../../../../features/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import EditProductModal from "../../../components/dashboard/EditProductModal";
import DeleteProductModel from "../../../components/dashboard/DeleteProductModel";
import { useForm } from "react-hook-form";

const AllProducts = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  const products = data;
  const dispatch = useDispatch();

  const [removeProduct, { isError, isSuccess, error }] =
    useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) {
    <h1>page is loading</h1>;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = (product) => {
    updateProduct(product);
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
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
              Price
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
            products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">{product.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.stock}</div>
                </td>
                <td>
                  <div className="px-6 py-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => {
                        handleProductSelect(product);
                        handleEditModalOpen();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        handleProductSelect(product);
                        handleDeleteModalOpen();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

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

{
  /* <div className="px-6 py-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => {
                    handleProductSelect(product);
                    handleEditModalOpen();
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    handleProductSelect(product);
                    handleDeleteModalOpen();
                  }}
                >
                  Delete
                </button>
              </div> */
}
