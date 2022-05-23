import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Product from '../Products/Product';

const Shop = () => {
    const [products]=useProduct()
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-10 lg:ml-10 sm:ml-0'>
            {
                products.map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default Shop;