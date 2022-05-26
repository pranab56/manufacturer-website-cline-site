import React from 'react';
import { Link } from 'react-router-dom';



const Order = ({order,index ,setDeleteOrder}) => {
 
   
console.log(order);
    return (
        <tr key={order._id}>
                <th>{index+1}</th>
                <td>{order.ProductName}</td>
                <td>{order.quantity}</td>
              
                <td><label onClick={()=>setDeleteOrder(order)} for="delete-modal" class="btn btn-danger ">DELETE ORDER</label></td>
                    <td>
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success'>Pay</button></Link>}
                        {(order.price && order.paid) && <div>
                            <span className='text-success'>paid</span>
                            <p>TransactionID : <span className='text-success'>{order.transactionId}</span></p>
                            </div>}
                    </td>
                </tr> 
    );
};

export default Order;