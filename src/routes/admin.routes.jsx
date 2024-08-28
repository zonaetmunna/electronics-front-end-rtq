import { lazy } from 'react';

import DashboardLayout from '../layout/DashboardLayout';
import AdminList from '../pages/dashboard/admin/AdminList';
import PrivateRoutes from './PrivateRoutes';

const ProductsListAdminPage = lazy(() => import('../pages/dashboard/ProductsListAdminPage'));
const ProductDetailsAdminPage = lazy(() => import('../pages/dashboard/ProductDetailsAdminPage'));
const ProductAddAdminPage = lazy(() => import('../pages/dashboard/ProductAddAdminPage'));
const OrdersListAdminPage = lazy(() => import('../pages/dashboard/OrdersListAdminPage'));
const OrderDetailsAdminPage = lazy(() => import('../pages/dashboard/OrderDetailsAdminPage'));
const CategoryListAdminPage = lazy(() => import('../pages/dashboard/CategoryListAdminPage'));
const CategoryDetailsAdminPage = lazy(() => import('../pages/dashboard/CategoryDetailsAdminPage'));
const BrandsListAdminPage = lazy(() => import('../pages/dashboard/BrandsListAdminPage'));
const BrandDetailsAdminPage = lazy(() => import('../pages/dashboard/BrandDetailsAdminPage'));
const CustomerListPage = lazy(() => import('../pages/dashboard/CustomerListPage'));
const CustomerDetailsPage = lazy(() => import('../pages/dashboard/CustomerDetailsPage'));
const VendorsListPage = lazy(() => import('../pages/dashboard/VendorsListPage'));
const VendorProfilePage = lazy(() => import('../pages/dashboard/VendorProfilePage'));
const MakeAdminPage = lazy(() => import('../pages/dashboard/MakeAdminPage'));
const BlogListAdminPage = lazy(() => import('../pages/dashboard/BlogListAdminPage'));
const BlogAddAdminPage = lazy(() => import('../pages/dashboard/BlogAddAdminPage'));
const MessagesPage = lazy(() => import('../pages/dashboard/MessagesPage'));
const InvoicePage = lazy(() => import('../pages/dashboard/InvoicePage'));

export const adminRoutes = {
	path: '/dashboard',
	element: (
		<PrivateRoutes>
			<DashboardLayout />
		</PrivateRoutes>
	),
	children: [
		{ path: 'product-list', element: <ProductsListAdminPage /> },
		{ path: 'product/:id', element: <ProductDetailsAdminPage /> },
		{ path: 'product-add', element: <ProductAddAdminPage /> },
		{ path: 'category-list', element: <CategoryListAdminPage /> },
		{ path: 'category/:id', element: <CategoryDetailsAdminPage /> },
		{ path: 'brand-list', element: <BrandsListAdminPage /> },
		{ path: 'brand/:id', element: <BrandDetailsAdminPage /> },
		{ path: 'customer-list', element: <CustomerListPage /> },
		{ path: 'customer/:id', element: <CustomerDetailsPage /> },
		{ path: 'vendor-list', element: <VendorsListPage /> },
		{ path: 'vendor/:id', element: <VendorProfilePage /> },
		{ path: 'order-list', element: <OrdersListAdminPage /> },
		{ path: 'order/:id', element: <OrderDetailsAdminPage /> },
		{ path: 'admin-list', element: <AdminList /> },
		{ path: 'make-admin', element: <MakeAdminPage /> },
		{ path: 'blogs', element: <BlogListAdminPage /> },
		{ path: 'add-blog', element: <BlogAddAdminPage /> },
		{ path: 'invoice', element: <InvoicePage /> },
		{ path: 'message', element: <MessagesPage /> },
	],
};
