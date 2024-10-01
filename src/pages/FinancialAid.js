import React, { useState } from 'react';

const FinancialAid = () => {
  const [selectedAid, setSelectedAid] = useState('');
  const [applicationDetails, setApplicationDetails] = useState({ name: '', contact: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);
  const [donors, setDonors] = useState(['Government', 'NGOs', 'Private Organizations']);
  const [aidHistory, setAidHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Feature 1: Apply for aid
  const applyForAid = () => {
    if (applicationDetails.name && applicationDetails.contact && selectedAid) {
      setLoading(true);
      setTimeout(() => {
        setAidHistory([...aidHistory, { ...applicationDetails, aidType: selectedAid }]);
        setApplicationDetails({ name: '', contact: '', reason: '' });
        setSelectedAid('');
        setSubmitted(true);
        setLoading(false);
      }, 1500);
    }
  };

  // Feature 2: Donation tracking
  const totalDonations = donors.length * 1000000;

  // Feature 3: Aid Types and Eligibility
  const aidOptions = ['Education', 'Medical', 'Food & Essentials', 'Shelter', 'Small Business Loans'];

  // Feature 4: Display aid history
  const displayHistory = aidHistory.map((entry, index) => (
    <li key={index} style={styles.historyItem}>
      {entry.name} applied for {entry.aidType} aid. Contact: {entry.contact}, Reason: {entry.reason}
    </li>
  ));

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Financial Aid Assistance</h2>
      <p>Apply for financial aid to receive support during emergencies.</p>

      {/* Application form */}
      <div style={styles.formContainer}>
        <select value={selectedAid} onChange={(e) => setSelectedAid(e.target.value)} style={styles.selectBox}>
          <option value="" disabled>Select Aid Type</option>
          {aidOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Your Name"
          value={applicationDetails.name}
          onChange={(e) => setApplicationDetails({ ...applicationDetails, name: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={applicationDetails.contact}
          onChange={(e) => setApplicationDetails({ ...applicationDetails, contact: e.target.value })}
          style={styles.inputField}
        />
        <textarea
          placeholder="Reason for Applying"
          value={applicationDetails.reason}
          onChange={(e) => setApplicationDetails({ ...applicationDetails, reason: e.target.value })}
          style={styles.textareaField}
        />
        <button onClick={applyForAid} style={styles.submitButton}>
          {loading ? 'Processing...' : 'Apply for Aid'}
        </button>
        {submitted && <p style={styles.successMessage}>Application Submitted Successfully!</p>}
      </div>

      {/* Financial Overview */}
      <div style={styles.donorSection}>
        <h3>Total Donors & Contributions</h3>
        <p>{donors.length} Donors contributed a total of ₹{totalDonations.toLocaleString()}</p>
        <ul style={styles.donorList}>
          {donors.map((donor, index) => (
            <li key={index} style={styles.donorItem}>{donor}</li>
          ))}
        </ul>
      </div>

      {/* Aid History */}
      <div style={styles.historySection}>
        <h3>Aid Application History</h3>
        <ul>{displayHistory}</ul>
      </div>
    </div>
  );
};

// CSS in JS with blue theme
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#007BFF', // Blue header to match the loan page
    marginBottom: '20px',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  selectBox: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #007BFF', // Blue border
    borderRadius: '5px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #007BFF', // Blue border
    borderRadius: '5px',
  },
  textareaField: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #007BFF', // Blue border
    borderRadius: '5px',
    height: '100px',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007BFF', // Blue button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successMessage: {
    color: '#007BFF', // Blue success message
    marginTop: '10px',
  },
  donorSection: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#e8f5fe', // Light blue background
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  donorList: {
    listStyleType: 'none',
    padding: 0,
  },
  donorItem: {
    padding: '8px 0',
    borderBottom: '1px solid #007BFF', // Blue borders
  },
  historySection: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  historyItem: {
    padding: '8px 0',
    borderBottom: '1px solid #007BFF', // Blue borders
  },
};

export default FinancialAid;
