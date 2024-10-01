import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy user data for roles (replace this with actual backend/API calls)
  const dummyUserData = {
    'user123': { password: 'user123', role: 'user' },
    'volunteer123': { password: 'volunteer123', role: 'volunteer' },
    'hospitality123': { password: 'hospitality123', role: 'hospitality' },
    'retail123': { password: 'retail123', role: 'retail' },
    'finance123': { password: 'finance123', role: 'finance' },
    'admin123': { password: 'admin123', role: 'admin' },
  };

  // Dummy authentication function
  const authenticateUser = (phone, password) => {
    const user = dummyUserData[phone];

    if (user && user.password === password) {
      return user.role;
    }
    return null; // If authentication fails
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Authenticate the user and get the role
    const role = authenticateUser(phone, password);
    if (!role) {
      setError('Invalid phone number or password.');
      return;
    }

    // Redirect based on the role
    switch (role.toLowerCase()) {
      case 'user':
        navigate('/userhome');
        break;
      case 'volunteer':
        navigate('/volunteer-dashboard');
        break;
      case 'hospitality':
        navigate('/dashboard/hospitality');
        break;
      case 'retail':
        navigate('/dashboard/retail');
        break;
      case 'finance':
        navigate('/dashboard/finance');
        break;
      case 'admin':
        navigate('/admin-dashboard');
        break;
      default:
        setError('Invalid role.');
    }
  };

  // Inline CSS styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Sign In</h2>

        {error && <p style={errorStyle}>{error}</p>}

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
