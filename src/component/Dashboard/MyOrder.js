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
    fetch(`https://protected-headland-11600.herokuapp.com/order?email=${user.email}`,{
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


  
    return (
       <div>

<div class="lg:overflow-x-auto sm:overflow-x-auto lg:w-auto sm:w-auto">
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
    {/* <tbody> */}
    {
               
        orders?.map((order,index)=><Order 
          key={order._id}
          order={order}
          index={index}
         
          setDeleteOrder={setDeleteOrder}
        ></Order>)

    }
    {/* </tbody> */}
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