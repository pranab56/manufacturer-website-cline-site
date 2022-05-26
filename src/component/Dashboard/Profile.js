import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Page/Loading';

const Profile = () => {
    const { isLoading, error, data:users } = useQuery('Profile', () =>
     fetch('http://localhost:5000/profile').then(res =>res.json()))
   
   if(isLoading){
       return <Loading></Loading>
   }
    return (
        
           <div className="flex flex-col justify-end mt-10  shadow-2xl rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
            
	<img src={users.image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-gray-700">
		<div className="my-2   space-y-1">
			<h2 className="text-xl text-center font-semibold sm:text-2xl">Name : {users.name}</h2>
			<div className=''>
            <p><span className='font-bold'>Collage Name</span> : {users.instituteName}</p>
			<p><span className='font-bold'>Department</span> : {users.Department}</p>
			<p><span className='font-bold'>Address</span> : {users.Address}</p>
			<p><span className='font-bold'>Linkedin</span> : {users.Linkedin}</p>
           
            </div>
		</div>
       
	</div>
    <div className='mt-10 text-center pb-10'>
            <button className='btn btn-primary '><Link to={'updateProfile'}>Update Your Profile </Link></button>
            </div>
</div>
        
    );
};

export default Profile;