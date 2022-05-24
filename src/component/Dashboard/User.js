import React from 'react';

const User = ({user}) => {
    const {email}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
          method:'PUT',
          headers:{
              'authorization':`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
       
            <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove user</button></td>
          </tr>
      
    );
};

export default User;