import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.result || 'Login failed');
      }

      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
      
      if (user.isAdmin) {
        window.location.href = 'http://localhost:3001'; // Redirect to the admin dashboard app
      } else {
        navigate('/'); // Redirect to home page for regular users
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#f4f4f4', color: '#333', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%', padding: '20px' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center', color: '#333', fontWeight: 'bold' }}>Relief Bridge</h1>
          
          <h2 style={{ fontSize: '22px', marginBottom: '20px', textAlign: 'center', color: '#007bff' }}>Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginBottom: '15px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginBottom: '15px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            {error && <p style={{ color: '#ff4d4d', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
            <button type="submit" style={{ padding: '12px', border: 'none', borderRadius: '8px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              Login
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Forgot your password? <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold', borderBottom: '1px solid #007bff' }}>Reset it</a>
          </p>
          <button 
            onClick={() => navigate('/')} 
            style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', cursor: 'pointer', fontSize: '16px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s ease' }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
