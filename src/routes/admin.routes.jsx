import { lazy } from 'react';

import DashboardLayout from '../layout/DashboardLayout';
import AdminList from '../pages/dashboard/admin/AdminList';
import ManagerDetails from '../pages/dashboard/manager/ManagerDetails';
import ManagerList from '../pages/dashboard/manager/ManagerList';
import PrivateRoutes from './PrivateRoutes';

const ProductsListAdminPage = lazy(
	() => import('../pages/dashboard/products/ProductsListAdminPage')
);
const ProductDetailsAdminPage = lazy(
	() => import('../pages/dashboard/products/ProductDetailsAdminPage')
);
const ProductAddAdminPage = lazy(() => import('../pages/dashboard/products/ProductAddAdminPage'));
const OrdersListAdminPage = lazy(() => import('../pages/dashboard/order/OrdersListAdminPage'));
const OrderDetailsAdminPage = lazy(() => import('../pages/dashboard/order/OrderDetailsAdminPage'));
const CategoryListAdminPage = lazy(
	() => import('../pages/dashboard/category/CategoryListAdminPage')
);
const CategoryDetailsAdminPage = lazy(
	() => import('../pages/dashboard/category/CategoryDetailsAdminPage')
);
const BrandsListAdminPage = lazy(() => import('../pages/dashboard/brand/BrandsListAdminPage'));
const BrandDetailsAdminPage = lazy(() => import('../pages/dashboard/brand/BrandDetailsAdminPage'));
const CustomerListPage = lazy(() => import('../pages/dashboard/customer/CustomerListPage'));
const CustomerDetailsPage = lazy(() => import('../pages/dashboard/customer/CustomerDetailsPage'));
const VendorsListPage = lazy(() => import('../pages/dashboard/vendor/VendorsListPage'));
const VendorProfilePage = lazy(() => import('../pages/dashboard/vendor/VendorProfilePage'));
const MakeAdminPage = lazy(() => import('../pages/dashboard/admin/MakeAdminPage'));
const BlogListAdminPage = lazy(() => import('../pages/dashboard/blog/BlogListAdminPage'));
const BlogAddAdminPage = lazy(() => import('../pages/dashboard/blog/BlogAddAdminPage'));
const MessagesPage = lazy(() => import('../pages/dashboard/message/MessagesPage'));
const InvoicePage = lazy(() => import('../pages/dashboard/invoice/InvoicePage'));

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
		{ path: 'manager-list', element: <ManagerList /> },
		{ path: 'manager/:id', element: <ManagerDetails /> },
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
