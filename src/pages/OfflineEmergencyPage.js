// src/pages/OfflineEmergencyPage.js
import React from 'react';

const OfflineEmergencyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Emergency Services</h1>
      <p style={styles.subtitle}>It looks like you're offline. Here are some important contacts and information:</p>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Emergency Contacts</h2>
        <ul style={styles.list}>
          <li><strong>Fire Emergency</strong> 123-456-789</li>
          <li><strong>Police Emergency:</strong> 123-456-789</li>
          <li><strong>Medical Emergency:</strong> 123-456-789</li>
          
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Insurance Contacts</h2>
        <ul style={styles.list}>
          <li><strong>Health Insurance:</strong> 1-800-123-4567</li>
          <li><strong>Home Insurance:</strong> 1-800-234-5678</li>
          <li><strong>Auto Insurance:</strong> 1-800-345-6789</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Other Emergency Information</h2>
        <p>Keep the following information handy:</p>
        <ul style={styles.list}>
          <li><strong> Hospital:</strong> 123-456-789</li>
          <li><strong> Police Station:</strong> 123-456-789</li>
          <li><strong>Local Utility Services:</strong> 1-800-567-8901</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  section: {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#444',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
  },
};

export default OfflineEmergencyPage;
