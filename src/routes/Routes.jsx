import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';
import Error from '../layout/Error';
import MainLayout from '../layout/MainLayout';
import ProfileLayout from '../layout/ProfileLayout';
import SettingAdminLayout from '../layout/SettingAdminLayout';
import BlogAddAdminPage from '../pages/dashboard/BlogAddAdminPage';
import BlogListAdminPage from '../pages/dashboard/BlogListAdminPage';
import BrandDetailsAdminPage from '../pages/dashboard/BrandDetailsAdminPage';
import BrandsListAdminPage from '../pages/dashboard/BrandsListAdminPage';
import CategoryDetailsAdminPage from '../pages/dashboard/CategoryDetailsAdminPage';
import CategoryListAdminPage from '../pages/dashboard/CategoryListAdminPage';
import ConnectMediaSetting from '../pages/dashboard/ConnectMediaSetting';
import CustomerDetailsPage from '../pages/dashboard/CustomerDetailsPage';
import CustomerListPage from '../pages/dashboard/CustomerListPage';
import InvoicePage from '../pages/dashboard/InvoicePage';
import LoginActivitySettingAdminPage from '../pages/dashboard/LoginActivitySettingAdminPage';
import MakeAdminPage from '../pages/dashboard/MakeAdminPage';
import MessagesPage from '../pages/dashboard/MessagesPage';
import NotificationSettingAdminPage from '../pages/dashboard/NotificationSettingAdminPage';
import OrderDetailsAdminPage from '../pages/dashboard/OrderDetailsAdminPage';
import OrdersListAdminPage from '../pages/dashboard/OrdersListAdminPage';
import PersonalInformationAdminPage from '../pages/dashboard/PersonalInformationAdminPage';
import ProductAddAdminPage from '../pages/dashboard/ProductAddAdminPage';
import ProductDetailsAdminPage from '../pages/dashboard/ProductDetailsAdminPage';
import ProductsListAdminPage from '../pages/dashboard/ProductsListAdminPage';
import VendorProfilePage from '../pages/dashboard/VendorProfilePage';
import VendorsListPage from '../pages/dashboard/VendorsListPage';
import BlogDetailsPage from '../pages/main/BlogDetailsPage';
import HomePage from '../pages/main/HomePage';
import ProductListPage from '../pages/main/ProductListPage';
import ProfileConversationPage from '../pages/main/ProfileConversationPage';
import ProfileInformationPage from '../pages/main/ProfileInformationPage';
import ProfileMessageConversationPage from '../pages/main/ProfileMessageConversationPage';
import ProfileSettingsPage from '../pages/main/ProfileSettingsPage';
import AccountCreatorPage from '../pages/main/register/AccountCreatorPage';
import TermsPage from '../pages/main/TermsPage';
import PrivateRoutes from './PrivateRoutes';

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
			<PrivateRoutes>
				<DashboardLayout />
			</PrivateRoutes>
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
