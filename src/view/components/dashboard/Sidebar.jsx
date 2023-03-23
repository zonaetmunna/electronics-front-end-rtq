import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar = () => {

  const {
    user: { role },
  } = useSelector((state) => state.auth);

  const merchantRoutes = [
    {
      name: "all Products",
      path: "all-products",
    },
    {
      name: "Add Products",
      path: "add-products",
    },

  ];

  const adminRoutes = [
    {
      name: "Applied jobs",
      path: "applied-jobs",
    },
  ];

  return (
    <div className='col-span-2 bg-gradient-to-r from-yellow-400 h-[calc(100vh-25px)] p-5 rounded-lg shadow-md hover:bg-amber-200'>
      <ul className='flex gap-3 flex-col h-full'>


        {role === "merchant" &&
          merchantRoutes.map(({ name, path }) => (
            <li>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        {/* <li className='font-bold text-lg text-center hover:text-sky-500 px-2 '>Admin Dashboard</li>
        <li className='text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100'>
          <Link to='/dashboard'className='text-lg text-black'>All-Products</Link>
        </li>
        <li className='text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100'>
          <Link to='add-product'> Add-Product </Link>
        </li>
        <li className='text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100'> */}
        {/* <Link to='make-admin'> make-admin </Link>
        </li> */}
        <li className='mt-auto text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100'>
          <Link to='/'> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;