import { lazy } from 'react';

import Error from '../layout/Error';
import MainLayout from '../layout/MainLayout';
import { customerRoutes } from './customer.routes';

const HomePage = lazy(() => import('../pages/main/HomePage'));
const ProductListPage = lazy(() => import('../pages/main/ProductListPage'));
const ProductDetailsPage = lazy(() => import('../pages/main/ProductDetailsPage'));
const CartPage = lazy(() => import('../pages/main/CartPage'));
const CheckoutPage = lazy(() => import('../pages/main/CheckoutPage'));
const WishListPage = lazy(() => import('../pages/main/WishListPage'));
const AboutPage = lazy(() => import('../pages/main/AboutPage'));
const ContactPage = lazy(() => import('../pages/main/ContactPage'));
const BlogPage = lazy(() => import('../pages/main/BlogPage'));
const BlogDetailsPage = lazy(() => import('../pages/main/BlogDetailsPage'));
const PolicyPage = lazy(() => import('../pages/main/PolicyPage'));
const TermsPage = lazy(() => import('../pages/main/TermsPage'));
const LoginPage = lazy(() => import('../pages/main/LoginPage'));
const SignupPage = lazy(() => import('../pages/main/SignupPage'));

export const publicRoutes = {
	path: '/',
	element: <MainLayout />,
	errorElement: <Error />,
	children: [
		{ path: '/', element: <HomePage /> },
		{ path: 'products', element: <ProductListPage /> },
		{ path: 'product/:id', element: <ProductDetailsPage /> },
		{ path: 'cart', element: <CartPage /> },
		{ path: 'checkout', element: <CheckoutPage /> },
		{ path: 'wishlist', element: <WishListPage /> },
		{ path: 'about', element: <AboutPage /> },
		{ path: 'contact', element: <ContactPage /> },
		{ path: 'blog', element: <BlogPage /> },
		{ path: 'blog/:id', element: <BlogDetailsPage /> },
		{ path: 'privacy-policy', element: <PolicyPage /> },
		{ path: 'terms', element: <TermsPage /> },
		{ path: 'login', element: <LoginPage /> },
		{ path: 'signup', element: <SignupPage /> },
		customerRoutes,
	],
};
