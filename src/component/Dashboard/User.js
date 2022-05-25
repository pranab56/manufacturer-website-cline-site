import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,refetch,index}) => {
    const {email,role}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
          method:'PUT',
          headers:{
              'authorization':`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>{
            if(res.status===403){
                toast.error('faild to make to admin')
            }
            return res.json()})
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('Congratulations you are now ADMIN');
                refetch()
            }
        })
    }
    return (
        
            <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== 'admin'? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
            : <button className='btn btn-xs btn-primary'>Already Admin</button> 
            }
            
            </td>
            <td><button class="btn btn-xs">Remove user</button></td>
          </tr>
      
    );
};

export default User;