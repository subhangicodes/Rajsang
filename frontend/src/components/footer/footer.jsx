// eslint-disable-next-line no-unused-vars
import React from 'react'
import './footer.css';
import { assets } from '../../assets/assets'

const footer=()=> {
    return (
        
        <div className="footer" id="footer">
         <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo}alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem ad qui veniam, mollitia deserunt delectus. Inventore, expedita! Porro.</p>
                <div className="footer-social-icon">
                  <img className='facebook' src={assets.facebook_icon} alt=''/>
                  <img className='insta' src={assets.instagram_icon} alt=''/>
                  <img className='twitter' src={assets.twitter_icon} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
                </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1 750-248-6001</li>
                <li>Raj@sanggamil.com</li>
               </ul>
            </div>
          </div>
        
         <hr />
         <p className="footer-copyright">Copyright 2024 Ⓒ Rajsang.com - All Right Reserved.  </p>
        </div>
        
    )
}

export default footer;