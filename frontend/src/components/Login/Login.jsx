import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

export default function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the login request to the backend
      const response = await axios.post('/api/auth/login', { email, password });
      
      const { token, user } = response.data;
      
      // Store the token and user information in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Notify the parent component that login was successful
      onLoginSuccess(user);

      // Close the login modal
      onClose();
    } catch (err) {
      console.error('Login failed:', err.response);
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-form">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
