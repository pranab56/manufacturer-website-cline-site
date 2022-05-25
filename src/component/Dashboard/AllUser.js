import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Page/Loading';
import User from './User';



const AllUser = () => {
    const { isLoading, error, data:users,refetch } = useQuery('repoData', () =>
    fetch('http://localhost:5000/users',{
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
            
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>SL</th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        
     {
        users.map((user,index)=><User
        key={user._id}
        refetch={refetch}
        user={user}
        index={index}
        ></User>)
     }
   
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;