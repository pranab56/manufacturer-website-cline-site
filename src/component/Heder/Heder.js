import React from 'react';
import CustomLink from '../CustomLink';
import logo from '../../logo.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Page/Loading';


const Heder = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
   
  };
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="navbar flex justify-between ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
        >
          <CustomLink to={"/home"}>Home</CustomLink>
          <CustomLink to={"/shop"}>Shop</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>
         
          <CustomLink to={"/review"}>Review</CustomLink>
          
          <CustomLink to={"/login"}>Login</CustomLink>
        </ul>
      </div>
     <div className='ml-10'>
     <img src={logo} alt="" />
     </div>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal mr-14 ">
        <CustomLink className="mr-5" to={"/home"}>
          Home
        </CustomLink>
        <CustomLink className="mr-5" to={"/shop"}>
          Shop
        </CustomLink>
        <CustomLink className="mr-5" to={"/about"}>
          About
        </CustomLink>
      
        <CustomLink className="mr-5" to={"/review"}>
          Review
        </CustomLink>
      
        {/* {
          user &&  <CustomLink className="mr-5" to={"/dashboard"}>
          DashBoard
        </CustomLink>
        } */}
 <p className='mr-2 font-bold'>{user?.displayName}</p>
      
{user ? <CustomLink onClick={logout} to={'/'}>LogOut</CustomLink> : <CustomLink className="mr-5" to={"/login"}>
            Login
          </CustomLink>}
         
      </ul>
   
    </div>
    
  </div>
  );
};

export default Heder;