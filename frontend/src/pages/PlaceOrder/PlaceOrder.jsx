//eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  const [payment,setPayment]=useState(null);
 const navigate=useNavigate();

 const handlePayment = ()=>{
  if(payment === "cod"){
    navigate('/payment/cod')
  }
  else if (payment === "stripe"){
    navigate('/payment/stripe')
  }
  else{
    alert("please select the payment method!!")
  }
 }
  
  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
              <input type='text' placeholder='First Name'/>
              <input type='text' placeholder='Last Name'/>
        </div>
              <input type='email' placeholder='Email Address'/>
              <input type='text' placeholder='Street'/>
        <div className="multi-fields">
              <input type='text' placeholder='City'/>
              <input type='text' placeholder='State'/>
        </div>
        <div className="multi-fields">
              <input type='text' placeholder='Zip code'/>
              <input type='text' placeholder='Country'/>
        </div>
              <input type='text' placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div>
          <div className="cart-total-details">
               <p>Subtotal</p>
               <p>{getTotalCartAmount()}</p>
           </div>
           <hr/>
           <div className="cart-total-details">
              <p>Delivery Free</p>
               <p>{getTotalCartAmount()===0?0:2}</p>
           </div>
           <hr/>
           <div className="cart-total-details">
               <p>Total</p>
               <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
           </div>
          </div>
          <div className="cart-total">
          <h2>Payment Method</h2>
          </div>
          <div className='payment-button'>
     
          <div className='payment-button-type'> 
          <input name="payment" value="cod" type='radio'onChange={(e)=>setPayment(e.target.value)}/>COD (Cash On Delivery)
          </div>
          <div className='payment-button-type'>
          <input name="payment" value="stripe" type='radio' onChange={(e)=>setPayment(e.target.value)} />Stripe (Credit/Debit)
          </div>
      
          </div>
          
          <button onClick={handlePayment} >Place Order</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder;
