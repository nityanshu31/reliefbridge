// src/pages/RetailDashboard.js
import React, { useState } from 'react';
import SuppliesAndGoodsManagement from '../components/dashboardComponents/SuppliesAndGoodsManagement';
import RetailSpacesManagement from '../components/dashboardComponents/RetailSpacesManagement';
import LogisticsAndDistribution from '../components/dashboardComponents/LogisticsAndDistribution';
import RetailDashboardOverview from '../components/dashboardComponents/RetailDashboardOverview';

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

const RetailDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const renderSection = () => {
    switch (selectedSection) {
      case 'supplies':
        return <SuppliesAndGoodsManagement />;
      case 'retailSpaces':
        return <RetailSpacesManagement />;
      case 'logistics':
        return <LogisticsAndDistribution />;
      case 'overview':
      default:
        return <RetailDashboardOverview />;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>Retail Dashboard</div>
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
            ...(selectedSection === 'supplies' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('supplies')}
        >
          Supplies & Goods
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'retailSpaces' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('retailSpaces')}
        >
          Retail Spaces
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'logistics' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('logistics')}
        >
          Logistics & Distribution
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default RetailDashboard;
