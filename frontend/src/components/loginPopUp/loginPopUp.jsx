/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './loginPopUp.css';
import { assets } from '../../assets/assets';

// eslint-disable-next-line react/prop-types
const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Update the state based on the URL
  useEffect(() => {
    if (location.pathname === '/api/register') {
      setCurrState("Sign Up");
    } else if (location.pathname === '/api/login') {
      setCurrState("Login");
    }
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currState === 'Login' ? 'http://localhost:4000/api/login' : 'http://localhost:4000/api/register';
    const data = currState === 'Login' ? { email: email.trim(), password: password.trim() } : { name, email: email.trim(), password: password.trim() };

    console.log('Login Request Data:', data);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Login Successful:', result);

      setSuccessMessage(currState === 'Login' ? 'Login successful!' : 'Registration successful!');
      setError('');

      // Redirect to home after successful login or registration
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    navigate('/'); // Navigate back to the previous page
  };

  const switchToSignUp = () => {
    setCurrState("Sign Up");
    navigate('/api/register'); // Update the URL to /api/register
  };

  const switchToLogin = () => {
    setCurrState("Login");
    navigate('/api/login'); // Update the URL to /api/login
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={handleClose} src={assets.cross_icon} alt='Close' />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type='password'
            placeholder='Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type='submit'>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={switchToSignUp}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={switchToLogin}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;