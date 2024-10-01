// src/pages/FinanceDashboard.js
import React, { useState } from 'react';
import FinancialAidManagement from '../components/dashboardComponents/FinancialAidManagement';
import DonationsManagement from '../components/dashboardComponents/DonationsManagement';
import ResourceAllocation from '../components/dashboardComponents/ResourceAllocation';
import FinancialAidDashboard from '../components/dashboardComponents/FinancialAidDashboard';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  sidebarHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  menuItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#e9ecef',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  activeMenuItem: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
};

const FinanceDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const renderSection = () => {
    switch (selectedSection) {
      case 'financialAid':
        return <FinancialAidManagement />;
      case 'donations':
        return <DonationsManagement />;
      case 'resourceAllocation':
        return <ResourceAllocation />;
      case 'overview':
      default:
        return <FinancialAidDashboard />;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>Finance Dashboard</div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'overview' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('overview')}
        >
          Overview
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'financialAid' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('financialAid')}
        >
          Financial Aid
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'donations' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('donations')}
        >
          Donations
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'resourceAllocation' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('resourceAllocation')}
        >
          Resource Allocation
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default FinanceDashboard;
