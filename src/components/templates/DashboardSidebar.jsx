/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { BiMessageSquare } from 'react-icons/bi';
import {
  FaCog, FaFilePdf, FaList, FaPlus, FaUser
} from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiLogOut, FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCategory, MdOutlineProductionQuantityLimits, MdPeople, MdPerson } from 'react-icons/md';
import { TbBrand4Chan } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../atoms/Button';
import MenuButton from '../molecules/MenuButton';
import SubMenu from '../molecules/SubMenu';





const DashboardSidebar = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const isDarkMode = useSelector((state) => state.settings.darkMode);

  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuState, setMenuState] = useState({
    isProductOpen: false,
    isCategoriesOpen: false,
    isBrandsOpen: false,
    isVendorOpen: false,
    isCustomerOpen: false,
    isAdminOpen: false,
    isManagerOpen: false,
    isOrderOpen: false,
    isBlogOpen: false,
  });

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMenu = (menu) => setMenuState((prev) => ({ ...prev, [menu]: !prev[menu] }));

  const menus = [
    {
      label: 'Products',
      icon: <MdOutlineProductionQuantityLimits />,
      isOpen: menuState.isProductOpen,
      onClick: () => toggleMenu('isProductOpen'),
      subMenuItems: [
        { to: 'product-list', icon: <FaList />, label: 'Product List' },
        { to: 'product-add', icon: <FaPlus />, label: 'Add Product' },
      ],
    },
    {
      label: 'Categories',
      icon: <MdOutlineCategory />,
      isOpen: menuState.isCategoriesOpen,
      onClick: () => toggleMenu('isCategoriesOpen'),
      subMenuItems: [
        { to: 'category-list', icon: <FaList />, label: 'Category List' },
      ],
    },
    {
      label: 'Brand',
      icon: <TbBrand4Chan />,
      isOpen: menuState.isBrandsOpen,
      onClick: () => toggleMenu('isBrandsOpen'),
      subMenuItems: [
        { to: 'brand-list', icon: <FaList />, label: 'Brand List' },
      ],
    },
    {
      label: 'Vendors',
      icon: <FaUser />,
      isOpen: menuState.isVendorOpen,
      onClick: () => toggleMenu('isVendorOpen'),
      subMenuItems: [
        { to: 'vendor-list', icon: <MdPeople />, label: 'Vendors List' },
      ],
    },
    {
      label: 'Customer',
      icon: <MdPerson />,
      isOpen: menuState.isCustomerOpen,
      onClick: () => toggleMenu('isCustomerOpen'),
      subMenuItems: [
        { to: 'customer-list', icon: <MdPeople />, label: 'Customer List' },
      ],
    },
    {
      label: 'Admin',
      icon: <MdPerson />,
      isOpen: menuState.isAdminOpen,
      onClick: () => toggleMenu('isAdminOpen'),
      subMenuItems: [
        { to: 'admin-list', icon: <MdPeople />, label: 'Admin List' },
        { to: 'make-admin', icon: <FaPlus />, label: 'Make Admin' },
      ],
    },
    {
      label: 'Manager',
      icon: <MdPerson />,
      isOpen: menuState.isManagerOpen,
      onClick: () => toggleMenu('isManagerOpen'),
      subMenuItems: [
        { to: 'manager-list', icon: <MdPeople />, label: 'Manager List' },
      ],
    },
    {
      label: 'Orders',
      icon: <FiShoppingBag />,
      isOpen: menuState.isOrderOpen,
      onClick: () => toggleMenu('isOrderOpen'),
      subMenuItems: [
        { to: 'order-list', icon: <FiShoppingBag />, label: 'Order List' },
      ],
    },
    {
      label: 'Blogs',
      icon: <FaList />,
      isOpen: menuState.isBlogOpen,
      onClick: () => toggleMenu('isBlogOpen'),
      subMenuItems: [
        { to: 'blogs', icon: <FaList />, label: 'Blogs' },
        { to: 'add-blog', icon: <FaPlus />, label: 'Add Blog' },
      ],
    },
  ];

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-56'
      } top-0 left-0 h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}  flex flex-col transition-all duration-300 ease-in-out`}
    >
      <nav className="flex flex-col py-4">
        {menus.map((menu, index) => (
          <div key={menu.label}>
            <MenuButton
              icon={menu.icon}
              label={menu.label}
              isOpen={menu.isOpen}
              onClick={menu.onClick}
              isCollapsed={isCollapsed}
            />
            <SubMenu
              isOpen={menu.isOpen}
              items={menu.subMenuItems}
              isCollapsed={isCollapsed}
            />
          </div>
        ))}
        <MenuButton
          icon={<FaFilePdf />}
          label="Invoice"
          onClick={() => navigate('invoice')}
          isCollapsed={isCollapsed}
        />
        <MenuButton
          icon={<FaCog />}
          label="Settings"
          onClick={() => navigate('settings')}
          isCollapsed={isCollapsed}
        />
        <MenuButton
          icon={<BiMessageSquare />}
          label="Message"
          onClick={() => navigate('message')}
          isCollapsed={isCollapsed}
        />
       
      </nav>

      <div className="flex items-center justify-center sticky bottom-4">
        <Button className={`flex items-center py-2 px-4 bg-red-500 ${isDarkMode? 'text-white' : 'text-black'} rounded-full hover:bg-red-700 transition-colors duration-200`}>
          <span className="mr-2">
            <FiLogOut className="mr-4" />
          </span>
          <span className={`${isCollapsed ? 'hidden' : ''}`}>Logout</span>
        </Button>
      </div>

      <Button className="absolute bottom-0 mb-6 mx-auto cursor-pointer" onClick={toggleSidebar}>
        {isCollapsed ? (
          <FiChevronRight className="text-gray-500 text-2xl" />
        ) : (
          <FiChevronLeft className="text-gray-500 text-2xl" />
        )}
      </Button>
    </div>
  );
};

export default DashboardSidebar;
