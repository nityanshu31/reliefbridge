import React from 'react';

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  },
};

const FinancialAidDashboard = () => {
  const transactionHistory = [
    { id: 1, amount: '$5000', date: '2024-09-05', verified: true },
    { id: 2, amount: '$2000', date: '2024-09-03', verified: false },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Financial Aid Dashboard</h2>
      <h3>Transaction History</h3>
      <ul style={styles.list}>
        {transactionHistory.map((transaction) => (
          <li key={transaction.id} style={styles.listItem}>
            <span>Amount: {transaction.amount}</span> - <span>Date: {transaction.date}</span> - 
            <span>Verified: {transaction.verified ? 'Yes' : 'No'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialAidDashboard;
