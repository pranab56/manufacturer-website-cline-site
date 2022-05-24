import { createContext, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import OrderModal from './OrderModal';
import Product from './Product';
import ProductDetail from './ProductDetail';





const Products = () => {
  
   const [products]=useProduct()
   
   
   

    return (
     
       <nav>
          
           
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:ml-10 sm:ml-0'>
            {
               products.map(product=><Product
               key={product._id}
               product={product}
               
               ></Product>)
            }
        </div>
      
    
          
       </nav>
       
    );
    
};



export default Products;