import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    
    const [admin]=useAdmin(user);
    
    return (
      
        <nav>

        
        <div class="drawer drawer-mobile">
<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
<div class="drawer-content">
    <h2 className='text-4xl text-purple-500 text-center font-bold mt-6'>DASHBOARD</h2>
<Outlet></Outlet>

</div> 

<div class="drawer-side">
<label for="my-drawer-2" class="drawer-overlay"></label> 
<ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
<div class="flex flex-col items-center mb-10 mt-6 -mx-2">
            <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar"/>
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{user?.email}</p>
            
    <button className='btn btn-primary mt-4 '><Link to={'/updateModal'}>Update Your Profile</Link></button>
        </div>
  
  <li><Link to={'/dashboard/myorder'}>My Orders</Link></li>
  <li><Link to={'/dashboard/myreview'}>My Review</Link></li>
  {admin && <li><Link to={'/dashboard/alluser'}>All User</Link></li>}
</ul>

</div>
</div>
    
        </nav>
   

    );
};

export default Dashboard;