import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Order from './Order';

const MyOrder = () => {
    const [orders,setorder]=useState([]);
    console.log(orders);
    const [user]=useAuthState(auth)
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setorder(data))
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