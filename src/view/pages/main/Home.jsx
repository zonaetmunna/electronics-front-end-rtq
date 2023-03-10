import React, { useEffect } from 'react';
import Slider from '../../components/common/slider/Slider';
import Sidebar from '../../components/main/sidebar/Sidebar';
import Products from '../../components/main/products/Products';
import MiddleBanner from '../../components/main/home/MiddleBanner';
import DiscountBanner from '../../components/common/DiscountBanner/DiscountBanner';
import { useGetProductsQuery } from '../../../features/api/apiSlice';



const Home = () => {
  const {data,isLoading,isError}=useGetProductsQuery();
  console.log(data);

  return (
    <div className='px-2'>
      <div className="">
        <Slider products={data}/>
      </div>
      <div className='grid grid-cols-12 p-3 gap-2' >
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-10 rounded-lg'>
          <div>
            <h3 className='text-center text-yellow-500 my-2'>ALL Products</h3>
          </div>
          <div>
            {/* <Products products={data} /> */}
          </div>
          
        </div>
      </div>
      {/* middle banner */}
      <div>
        <MiddleBanner />
      </div>
      <div>
        <DiscountBanner/>
      </div>

      
    </div>
  );
};

export default Home;
//