import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';

export default function AuthForm({ isLogin, onLoginSuccess }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '' // Initialize name for signup, won't be used in login
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        console.log("Submitting form:", formData); // Debugging: Log form data
        
        try {
            const endpoint = isLogin ? '/api/login' : '/api/signup';
            const response = await axios.post(endpoint, formData);
            console.log("Response from server:", response.data); // Debugging: Log server response

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log("Token stored in localStorage:", response.data.token); // Debugging: Log token storage
                onLoginSuccess();
            } else {
                setError('Authentication failed');
            }
        } catch (err) {
            console.error("Error during auth:", err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('An error occurred during authentication');
            }
        }
    };

    return (
        <div className="auth-form">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                {!isLogin && (
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
        </div>
    );
}
