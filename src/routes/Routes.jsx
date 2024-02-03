import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Error from '../layout/Error';
import MainLayout from '../layout/MainLayout';
import ConnectMediaSetting from '../pages/dashboard/ConnectMediaSetting';
import HomePage from '../pages/main/HomePage';
import PrivateRoutes from './PrivateRoutes';

const ProductAddAdminPage = lazy(() => import('../pages/dashboard/ProductAddAdminPage'));
const ProductDetailsAdminPage = lazy(() => import('../pages/dashboard/ProductDetailsAdminPage'));
const ProductsListAdminPage = lazy(() => import('../pages/dashboard/ProductsListAdminPage'));
const VendorProfilePage = lazy(() => import('../pages/dashboard/VendorProfilePage'));
const VendorsListPage = lazy(() => import('../pages/dashboard/VendorsListPage'));
const BlogDetailsPage = lazy(() => import('../pages/main/BlogDetailsPage'));
const ProductListPage = lazy(() => import('../pages/main/ProductListPage'));
const ProfileConversationPage = lazy(() => import('../pages/main/ProfileConversationPage'));
const ProfileInformationPage = lazy(() => import('../pages/main/ProfileInformationPage'));
const ProfileMessageConversationPage = lazy(
	() => import('../pages/main/ProfileMessageConversationPage')
);
const ProfileSettingsPage = lazy(() => import('../pages/main/ProfileSettingsPage'));
const AccountCreatorPage = lazy(() => import('../pages/main/register/AccountCreatorPage'));
const TermsPage = lazy(() => import('../pages/main/TermsPage'));
const OrderDetailsAdminPage = lazy(() => import('../pages/dashboard/OrderDetailsAdminPage'));
const OrdersListAdminPage = lazy(() => import('../pages/dashboard/OrdersListAdminPage'));
const PersonalInformationAdminPage = lazy(
	() => import('../pages/dashboard/PersonalInformationAdminPage')
);
const MessagesPage = lazy(() => import('../pages/dashboard/MessagesPage'));
const NotificationSettingAdminPage = lazy(
	() => import('../pages/dashboard/NotificationSettingAdminPage')
);
const MakeAdminPage = lazy(() => import('../pages/dashboard/MakeAdminPage'));
const InvoicePage = lazy(() => import('../pages/dashboard/InvoicePage'));
const LoginActivitySettingAdminPage = lazy(
	() => import('../pages/dashboard/LoginActivitySettingAdminPage')
);
const CustomerDetailsPage = lazy(() => import('../pages/dashboard/CustomerDetailsPage'));
const CustomerListPage = lazy(() => import('../pages/dashboard/CustomerListPage'));
const CategoryListAdminPage = lazy(() => import('../pages/dashboard/CategoryListAdminPage'));

const CategoryDetailsAdminPage = lazy(() => import('../pages/dashboard/CategoryDetailsAdminPage'));
const BrandsListAdminPage = lazy(() => import('../pages/dashboard/BrandsListAdminPage'));
const BlogListAdminPage = lazy(() => import('../pages/dashboard/BlogListAdminPage'));
const BrandDetailsAdminPage = lazy(() => import('../pages/dashboard/BrandDetailsAdminPage'));

const BlogAddAdminPage = lazy(() => import('../pages/dashboard/BlogAddAdminPage'));
const SettingAdminLayout = lazy(() => import('../layout/SettingAdminLayout'));

const ProfileLayout = lazy(() => import('../layout/ProfileLayout'));

const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

const SignupPage = lazy(() => import('../pages/main/SignupPage'));
const ProfileMessagePage = lazy(() => import('../pages/main/ProfileMessagePage'));
const ProfileNotificationPage = lazy(() => import('../pages/main/ProfileNotificationPage'));
const ProfileOrdersPage = lazy(() => import('../pages/main/ProfileOrdersPage'));
const PolicyPage = lazy(() => import('../pages/main/PolicyPage'));
const LoginPage = lazy(() => import('../pages/main/LoginPage'));
const ProductDetailsPage = lazy(() => import('../pages/main/ProductDetailsPage'));
const AboutPage = lazy(() => import('../pages/main/AboutPage'));
const ContactPage = lazy(() => import('../pages/main/ContactPage'));
const WishListPage = lazy(() => import('../pages/main/WishListPage'));
const CheckoutPage = lazy(() => import('../pages/main/CheckoutPage'));
const BlogPage = lazy(() => import('../pages/main/BlogPage'));
const CartPage = lazy(() => import('../pages/main/CartPage'));

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'products',
				element: <ProductListPage />,
			},
			{
				path: 'products/:searchQuery',
				element: <ProductListPage />,
			},
			{
				path: 'product/:id',
				element: <ProductDetailsPage />,
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
			{
				path: 'checkout',
				element: <CheckoutPage />,
			},

			{
				path: 'wishlist',
				element: <WishListPage />,
			},

			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
			{
				path: 'blog',
				element: <BlogPage />,
			},
			{
				path: '/blog/:id',
				element: <BlogDetailsPage />,
			},
			{
				path: 'privacy-policy',
				element: <PolicyPage />,
			},
			{
				path: 'terms',
				element: <TermsPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/signup',
				element: <SignupPage />,
			},
			{
				path: '/register',
				element: (
					<PrivateRoutes>
						<AccountCreatorPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/register/:type',
				element: (
					<PrivateRoutes>
						<AccountCreatorPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/profile',
				element: (
					<PrivateRoutes>
						<ProfileLayout />
					</PrivateRoutes>
				),
				children: [
					{
						path: '/profile',
						element: <ProfileInformationPage />,
					},
					{
						path: 'orders',
						element: <ProfileOrdersPage />,
					},
					{
						path: 'messages',
						element: <ProfileMessagePage />,
						children: [
							{
								path: 'messages',
								element: <ProfileConversationPage />,
							},
							{
								path: 'messages/:conversationId',
								element: <ProfileMessageConversationPage />,
							},
						],
					},
					{
						path: 'notification',
						element: <ProfileNotificationPage />,
					},
					{
						path: 'settings',
						element: <ProfileSettingsPage />,
					},
				],
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			// <PrivateRoutes>
			<DashboardLayout />
			// </PrivateRoutes>
		),
		errorElement: <Error />,
		children: [
			{
				path: 'product-list',
				element: <ProductsListAdminPage />,
			},
			{
				path: 'product/:id',
				element: <ProductDetailsAdminPage />,
			},
			{
				path: 'product-add',
				element: <ProductAddAdminPage />,
			},
			{
				path: 'category-list',
				element: <CategoryListAdminPage />,
			},
			{
				path: 'category/:id',
				element: <CategoryDetailsAdminPage />,
			},
			{
				path: 'brand-list',
				element: <BrandsListAdminPage />,
			},
			{
				path: 'brand/:id',
				element: <BrandDetailsAdminPage />,
			},
			{
				path: 'make-admin',
				element: <MakeAdminPage />,
			},

			{
				path: 'vendor-list',
				element: <VendorsListPage />,
			},
			{
				path: 'vendor/:id',
				element: <VendorProfilePage />,
			},
			{
				path: 'customer-list',
				element: <CustomerListPage />,
			},
			{
				path: 'customer/:id',
				element: <CustomerDetailsPage />,
			},
			{
				path: 'order-list',
				element: <OrdersListAdminPage />,
			},
			{
				path: 'order/:id',
				element: <OrderDetailsAdminPage />,
			},
			{
				path: 'blogs',
				element: <BlogListAdminPage />,
			},
			{
				path: 'add-blog',
				element: <BlogAddAdminPage />,
			},
			{
				path: 'invoice',
				element: <InvoicePage />,
			},
			{
				path: 'settings',
				element: <SettingAdminLayout />,
				children: [
					{
						path: 'personal-information',
						element: <PersonalInformationAdminPage />,
					},
					{
						path: 'notification-setting',
						element: <NotificationSettingAdminPage />,
					},
					{
						path: 'login-activity-settings',
						element: <LoginActivitySettingAdminPage />,
					},
					{
						path: 'connect-media-setting',
						element: <ConnectMediaSetting />,
					},
				],
			},
			{
				path: 'message',
				element: <MessagesPage />,
			},
		],
	},
]);
