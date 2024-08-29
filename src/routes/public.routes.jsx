import { lazy } from 'react';

import Error from '../layout/Error';
import MainLayout from '../layout/MainLayout';
import { customerRoutes } from './customer.routes';

const HomePage = lazy(() => import('../pages/main/home/HomePage'));
const ProductListPage = lazy(() => import('../pages/main/product/ProductListPage'));
const ProductDetailsPage = lazy(() => import('../pages/main/product/ProductDetailsPage'));
const CartPage = lazy(() => import('../pages/main/cart/CartPage'));
const CheckoutPage = lazy(() => import('../pages/main/checkout/CheckoutPage'));
const WishListPage = lazy(() => import('../pages/main/wishlist/WishListPage'));
const AboutPage = lazy(() => import('../pages/main/AboutPage'));
const ContactPage = lazy(() => import('../pages/main/ContactPage'));
const BlogPage = lazy(() => import('../pages/main/blog/BlogPage'));
const BlogDetailsPage = lazy(() => import('../pages/main/blog/BlogDetailsPage'));
const PolicyPage = lazy(() => import('../pages/main/PolicyPage'));
const TermsPage = lazy(() => import('../pages/main/TermsPage'));
const LoginPage = lazy(() => import('../pages/main/auth/LoginPage'));
const SignupPage = lazy(() => import('../pages/main/auth/SignupPage'));

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
