/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './stripe.css';
import { assets } from '../../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !cardNumber || !expiry || !cvv || !cardholderName) {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare data to send to the backend
    const paymentData = {
      email,
      cardNumber,
      expiry,
      cvv,
      cardholderName,
    };

    try {
      const response = await fetch('http://localhost:4000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      const result = await response.json();
      console.log('Payment successful:', result);

      // Navigate to /myorder on success
      navigate('/myorder');
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      <div className="payment-box">
        <p className="payment-box-title">Pay with Card</p>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Email</label>
            </li>
            <li>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </li>
            <li>
              <label>Card Information</label>
            </li>
            <li className="card-pic">
              <input
                type="text"
                maxLength={16}
                pattern="\d{16}" // Regex for 16 digits
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              <p>
                <img src={assets.card} alt="Card" />
              </p>
            </li>
            <li className="bothbox">
              <input
                type="text"
                maxLength="5"
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="CVV"
                maxLength="3"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </li>
            <li>
              <label>Cardholder Name</label>
            </li>
            <li>
              <input
                type="text"
                placeholder="Name"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                required
              />
            </li>
            <button type="submit">Pay</button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Payment;