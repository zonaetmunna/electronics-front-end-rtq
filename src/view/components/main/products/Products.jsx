import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({products}) => {
  console.log(products);

  return (
    <div className='grid grid-cols-4 gap-2'>
      {products.map(product=><ProductCard key={products._id} product={products} />)}
    </div>
  );
};

export default Products;