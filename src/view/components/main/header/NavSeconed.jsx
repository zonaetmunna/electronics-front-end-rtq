import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const NavSeconed = () => {
  return (
    <div className='bg-yellow-500 py-5'>
      <div className='flex justify-around items-center'>
        <div>
          <h4>ALL Categories</h4>
        </div>
        <div className='flex justify-around items-center'>
          <div>
            <Link to="/" className='font-bold m-2'>Homepage</Link>
          </div>
          <div>
          <Link to="/" className='font-bold m-2'>Shop</Link>
          </div>
          <div>
          <Link to="/" className='font-bold m-2'>Privecy policy</Link>
          </div>
          <div>
            <Link to="/" className='font-bold m-2'>Terms&condition</Link>
          </div>
          <div>
            <Link to="/" className='font-bold m-2'>About</Link>
          </div>
          <div>
            <Link to="/" className='font-bold m-2'>Contact</Link>
          </div>
        </div>
        <div>
          <Link to="/register" className='text-white bg-black  rounded px-2 py-2 flex justify-between items-center font-bold'><span className='mr-2'>become a Seller</span><span><MdOutlineKeyboardArrowRight size={20}/></span></Link>
          
        </div>
        
      </div>
     
    </div>
  );
};

export default NavSeconed;