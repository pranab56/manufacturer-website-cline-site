import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Page/Loading';
import DeleteModal from './DeleteModal';
import Order from './Order';


const MyOrder = () => {
    // const [orders,setorder]=useState([]);
    const [deleteOrder,setDeleteOrder]=useState(null)
    
    const [user]=useAuthState(auth);
    const navigate=useNavigate()


    const { isLoading, error, data:orders,refetch } = useQuery('MyOrder', () =>
    fetch(`http://localhost:5000/order?email=${user.email}`,{
      method:'GET',
            headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading></Loading>
  }









    // useEffect(()=>{
    //    if(user){

    //     fetch(`http://localhost:5000/order?email=${user.email}`,{
    //         method:'GET',
    //         headers:{
    //             'authorization':`bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res=>{
    //       console.log(res)
    //       if(res.status===401 || res.status===403){
    //         signOut(auth)
    //         localStorage.removeItem('accessToken')
    //       navigate('/home')
    //       }
    //      return res.json()
    //     })
    //     .then(data=>{
    //       setorder(data)})
    //    }
    // },[user])
  
    return (
       <div>

<div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>SL</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Delete</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
               
        orders.map((order,index)=><Order 
          key={order._id}
          order={order}
          index={index}
         
          setDeleteOrder={setDeleteOrder}
        ></Order>)
    }
    </tbody>
  </table>
</div>
        {
          deleteOrder && <DeleteModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
          ></DeleteModal>
        }

       </div>
            
    );
};

export default MyOrder;