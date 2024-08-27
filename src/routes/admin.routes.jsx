import BlogAddAdminPage from '../pages/dashboard/BlogAddAdminPage';
import BlogListAdminPage from '../pages/dashboard/BlogListAdminPage';
import BrandDetailsAdminPage from '../pages/dashboard/BrandDetailsAdminPage';
import BrandsListAdminPage from '../pages/dashboard/BrandsListAdminPage';
import CategoryDetailsAdminPage from '../pages/dashboard/CategoryDetailsAdminPage';
import CategoryListAdminPage from '../pages/dashboard/CategoryListAdminPage';
import CustomerDetailsPage from '../pages/dashboard/CustomerDetailsPage';
import CustomerListPage from '../pages/dashboard/CustomerListPage';
import InvoicePage from '../pages/dashboard/InvoicePage';
import MakeAdminPage from '../pages/dashboard/MakeAdminPage';
import MessagesPage from '../pages/dashboard/MessagesPage';
import OrderDetailsAdminPage from '../pages/dashboard/OrderDetailsAdminPage';
import OrdersListAdminPage from '../pages/dashboard/OrdersListAdminPage';
import ProductAddAdminPage from '../pages/dashboard/ProductAddAdminPage';
import ProductDetailsAdminPage from '../pages/dashboard/ProductDetailsAdminPage';
import ProductsListAdminPage from '../pages/dashboard/ProductsListAdminPage';
import VendorProfilePage from '../pages/dashboard/VendorProfilePage';
import VendorsListPage from '../pages/dashboard/VendorsListPage';

export const adminPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <ProductsListAdminPage />,
	},

	{
		name: 'Product-list',
		path: 'product-list',
		element: <ProductsListAdminPage />,
	},
	{
		name: 'Product-list',
		path: 'product/:id',
		element: <ProductDetailsAdminPage />,
	},
	{
		name: 'Product-list',
		path: 'product-add',
		element: <ProductAddAdminPage />,
	},
	{
		name: 'Category-list',
		path: 'category-list',
		element: <CategoryListAdminPage />,
	},
	{
		name: 'Category-list',
		path: 'category/:id',
		element: <CategoryDetailsAdminPage />,
	},
	{
		name: 'Brand-list',
		path: 'brand-list',
		element: <BrandsListAdminPage />,
	},
	{
		name: 'Brand-list',
		path: 'brand/:id',
		element: <BrandDetailsAdminPage />,
	},

	{
		name: 'Create Admin',
		path: 'create-admin',
		element: <MakeAdminPage />,
	},
	{
		name: 'Vendor-list',
		path: 'vendor-list',
		element: <VendorsListPage />,
	},
	{
		name: 'Vendor-list',
		path: 'vendor/:id',
		element: <VendorProfilePage />,
	},

	{
		name: 'Customer-list',
		path: 'customer-list',
		element: <CustomerListPage />,
	},
	{
		name: 'Customer-list',
		path: 'customer/:id',
		element: <CustomerDetailsPage />,
	},

	{
		name: 'Orders',
		path: 'order-list',
		element: <OrdersListAdminPage />,
	},
	{
		name: 'Orders',
		path: 'order/:id',
		element: <OrderDetailsAdminPage />,
	},
	{
		name: 'Blogs',
		path: 'blogs',
		element: <BlogListAdminPage />,
	},
	{
		name: 'Blogs',
		path: 'add-blog',
		element: <BlogAddAdminPage />,
	},
	{
		name: 'Invoice',
		path: 'invoice',
		element: <InvoicePage />,
	},

	{
		path: 'message',
		element: <MessagesPage />,
	},
];
