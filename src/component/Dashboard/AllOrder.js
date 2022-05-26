import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Page/Loading';

const AllOrder = () => {
    const { isLoading, error, data:totalOrder,refetch } = useQuery('TotalOrder', () =>
    fetch('https://protected-headland-11600.herokuapp.com/order',{
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
        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>SL</th>
        <th>ProductName</th>
        <th>Email</th>
        <th>Price</th>
        <th>Number</th>
        <th>Quantity</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      
     {
         totalOrder.map((order,index)=><tr>
            <th>{index+1}</th>
            <td className='font-bold'>{order.ProductName}</td>
            <td className='font-bold'>{order.email}</td>
            <td className='font-bold'>${order.price}</td>
            <td className='font-bold'>{order.number}</td>
            <td className='font-bold'>{order.quantity}</td> 
            <td>
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success'>Pay</button></Link>}
                        {(order.price && order.paid) && <div>
                            <span className='text-success'>paid</span>
                            <p>TransactionID : <span className='text-success'>{order.transactionId}</span></p>
                            </div>}
                    </td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
    );
};

export default AllOrder;