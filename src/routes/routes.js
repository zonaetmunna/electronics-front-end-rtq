import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../view/layout/Dashboard";
import Error from "../view/layout/Error";
import Main from "../view/layout/Main";
import AdminDashboard from "../view/pages/dashboard/adminDashboard/AdminDashboard";
import MerchantDashboard from "../view/pages/dashboard/merchantDashboard/MerchantDashboard";
import About from "../view/pages/main/About";
import Cart from "../view/pages/main/Cart";
import Checkout from "../view/pages/main/Checkout";
import Contact from "../view/pages/main/Contact";
import Home from "../view/pages/main/Home";
import Login from "../view/pages/main/Login";
import AccountCreator from "../view/pages/main/register/AccountCreator";

import SingleProduct from "../view/pages/main/SingleProduct";
import WishList from "../view/pages/main/WishList";
import Signup from "../view/pages/main/Signup";
import PrivateRoutes from "./PrivateRoutes";
import VendorsList from "../view/pages/dashboard/vendors/VendorsList";
import VendorProfile from "../view/pages/dashboard/vendors/VendorProfile";
import CustomerList from "../view/pages/dashboard/customers/CustomerList";
import Customer from "../view/pages/dashboard/customers/Customer";
import Invoice from "../view/pages/dashboard/invoice/Invoice";
import OrdersList from "../view/pages/dashboard/orders/OrdersList";
import OrderDetails from "../view/pages/dashboard/orders/OrderDetails";
import Setting from "../view/pages/dashboard/setting/Setting";
import Message from "../view/pages/dashboard/message/Message";
import AllProducts from "../view/pages/dashboard/products/AllProducts";
import AddProduct from "../view/pages/dashboard/products/AddProduct";
import MakeAdmin from "../view/pages/dashboard/MakeAdmin";

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
        path: "product-add",
        element: <AddProduct />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "merchant-dashboard",
        element: <MerchantDashboard />,
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
        element: <Customer />,
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
      },
      {
        path: "message",
        element: <Message />,
      },
    ],
  },
]);
