
import React, { useEffect, useState } from 'react';
import Product from './Product';



const Products = () => {
    const [products,setproduct]=useState([]);
    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>setproduct(data))
    },[])
   
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:ml-10 sm:ml-0'>
            {
               products.map(product=><Product
               key={product._id}
               product={product}
               ></Product>)
            }
        </div>
    );
};

export default Products;