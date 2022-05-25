import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Page/Loading";

const AddProduct = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate=useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageStorageKey='332c4fd76bcbedab8932e57f1538543b';
  const onSubmit =(data) => {
      
      const image=data.image[0];
      const formData=new FormData();
      formData.append('image',image)
      const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
      fetch(url,{
          method:'POST',
          body:formData
      })
      .then(res=>res.json())
      .then(result=>{
       if(result.success){
        const image=result.data.url;
        const updateUser={
          name:data.product,
          description:data.description,
          price:data.price,
          orderquantity:data.orderquantity,
          availableauantity:data.availableauantity,
          image:image
      }
      fetch('http://localhost:5000/product', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateUser),
})
.then(response => response.json())
.then(data => {
  
console.log(data);
    

})
       }
        
         
      })
  };
    return (
        <div>
        <div className="max-w-xl p-6 m-auto bg-slate-100 rounded-md shadow-2 dark:bg-gray-800 mt-10">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white mb-10">
            Update Product
          </h1>
  <Outlet></Outlet>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
             
             <input
               type="text"
               placeholder="Product Name"
               // react from hooks theke vailded kora
               {...register("product", {
                 required: {
                   value: true,
                   message: "Product Name is required",
                 },
               })}
               className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
             />
              {errors.product?.type === "required" && (
             <p className="text-red-500">{errors.product.message}</p>
           )}
           </div>
           {/* react from hooks theke handle error theke bosate hobe */}
           <div className="mb-5">
             
              <input
                type="text"
                placeholder="description "
                // react from hooks theke vailded kora
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is required",
                  },
                })}
                className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.description?.type === "required" && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
            </div>
  
            <div className="mb-5">
             
              <input
                type="number"
                placeholder="price"
                // react from hooks theke vailded kora
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.price?.type === "required" && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
            </div>
            {/* react from hooks theke handle error theke bosate hobe */}
           
            <div className="mb-5">
             
              <input
                type="number"
                placeholder="OrderQuantity"
                // react from hooks theke vailded kora
                {...register("orderquantity", {
                  required: {
                    value: true,
                    message: "orderouantity is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.orderouantity?.type === "required" && (
              <p className="text-red-500">{errors.orderouantity.message}</p>
            )}
            </div>
            {/* react from hooks theke handle error theke bosate hobe */}
           
            <div className="mb-5">
             
              <input
                type="number"
                placeholder="AvailableQuantity "
                // react from hooks theke vailded kora
                {...register("availableauantity ", {
                  required: {
                    value: true,
                    message: "availablequantity  is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.availablequantity?.type === "required" && (
              <p className="text-red-500">{errors.availablequantity.message}</p>
            )}
            </div>
            {/* react from hooks theke handle error theke bosate hobe */}
            
           
            {/* react from hooks theke handle error theke bosate hobe */}
           
            <div className="mb-5">
             
              <input
                type="file"
                placeholder="Your Image"
                // react from hooks theke vailded kora
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.image?.type === "required" && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
            </div>
            {/* react from hooks theke handle error theke bosate hobe */}
           
  
  
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
               Please Add Product
              </button>
            </div>
          </form>
  
         
        </div>
      </div>
    );
};

export default AddProduct;