import React, { useState } from 'react';

const DonationsManagement = () => {
  // State to store donations
  const [donations, setDonations] = useState([]);
  const [donorName, setDonorName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleAddDonation = (e) => {
    e.preventDefault();
    
    // Add new donation
    const newDonation = {
      donorName,
      amount: parseFloat(amount).toFixed(2),
      message,
    };
    setDonations([...donations, newDonation]);
    
    // Clear form fields
    setDonorName('');
    setAmount('');
    setMessage('');
  };

  // Styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const donationListStyle = {
    marginTop: '20px',
  };

  const donationItemStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2>Donations Management</h2>
      <p>Manage donations and track donations made.</p>

      {/* Add donation form */}
      <form onSubmit={handleAddDonation} style={formStyle}>
        <input
          type="text"
          placeholder="Donor Name"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Donation Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Donation</button>
      </form>

      {/* Display list of donations */}
      <div style={donationListStyle}>
        <h3>Donations Received:</h3>
        {donations.length === 0 ? (
          <p>No donations made yet.</p>
        ) : (
          donations.map((donation, index) => (
            <div key={index} style={donationItemStyle}>
              <p><strong>Donor:</strong> {donation.donorName}</p>
              <p><strong>Amount:</strong> ${donation.amount}</p>
              <p><strong>Message:</strong> {donation.message || 'No message'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DonationsManagement;
