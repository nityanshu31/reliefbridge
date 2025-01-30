import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy user data for roles (replace this with actual backend/API calls)
  const dummyUserData = {
    'user123': { password: 'user12345', role: 'user' },
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
    flexDirection: 'column',
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

  const noteStyle = {
    backgroundColor: '#ffeb3b',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    textAlign: 'center',
    fontSize: '14px',
    maxWidth: '350px',
  };

  return (
    <div style={containerStyle}>
      <div style={noteStyle}>
        <strong>Note:</strong> Backend is currently not available. Use the following test credentials:<br />
        <strong>User:</strong> user123 / user12345<br />
        <strong>Volunteer:</strong> volunteer123 / volunteer123<br />
        <strong>Hospitality:</strong> hospitality123 / hospitality123<br />
        <strong>Retail:</strong> retail123 / retail123<br />
        <strong>Finance:</strong> finance123 / finance123<br />
        <strong>Admin:</strong> admin123 / admin123
      </div>

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
