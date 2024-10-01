// Loginopt.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandsHelping, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Loginopt = () => {
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    padding: '20px',
    background: 'linear-gradient(to right, #FFF8F0, #FFFBF5)', // Lighter background gradient
    flexWrap: 'nowrap', // Prevent wrapping
  };

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    textAlign: 'center',
    width: '300px', // Maximum width for each card
    transition: 'box-shadow 0.3s, transform 0.3s',
    position: 'relative',
  };

  const cardHoverStyle = {
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.05)',
  };

  const iconStyle = {
    fontSize: '50px', // Larger icons
    color: '#0055A4',
    marginBottom: '15px',
    transition: 'color 0.3s', // Smooth color transition
  };

  const iconHoverStyle = {
    color: '#003366', // Dark Blue on hover
  };

  const buttonStyle = {
    backgroundColor: '#0055A4',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '15px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    width: '100%',
    maxWidth: '260px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#003366',
    transform: 'scale(1.05)',
  };

  return (
    <div style={cardContainerStyle}>
      <div 
        style={cardStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
          e.currentTarget.querySelector('.icon').style.color = iconHoverStyle.color;
        }} 
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
          e.currentTarget.querySelector('.icon').style.color = '#0055A4';
        }}
      >
        <FontAwesomeIcon icon={faUser} style={iconStyle} className="icon"/>
        <h2>Log in as User</h2>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0055A4'}
          >
            Sign In
          </button>
        </Link>
      </div>
      <div 
        style={cardStyle} 
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
          e.currentTarget.querySelector('.icon').style.color = iconHoverStyle.color;
        }} 
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
          e.currentTarget.querySelector('.icon').style.color = '#0055A4';
        }}
      >
        <FontAwesomeIcon icon={faHandsHelping} style={iconStyle} className="icon"/>
        <h2>Log in as Volunteer</h2>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0055A4'}
          >
            Sign In
          </button>
        </Link>
      </div>
      <div 
        style={cardStyle} 
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
          e.currentTarget.querySelector('.icon').style.color = iconHoverStyle.color;
        }} 
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
          e.currentTarget.querySelector('.icon').style.color = '#0055A4';
        }}
      >
        <FontAwesomeIcon icon={faBuilding} style={iconStyle} className="icon"/>
        <h2>Log in as Organization</h2>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0055A4'}
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Loginopt;