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

  
  <li><Link to={'/dashboard/profile'}>Profile</Link></li>
  <li><Link to={'/dashboard/myorder'}>My Orders</Link></li>
  <li><Link to={'/dashboard/myreview'}>My Review</Link></li>
  <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
  {admin && <li><Link to={'/dashboard/alluser'}>All User</Link></li>}
</ul>

</div>
</div>
    
        </nav>
   

    );
};

export default Dashboard;