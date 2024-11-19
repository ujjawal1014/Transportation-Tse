import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export default function Signup({ onClose, onSignupSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', { name, email, password });
      console.log('Signup successful:', response.data);

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      // If signup is successful, notify the parent component
      onSignupSuccess(response.data.user);

      onClose();  // Close the signup modal
    } catch (err) {
      console.error('Signup failed:', err.response);
      setError(err.response?.data?.error || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-form">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
