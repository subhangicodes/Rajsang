/* eslint-disable no-unused-vars */
// App.jsx
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/footer';
import LoginPopUp from './components/loginPopUp/loginPopUp';
import Search from './components/Search/search'; // Ensure the path is correct
import ProductDetail from './components/ProductDetail/productDetail'; // Ensure the path is correct
import MyOrder from './pages/myorder/myorder'; // Import for COD page
import StripePayment from './pages/Payment/stripe'; // Import for Stripe payment page

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const openSearch = () => {
    navigate('/search'); // Navigate to the /search route
  };

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} setSearch={openSearch} />
        <Routes>
          <Route path="/" element={<Home setCategory={setCategory} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/api/login" element={<LoginPopUp setShowLogin={setShowLogin} />} />
          <Route path="/api/register" element={<LoginPopUp setShowLogin={setShowLogin} />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/payment/stripe" element={<StripePayment />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search setCategory={setCategory} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;