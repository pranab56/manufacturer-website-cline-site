import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const MyReview = () => {
    
    const navigate=useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageStorageKey='332c4fd76bcbedab8932e57f1538543b';
  const onSubmit =(data) => {
      
      const img=data.img[0];
      
      const formData=new FormData();
      formData.append('image',img)
      const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
      fetch(url,{
          method:'POST',
          body:formData
      })
      .then(res=>res.json())
      .then(result=>{
       if(result.success){
        const img=result.data.url;
        const updateUser={
          name:data.name,
          description:data.description,
          Ratings:data.Ratings,
          address:data.address,
          img:img
      }
      fetch('http://localhost:5000/review', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateUser),
})
.then(response => response.json())
.then(data => {
    console.log(data);
  if(data){
      toast('ThankYou Sir')
    navigate('/dashboard')
  }
    

})
       }
        
         
      })
  };

    return (
        <div>
        <div className="max-w-xl p-6 m-auto bg-slate-100 rounded-md shadow-2 dark:bg-gray-800 mt-10">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white mb-10">
            Please Add a Review
          </h1>
  <Outlet></Outlet>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
             
             <input
               type="text"
               placeholder="Your Name"
               // react from hooks theke vailded kora
               {...register("name", {
                 required: {
                   value: true,
                   message: "Name is required",
                 },
               })}
               className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
             />
              {errors.name?.type === "required" && (
             <p className="text-red-500">{errors.name.message}</p>
           )}
           </div>
           {/* react from hooks theke handle error theke bosate hobe */}
           <div className="mb-5">
             
              <textarea
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
                placeholder="Ratings"
                // react from hooks theke vailded kora
                {...register("Ratings", {
                  required: {
                    value: true,
                    message: "Ratings is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.Ratings?.type === "required" && (
              <p className="text-red-500">{errors.Ratings.message}</p>
            )}
            </div>
            {/* react from hooks theke handle error theke bosate hobe */}
           
            <div className="mb-5">
             
              <input
                type="text"
                placeholder="address"
                // react from hooks theke vailded kora
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
               {errors.address?.type === "required" && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
            </div>
         
           
            <div className="mb-5">
             
              <input
                type="file"
                placeholder="Your Image"
                // react from hooks theke vailded kora
                {...register("img", {
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
               Add A Product
              </button>
            </div>
          </form>
  
         
        </div>
      </div>
    );
};

export default MyReview;