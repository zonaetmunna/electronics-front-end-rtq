import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({data}) => {
  console.log(data);

  return (
    <div className='grid grid-cols-4 gap-2'>
      {/* {data.map(product=><ProductCard key={data._id} product={data} />)} */}
    </div>
  );
};

export default Products;