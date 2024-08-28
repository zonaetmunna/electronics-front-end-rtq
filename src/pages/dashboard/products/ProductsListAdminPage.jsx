/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/atoms/Button';
import FilterProductDashboard from '../../../components/features/product/FilterProductDashboard';
import ProductPaginationDashboard from '../../../components/features/product/ProductPaginationDashboard';
import ProductTableDashboard from '../../../components/features/product/ProductTableDashboard';
import AddProductModal from '../../../components/organisms/AddProductModal';
import DeleteProductModel from '../../../components/organisms/DeleteProductModel';
import EditProductModal from '../../../components/organisms/EditProductModal';
import { useGetBrandsQuery } from '../../../features/brand/brandApi';
import { useGetCategoriesQuery } from '../../../features/category/categoryApi';
import {
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from '../../../features/product/productApi';
import { closeModal, openModal } from '../../../features/theme/modalSlice';

const ProductsListAdminPage = () => {
	const dispatch = useDispatch();
	const modals = useSelector((state) => state.modals);

	const [selectedProduct, setSelectedProduct] = useState(null);

	const {
		searchText,
		currentPage,
		itemsPerPage,
		selectedCategory,
		selectedBrand,
		minPrice,
		maxPrice,
		stock,
	} = useSelector((state) => state.filter);

	const { data, isLoading: isLoadingProducts } = useGetProductsQuery({
		category: selectedCategory,
		brand: selectedBrand,
		search: searchText,
		page: currentPage,
		limit: itemsPerPage,
		minPrice,
		maxPrice,
		stock,
	});
	const { data: categoriesData } = useGetCategoriesQuery({});
	const categories = categoriesData;
	const { data: brandsData } = useGetBrandsQuery({});
	const brands = brandsData;
	const products = data?.data;

	const [addProduct] = useAddProductMutation();
	const [updateProduct] = useUpdateProductMutation();
	const [removeProduct] = useRemoveProductMutation();

	const filteredProducts = useMemo(() => {
		return products?.filter((product) => {
			if (
				// (searchQuery &&
				//   !product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
				(searchText && !product?.name?.toLowerCase().includes(searchText.toLowerCase())) ||
				(selectedCategory && selectedCategory !== product?.category?.name) ||
				(selectedBrand && selectedBrand !== product?.brand?.name) ||
				(minPrice !== '' && product.price < parseFloat(minPrice)) ||
				(maxPrice !== '' && product.price > parseFloat(maxPrice)) ||
				(stock && product.stock === true)
			) {
				return false;
			}
			return true;
		});
	}, [products, selectedCategory, selectedBrand, minPrice, maxPrice, stock, searchText]);
	const totalResults = filteredProducts?.length;

	const totalPages = Math.ceil(totalResults / itemsPerPage);

	/* const handleSortChange = (selectedOption) => {
		// Dispatch action to update sorting state
		dispatch(setSortBy(selectedOption?.value));
	}; */

	if (isLoadingProducts) {
		<h1>page is loading</h1>;
	}

	const handleProductSelect = (product) => {
		setSelectedProduct(product);
	};

	const handleAddSubmit = (product) => {
		addProduct(product);
		dispatch(closeModal('addProductModal'));
	};
	const handleEditSubmit = (product) => {
		updateProduct({ productId: product?.id, updatedProduct: product });
		dispatch(closeModal('editProductModal'));
	};

	const handleDeleteModalOpen = () => {
		dispatch(openModal('deleteProductModal'));
	};

	const handleDeleteModalClose = () => {
		dispatch(closeModal('deleteProductModal'));
	};

	const handleDeleteSubmit = () => {
		removeProduct(selectedProduct.id);
		handleDeleteModalClose();
		setSelectedProduct(null);
	};

	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold mb-4">All Products</h2>
			<FilterProductDashboard categories={categories} brands={brands} />
			<hr className="border-gray-200 my-2" />
			<div className="flex justify-end mb-4">
				<Button
					onClick={() => dispatch(openModal('addProductModal'))}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
				>
					Create Product
				</Button>
			</div>
			<ProductTableDashboard
				products={products}
				filteredProducts={filteredProducts}
				handleProductSelect={handleProductSelect}
				handleDeleteModalOpen={handleDeleteModalOpen}
			/>
			<ProductPaginationDashboard currentPage={currentPage} totalPages={totalPages} />

			<AddProductModal
				isOpen={modals.addProductModal}
				onClose={() => dispatch(closeModal('addProductModal'))}
				onSubmit={handleAddSubmit}
				categories={categories}
				brands={brands}
			/>

			<EditProductModal
				isOpen={modals.editProductModal}
				onClose={() => dispatch(closeModal('editProductModal'))}
				product={selectedProduct}
				onSubmit={handleEditSubmit}
			/>

			<DeleteProductModel
				product={selectedProduct}
				isOpen={modals.deleteProductModal}
				onClose={() => dispatch(closeModal('deleteProductModal'))}
				onSubmit={handleDeleteSubmit}
			/>
		</div>
	);
};

export default ProductsListAdminPage;
