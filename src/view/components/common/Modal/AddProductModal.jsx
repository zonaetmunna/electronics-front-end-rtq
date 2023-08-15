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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Product name is required" })}
              className="w-full border rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold mb-1">
              Category
            </label>
            <Select
              id="category"
              {...register("category", { required: "Category is required" })}
              options={categoriesOption}
              className="w-full"
            />
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label htmlFor="brand" className="block font-semibold mb-1">
              Brand
            </label>
            <Select
              id="brand"
              {...register("brand", { required: "Brand is required" })}
              options={brandsOption}
              className="w-full"
            />
            {errors.brand && (
              <p className="text-red-500">{errors.brand.message}</p>
            )}
          </div>

          {/* ... other input fields */}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
            >
              Add Product
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
