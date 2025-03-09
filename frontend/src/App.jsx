// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/footer';
import LoginPopUp from './components/loginPopUp/loginPopUp';
import Payment from './pages/Payment/stripe';
import Search from './components/Search/search'


const App = () => {

  const [showLogin,setShowLogin]=useState(false);
  const [showSearch,setSearch]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
    {showSearch?<Search setSearch={setSearch}/>:<></> }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/payment/' element={<Payment/>}>
            <Route path="cash" element={<cash/>}/>
            <Route path="stripe" element={<stripe/>}/>
        </Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

