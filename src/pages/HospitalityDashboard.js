// src/pages/HospitalityDashboard.js
import React, { useState } from 'react';
import HospitalityAccommodation from '../components/dashboardComponents/HospitalityAccommodation';
import HospitalityStaffing from '../components/dashboardComponents/HospitalityStaffing';
import HospitalityMedicalSupplies from '../components/dashboardComponents/HospitalityMedicalSupplies';
import ResourceOverview from '../components/ResourceOverview';

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

const HospitalityDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const renderSection = () => {
    switch (selectedSection) {
      case 'accommodation':
        return <HospitalityAccommodation />;
      case 'staffing':
        return <HospitalityStaffing />;
      case 'medicalSupplies':
        return <HospitalityMedicalSupplies />;
      case 'overview':
      default:
        return <ResourceOverview />;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>Hospitality Dashboard</div>
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
            ...(selectedSection === 'accommodation' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('accommodation')}
        >
          Accommodation
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'staffing' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('staffing')}
        >
          Staffing
        </div>
        <div
          style={{
            ...styles.menuItem,
            ...(selectedSection === 'medicalSupplies' ? styles.activeMenuItem : {}),
          }}
          onClick={() => setSelectedSection('medicalSupplies')}
        >
          Medical Supplies
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default HospitalityDashboard;
