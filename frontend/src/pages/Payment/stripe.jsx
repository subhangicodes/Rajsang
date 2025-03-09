// eslint-disable-next-line no-unused-vars
import React,{useContext } from 'react';
import './stripe.css';
import { assets } from '../../assets/assets.js'


const Payment = () => {
  return (
    <div>
     <div className='payment-box'>
      <p className='payment-box-title'>Pay with Card</p>
      <ul>
      <li><label>Email</label></li>
      <li><input type='email'/></li>
      
      
      <li><label>Card information</label></li>
      <li className='card-pic'>
      <input type='text' maxLength={19}  pattern="\d{16}" placeholder='XXXX-XXXX-XXXX-XXXX
      ' required/><p><img src={assets.card}/></p></li>
      <li className='bothbox'><input type='text' maxLength="5" pattern="(0[1-9]|1[0-2])\/\d{2}" placeholder='MM/YY' required/><input type='text' placeholder="CVV" maxLength="3" required/>
      </li>
      <li><label>Cardholder Name</label></li>
      <li><input type='text'placeholder='Name' required/></li>
    
  <button>Pay</button>
  </ul>
  
     </div>
    </div>
  )
}

export default Payment;