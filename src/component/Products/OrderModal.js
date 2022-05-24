import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';

import auth from '../firebase.init';

const OrderModal = ({product,setOrder}) => {
  
    const [user] = useAuthState(auth);
    
    const handleOnSubmit=event=>{
      event.preventDefault()
      const ProductName=product?.name;
      const name=event.target.fullName.value;
      const email=user.email
      const address=event.target.address.value;
      const number=event.target.number.value;
      const quantity=event.target.quantity.value;
      
      const totalQuantity=product.availablequantity-product.orderquantity;
      if(totalQuantity<quantity ){
       
       return toast.error('please input a Available quantity')
      
      }
    
      else if(quantity<0){
        return toast.error('wrong input a quantity')
      }
      const data={ProductName,name,email,address,number,quantity}
      fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        
        if(data.Success){
          toast.success('Your product ordered')
          
        }
        setOrder(null)
      })
      
      
    }
    return (
        <div>
        <input type="checkbox" id="Order-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="Order-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Account settings
              </h2>
  
              <form onSubmit={handleOnSubmit}>
                <div className="">
                  <div>
                    <input
                      id="username"
                      name="productName"
                      disabled
                      value={product?.name}
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      id="username"
                      autoComplete="off"
                      name="fullName"
                     value={user?.displayName}
                     disabled
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      id="emailAddress"
                      autoComplete="off"
                      name="email"
                      value={user?.email}
                      disabled
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <input
                      id="emailAddress"
                      autoComplete="off"
                      name="address"
                      placeholder='Address'
                     required
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
        
                  <div>
                    <input
                      id="username"
                      name="number"
                      autoComplete="off"
                      type="number"
                      placeholder="PHONE NUMBER"
                     required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    
</div>
                  <div>
                    <input
                      id="username"
                      name="quantity"
                      autoComplete="off"
                      type="number"
                      required
                      placeholder="quantity"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                 

                </div>
  
                <div className=" mt-6">
                  <input
                    className="px-6 w-full py-2 leading-5 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-gray-600"
                    type="submit"
                    value="SUBMIT"
                  />
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
};

export default OrderModal;