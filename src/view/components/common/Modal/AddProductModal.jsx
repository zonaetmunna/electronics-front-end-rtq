import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";

const AddProductModal = ({ categories, brands, onSubmit, isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categoriesOption = categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));
  const brandsOption = brands.map((brand) => ({
    value: brand._id,
    label: brand.name,
  }));

  const handleFormSubmit = (data) => {
    // Call the onSubmit function and pass the form data
    onSubmit(data);

    // Clear the form fields
    reset();

    // Show a success toast
    toast.success("Product added successfully!");
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Add Product
                  </h3>
                  {/* Product Name and price*/}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block font-semibold mb-1"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Product name is required",
                        })}
                        className="w-full border rounded p-2"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    {/* price */}
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block font-semibold mb-1"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        {...register("price", {
                          required: "Price is required",
                          min: 0,
                        })}
                        className="w-full border rounded p-2"
                      />
                      {errors.price && (
                        <p className="text-red-500">{errors.price.message}</p>
                      )}
                    </div>
                  </div>
                  {/* category and brand */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Category */}
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="block font-semibold mb-1"
                      >
                        Category
                      </label>
                      <Select
                        id="category"
                        {...register("category", {
                          required: "Category is required",
                        })}
                        options={categoriesOption}
                        className="w-full"
                      />
                      {errors.category && (
                        <p className="text-red-500">
                          {errors.category.message}
                        </p>
                      )}
                    </div>

                    {/* Brand */}
                    <div className="mb-4">
                      <label
                        htmlFor="brand"
                        className="block font-semibold mb-1"
                      >
                        Brand
                      </label>
                      <Select
                        id="brand"
                        {...register("brand", {
                          required: "Brand is required",
                        })}
                        options={brandsOption}
                        className="w-full"
                      />
                      {errors.brand && (
                        <p className="text-red-500">{errors.brand.message}</p>
                      )}
                    </div>
                  </div>

                  {/* image and othersImage */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* image */}
                    <div className="mb-4">
                      <label
                        htmlFor="image"
                        className="block font-semibold mb-1"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        {...register("image")}
                        className="w-full border rounded p-2"
                      />
                    </div>
                    {/* others image */}
                    <div className="mb-4">
                      <label
                        htmlFor="others"
                        className="block font-semibold mb-1"
                      >
                        Others images
                      </label>
                      <input
                        type="file"
                        id="othersImage"
                        {...register("othersImage")}
                        className="w-full border rounded p-2"
                      />
                    </div>
                  </div>

                  {/* description and stockQuantity */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* description */}
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block font-semibold mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        {...register("description")}
                        className="w-full border rounded p-2"
                      />
                    </div>

                    {/* stockQuantity */}
                    <div className="mb-4">
                      <label
                        htmlFor="stockQuantity"
                        className="block font-semibold mb-1"
                      >
                        Stock Quantity
                      </label>
                      <input
                        type="number"
                        id="stockQuantity"
                        {...register("stockQuantity", {
                          required: "Stock quantity is required",
                          min: 0,
                        })}
                        className="w-full border rounded p-2"
                      />
                      {errors.stockQuantity && (
                        <p className="text-red-500">
                          {errors.stockQuantity.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button and Cancel */}
                  <div className="flex justify-between">
                    <div className="justify-between items-center w-1/3">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                      >
                        Add Product
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-1/3">
                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                        type="button"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
