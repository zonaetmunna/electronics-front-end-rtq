import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../view/layout/Dashboard";
import Error from "../view/layout/Error";
import Main from "../view/layout/Main";
import About from "../view/pages/main/About";
import Cart from "../view/pages/main/Cart";
import Checkout from "../view/pages/main/Checkout";
import Contact from "../view/pages/main/Contact";
import Home from "../view/pages/main/Home";
import Login from "../view/pages/main/Login";
import AccountCreator from "../view/pages/main/register/AccountCreator";

import MakeAdmin from "../view/pages/dashboard/MakeAdmin";
import BrandDetails from "../view/pages/dashboard/brands/BrandDetails";
import BrandsList from "../view/pages/dashboard/brands/BrandsList";
import CategoryDetails from "../view/pages/dashboard/categories/CategoryDetails";
import CategoryList from "../view/pages/dashboard/categories/CategoryList";
import CustomerDetails from "../view/pages/dashboard/customers/CustomerDetails";
import CustomerList from "../view/pages/dashboard/customers/CustomerList";
import Invoice from "../view/pages/dashboard/invoice/Invoice";
import Messages from "../view/pages/dashboard/messages/Messages";
import OrderDetails from "../view/pages/dashboard/orders/OrderDetails";
import OrdersList from "../view/pages/dashboard/orders/OrdersList";
import AddProduct from "../view/pages/dashboard/products/AddProduct";
import AllProducts from "../view/pages/dashboard/products/AllProducts";
import ProductDetails from "../view/pages/dashboard/products/ProductDetails";
import ConnectMediaSetting from "../view/pages/dashboard/setting/ConnectMediaSetting";
import LoginActivitySetting from "../view/pages/dashboard/setting/LoginActivitySetting";
import NotificationSetting from "../view/pages/dashboard/setting/NotificationSetting";
import PersonalInformation from "../view/pages/dashboard/setting/PersonalInformation";
import Setting from "../view/pages/dashboard/setting/Setting";
import VendorProfile from "../view/pages/dashboard/vendors/VendorProfile";
import VendorsList from "../view/pages/dashboard/vendors/VendorsList";
import Blog from "../view/pages/main/Blog";
import Policy from "../view/pages/main/Policy";
import Profile from "../view/pages/main/Profile";
import ProfileInformation from "../view/pages/main/ProfileInformation";
import ProfileOrders from "../view/pages/main/ProfileOrders";
import ProfileSettings from "../view/pages/main/ProfileSettings";
import Shop from "../view/pages/main/Shop";
import Signup from "../view/pages/main/Signup";
import SingleBlog from "../view/pages/main/SingleBlog";
import SingleProduct from "../view/pages/main/SingleProduct";
import Terms from "../view/pages/main/Terms";
import WishList from "../view/pages/main/WishList";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  // main
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:searchQuery",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "wishlist",
        element: <WishList />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "privacy-policy",
        element: <Policy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoutes>
            <AccountCreator />
          </PrivateRoutes>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoutes>
            <AccountCreator />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/profile",
            element: <ProfileInformation />,
          },
          {
            path: "orders",
            element: <ProfileOrders />,
          },
          {
            path: "settings",
            element: <ProfileSettings />,
          },
        ],
      },
    ],
  },
  // dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "product-list",
        element: <AllProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "product-add",
        element: <AddProduct />,
      },
      {
        path: "category-list",
        element: <CategoryList />,
      },
      {
        path: "category/:id",
        element: <CategoryDetails />,
      },
      {
        path: "brand-list",
        element: <BrandsList />,
      },
      {
        path: "brand/:id",
        element: <BrandDetails />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },

      {
        path: "vendor-list",
        element: <VendorsList />,
      },
      {
        path: "vendor/:id",
        element: <VendorProfile />,
      },
      {
        path: "customer-list",
        element: <CustomerList />,
      },
      {
        path: "customer/:id",
        element: <CustomerDetails />,
      },
      {
        path: "order-list",
        element: <OrdersList />,
      },
      {
        path: "order/:id",
        element: <OrderDetails />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "settings",
        element: <Setting />,
        children: [
          {
            path: "personal-information",
            element: <PersonalInformation />,
          },
          {
            path: "notification-setting",
            element: <NotificationSetting />,
          },
          {
            path: "login-activity-settings",
            element: <LoginActivitySetting />,
          },
          {
            path: "connect-media-setting",
            element: <ConnectMediaSetting />,
          },
        ],
      },
      {
        path: "message",
        element: <Messages />,
      },
    ],
  },
]);
