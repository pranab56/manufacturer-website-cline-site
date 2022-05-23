import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Page/Loading';
import { toast } from 'react-toastify';


const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, verisending, verierror] = useSendEmailVerification(auth);
  // update korar jonno 
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate=useNavigate()
 
  // from onsubmit
  const onSubmit =async data =>{
    await createUserWithEmailAndPassword(data.email,data.password)
    
    await sendEmailVerification();
   toast('Cheak your Email')
    // update profile
     await updateProfile({ displayName:data.Name });
     
     console.log('update done');
    };
   

    

    // jodi google loading and email pass loading hoi
    if(loading || gLoading || updating || verisending){
      // ekhane loading componet ta create kora hoyeche
    return <Loading></Loading>
    }
    // error er jonno 
    let signinError;
    if(error || gError || updateError || verierror){
      signinError=<p className="text-red-500"><small>Error : {error.message || gError.message || updateError.message || verierror.message}</small></p>
    }

    // jodi GoogleUser thake taile dibe
  if(user || gUser){
    // console.log(user || gUser);
    navigate('/home')
  }
    return (
        <div className="w-full max-w-sm p-6 m-auto bg-slate-200 rounded-md shadow-md dark:bg-gray-800 mt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white mb-10">
        REGISTER
      </h1>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="Name"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            // react from hooks theke vailded kora 
            {...register("Name",{
              required:{
                value:true,
                message:'Name is required'
              },
             
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.Name?.type === 'required' && <p className="text-red-500">{errors.Name.message}</p>}
          
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Please your email"
            // react from hooks theke vailded kora 
            {...register("email",{
              required:{
                value:true,
                message:'Email is required'
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Provide is valid Email' 
              }
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.email?.type === 'required' && <p className="text-red-500">{errors.email.message}</p>}
          {errors.email?.type === 'pattern' && <p className="text-red-500">{errors.email.message}</p>}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
            type="password"
            {...register("password",{
              required:{
                value:true,
                message:'password is required'
              },
              minLength: {
                
                value: 6,
                message: 'Provide At last 6 character ' 
              }
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
            {errors.password?.type === 'required' && <p className="text-red-500">{errors.password.message}</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        {signinError}
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            REGISTER
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className="flex items-center mt-6 -mx-2">
        <button
          type="button"
          onClick={()=>signInWithGoogle()}
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            {" "}
          </svg>
          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>

      <Link
        className=" text-gray-700 dark:text-gray-200 hover:underline mt-8 text-xs font-gray text-center "
        to={"/login"}
      >
        Have an account?
      </Link>
      
    </div>
    );
};

export default Register;