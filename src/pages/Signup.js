import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const CollectData = async () => {
    console.warn(name, email, password);
    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, confirmPassword }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error('Network response was not ok');
      }

      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      console.log(result);
      if (result) {
        navigate('/');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    CollectData();
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#f4f4f4', color: '#333', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%', padding: '20px' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center', color: '#333', fontWeight: 'bold' }}>Relief Bridge</h1>
          
          <h2 style={{ fontSize: '22px', marginBottom: '20px', textAlign: 'center', color: '#007bff' }}>Signup</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ marginBottom: '15px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
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
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ marginBottom: '15px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
            {error && <p style={{ color: '#ff4d4d', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
            <button type="submit" style={{ padding: '12px', border: 'none', borderRadius: '8px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              Signup
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Already have an account? <a href="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold', borderBottom: '1px solid #007bff' }}>Login</a>
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

export default Signup;
