import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/register", formData);
      setMessage(response.data.message); // Display success or error message
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '24rem', backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937', textAlign: 'center' }}>Register</h2>
        
        {message && <p style={{ color: '#2563eb', textAlign: 'center' }}>{message}</p>}
        
        <div>
          <label htmlFor="username" style={{ fontWeight: 'bold', color: '#4b5563' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ fontWeight: 'bold', color: '#4b5563' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
          />
        </div>

        <div>
          <label htmlFor="password" style={{ fontWeight: 'bold', color: '#4b5563' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', borderRadius: '0.375rem', marginTop: '1rem', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
