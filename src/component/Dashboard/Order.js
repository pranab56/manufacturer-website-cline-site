import React from 'react';



const Order = ({order,index ,setDeleteOrder}) => {
    const {ProductName,quantity,email}=order;
   

    return (
        <tr>
                <th>{index+1}</th>
                <td>{ProductName}</td>
                <td>{quantity}</td>
              
                <td><label onClick={()=>setDeleteOrder(order)} for="delete-modal" class="btn btn ">DELETE ORDER</label></td>
                    <td><button className='btn btn'>PAYMENT</button></td>
                </tr> 
    );
};

export default Order;