/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
// eslint-disable-next-line no-unused-vars
const Navbar = ({setShowLogin,setSearch}) => {

    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt='' className='logo' /> </Link>
     <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
     </ul>
     <div className='navbar-right'>
        <img onClick={()=>setSearch(true)} src={assets.search_icon} alt="" className='search_icon'/>
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt='' className='basket_icon'/></Link>
            <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
        </div>
        <Link to="/api/login">Sign in</Link>
     </div>
    </div>
  )
}

export default Navbar;


