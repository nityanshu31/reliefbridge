import React, { useState } from 'react';

const LoanPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState(null);
  const [loanType, setLoanType] = useState('All');

  // Calculate EMI
  const calculateEMI = () => {
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTerm) * 12;
    const p = parseFloat(loanAmount);
    const monthlyEmi =
      p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(monthlyEmi.toFixed(2));
  };

  const loanTypes = ['All', 'Education', 'Personal', 'Home', 'Vehicle'];

  // Sample loan data
  const loans = [
    {
      type: 'Home Loan',
      interest: 5.5,
      term: 15,
      emi: 15000,
      icon: '🏠',
    },
    {
      type: 'Education Loan',
      interest: 3.5,
      term: 10,
      emi: 8000,
      icon: '🎓',
    },
    {
      type: 'Personal Loan',
      interest: 6.0,
      term: 5,
      emi: 10000,
      icon: '💳',
    },
    {
      type: 'Vehicle Loan',
      interest: 4.5,
      term: 7,
      emi: 12000,
      icon: '🚗',
    },
    // Add more loan options as needed
  ];

  // Filter loans based on selected type
  const filteredLoans =
    loanType === 'All'
      ? loans
      : loans.filter((loan) => loan.type.includes(loanType));

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.header}>Loan Options</h2>

      {/* Loan Calculator Section */}
      <div style={styles.calculatorContainer}>
        <h3>Loan Calculator</h3>
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateEMI} style={styles.button}>
          Calculate EMI
        </button>
        {emi && <p style={styles.emi}>Monthly EMI: ₹{emi}</p>}
      </div>

      {/* Loan Types Filter */}
      <div style={styles.loanTypeContainer}>
        <h3>Filter by Loan Type</h3>
        <select
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          style={styles.select}
        >
          {loanTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Loan Comparison Table */}
      <div style={styles.comparisonTable}>
        <h3>Compare Loan Options</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Loan Type</th>
              <th style={styles.th}>Interest Rate (%)</th>
              <th style={styles.th}>Term (Years)</th>
              <th style={styles.th}>Monthly EMI (₹)</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>
                  <span style={styles.icon}>{loan.icon}</span> {loan.type}
                </td>
                <td style={styles.td}>{loan.interest}%</td>
                <td style={styles.td}>{loan.term}</td>
                <td style={styles.td}>₹{loan.emi.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h3>Need Help?</h3>
        <p>Contact our loan specialists for more information.</p>
        <button style={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '30px',
  },
  calculatorContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#2980b9',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#1c5980',
  },
  emi: {
    fontSize: '18px',
    color: '#27ae60',
    marginTop: '15px',
    textAlign: 'center',
  },
  loanTypeContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  select: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    width: '200px',
  },
  comparisonTable: {
    width: '90%',
    margin: 'auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflowX: 'auto',
    marginBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '16px',
  },
  th: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 15px',
    textAlign: 'left',
    position: 'sticky',
    top: 0,
  },
  tr: {
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  trHover: {
    backgroundColor: '#f1f1f1',
  },
  td: {
    padding: '12px 15px',
    color: '#34495e',
  },
  icon: {
    marginRight: '8px',
    fontSize: '18px',
  },
  contactSection: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  contactButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default LoanPage;
