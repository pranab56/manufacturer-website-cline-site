import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Page/Loading";

const UpdateModal = () => {
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
          name:data.Name,
          Department:data.Department,
          Address:data.Address,
          instituteName:data.instituteName,
          Linkedin:data.Linkedin,
          image:image
      }
      fetch('http://localhost:5000/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateUser),
})
.then(response => response.json())
.then(data => {
  
  if(data){
    toast('Your Profile Updated') 
    navigate('/dashboard/profile')
    
  }
})
       }
        
             
           
    
         
          if(updating){
              return <Loading></Loading>
          }
         
      })
  };
  return (
    <div>
      <div className="max-w-xl p-6 m-auto bg-slate-100 rounded-md shadow-2 dark:bg-gray-800 mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white mb-10">
          Update Your Profile
        </h1>
<Outlet></Outlet>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
           
           <input
             type="text"
             placeholder="Name"
             // react from hooks theke vailded kora
             {...register("Name", {
               required: {
                 value: true,
                 message: "Name is required",
               },
             })}
             className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
           />
            {errors.Name?.type === "required" && (
           <p className="text-red-500">{errors.Name.message}</p>
         )}
         </div>
         {/* react from hooks theke handle error theke bosate hobe */}
        

          <div className="mb-5">
           
            <input
              type="text"
              placeholder="Your institute Name"
              // react from hooks theke vailded kora
              {...register("instituteName", {
                required: {
                  value: true,
                  message: "instituteName is required",
                },
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.instituteName?.type === "required" && (
            <p className="text-red-500">{errors.instituteName.message}</p>
          )}
          </div>
          {/* react from hooks theke handle error theke bosate hobe */}
         
          <div className="mb-5">
           
            <input
              type="text"
              placeholder="Your Department"
              // react from hooks theke vailded kora
              {...register("Department", {
                required: {
                  value: true,
                  message: "Department is required",
                },
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.Department?.type === "required" && (
            <p className="text-red-500">{errors.Department.message}</p>
          )}
          </div>
          {/* react from hooks theke handle error theke bosate hobe */}
         
          <div className="mb-5">
           
            <input
              type="text"
              placeholder="Your Address"
              // react from hooks theke vailded kora
              {...register("Address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.Address?.type === "required" && (
            <p className="text-red-500">{errors.Address.message}</p>
          )}
          </div>
          {/* react from hooks theke handle error theke bosate hobe */}
          
          <div className="mb-5">
           
            <input
              type="text"
              placeholder="Your Linkedin link"
              // react from hooks theke vailded kora
              {...register("Linkedin", {
                required: {
                  value: true,
                  message: "Linkedin is required",
                },
              })}
              className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.Linkedin?.type === "required" && (
            <p className="text-red-500">{errors.Linkedin.message}</p>
          )}
          </div>
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
              Update
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default UpdateModal;
