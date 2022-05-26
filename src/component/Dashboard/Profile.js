import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Page/Loading';

const Profile = () => {
    const [users,setUsers]=useState([])
   const [user]=useAuthState(auth);
   const navigate=useNavigate()
  useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/profile?email=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            console.log(res)
              if(res.status===401 || res.status===403){
                signOut(auth)
                localStorage.removeItem('accessToken')
              navigate('/home')
              }
           return res.json()
        })
        .then(data=>setUsers(data))
       }
  },[user])
   
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