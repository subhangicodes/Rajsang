/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems } = useContext(StoreContext);
  const [payment, setPayment] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!payment) {
      alert('Please select a payment method!');
      return;
    }

    console.log('Cart Items:', cartItems);

    // Transform cartItems into an array of objects
  const transformedItems = Object.entries(cartItems).map(([productId, quantity,price]) => ({
    productId,
    quantity,
    price,
  }));

  const orderData = {
    ...formData,
    items: transformedItems, // Use the transformed items
    paymentMethod: payment,
    totalAmount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2),
  };

    console.log('Order Data:', orderData); // Debugging: Log the order data

    try {
      const response = await fetch('http://localhost:4000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const result = await response.json();
      console.log('Order placed successfully:', result);

      if (payment === 'cod') {
        navigate('/myorder');
      } else if (payment === 'stripe') {
        navigate('/payment/stripe');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div>
      <form className="place-order" onSubmit={handleSubmit}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
            required
          />
          <div className="multi-fields">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="multi-fields">
            <input
              type="text"
              name="pinCode"
              placeholder="Pin code"
              value={formData.pinCode}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <div className="cart-total">
              <h2>Payment Method</h2>
            </div>
            <div className="payment-button">
              <div className="payment-button-type">
                <input
                  name="payment"
                  value="cod"
                  type="radio"
                  onChange={(e) => setPayment(e.target.value)}
                  required
                />
                COD (Cash On Delivery)
              </div>
              <div className="payment-button-type">
                <input
                  name="payment"
                  value="stripe"
                  type="radio"
                  onChange={(e) => setPayment(e.target.value)}
                  required
                />
                Stripe (Credit/Debit)
              </div>
            </div>
            <button type="submit">Place Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
