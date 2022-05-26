import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import About from './component/About/About';
import Dashboard from './component/Dashboard/Dashboard';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import RequireAuth from './component/Login/RequireAuth';
import NotFound from './component/Page/NotFound';
import ProductDetail from './component/Products/ProductDetail';

import Review from './component/Review/Review';
import Shop from './component/Shop/Shop';
import Test from './test';
import { ToastContainer } from 'react-toastify';
import MyOrder from './component/Dashboard/MyOrder';
import MyReview from './component/Dashboard/MyReview';
import AllUser from './component/Dashboard/AllUser';
import RequireAdmin from './component/Login/RequireAdmin';
import UpdateModal from './component/Dashboard/UpdateProfile/UpdateModal';
import Profile from './component/Dashboard/Profile';
import AddProduct from './component/Dashboard/AddProduct/AddProduct';
import AddReview from './component/Dashboard/AddReview';
import Payment from './component/Dashboard/Payment';
import AllProduct from './component/Dashboard/AllOrder';
import AllOrder from './component/Dashboard/AllOrder';


function App() {
  return (
    <div>
      <Heder></Heder>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='profile/updateProfile' element={<UpdateModal></UpdateModal>}></Route>
        <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
        <Route path='allOrders' element={<AllOrder></AllOrder>}></Route>
       <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
       <Route path='myreview' element={<MyReview></MyReview>}></Route>
      
       <Route path='alluser' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
        </Route>
        <Route path='/productdetails/:id' element={<RequireAuth>
          <ProductDetail></ProductDetail>
         
        </RequireAuth>}
        ></Route>
       
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
