import { signOut } from 'firebase/auth';
import React from 'react';
import { BsCart3, BsHeart, BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/Electronics-logo.png';
import { logOut } from '../../../../features/auth/authSlice';
import auth from '../../../../firebase/firebase.config';


const Navbar = () => {
  const { user: { email } } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // handle signOut
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <div className="py-3 px-3">
      <div className='flex items-center justify-between'>
        {/* logo link */}
        <div className='border rounded'>
          <Link to="/">
            <img src={logo} alt="" className='w-12 ' />
          </Link>
        </div>
        {/* search input filed */}
        <div >
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" size={20} />
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700" placeholder="Search Mockups, Logos..." required />
          </div>
        </div>
        <div className='flex justify-around align-center'>
          {/* wishlist */}
          <div className='mx-2 button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            <Link to="/wishlist">
              <span><BsHeart size={20} className="text-yellow-500" /></span>
            </Link>
          </div>
          {/* cart */}
          <div className='mx-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            <Link to='/cart'>
              <span><BsCart3 size={20} className="text-yellow-500" /></span>
            </Link>
          </div>
          {/* dashboard link */}
          <div className='mx-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          {/* login and signUp or user */}
          {email ? (<div>
            <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleSignOut}>
              <span><VscAccount size={20} /></span>
            </button>
          </div> ):
            (<div className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              <Link to="/login">Login</Link>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;