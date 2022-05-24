import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const MyOrder = () => {
    const [orders,setorder]=useState([]);
    
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/order?email=${user.email}`,{
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
        .then(data=>{
          setorder(data)})
       }
    },[user])
    return (
       <div>

<div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>SL</th>
        <th>Product Name</th>
        <th>User Email</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
    {
               orders.map((order,index)=><tr>
                <th>{index+1}</th>
                <td>{order.ProductName}</td>
                <td>{order.email}</td>
                <td>{order.quantity}</td>
              </tr>)
           }
      
     
    </tbody>
  </table>
</div>
        
       </div>
            
    );
};

export default MyOrder;