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
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/productdetails/:id' element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}
        ></Route>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
