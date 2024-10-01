import React, { useState } from 'react';

const mockStaffData = [
  { id: 1, name: 'John Doe', role: 'Nurse', available: true, contact: '555-1234' },
  { id: 2, name: 'Jane Smith', role: 'Doctor', available: false, contact: '555-5678' },
  { id: 3, name: 'Jim Brown', role: 'Logistics', available: true, contact: '555-8765' },
  // Add more mock data as needed
];

const HospitalityStaffing = () => {
  const [staffData, setStaffData] = useState(mockStaffData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newStaff, setNewStaff] = useState({ name: '', role: '', available: true, contact: '' });
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAvailability = availabilityFilter === 'all' || 
      (availabilityFilter === 'available' && staff.available) || 
      (availabilityFilter === 'unavailable' && !staff.available);
    return matchesSearch && matchesAvailability;
  });

  const addNewStaff = () => {
    if (newStaff.name && newStaff.role && newStaff.contact) {
      setStaffData([...staffData, { ...newStaff, id: staffData.length + 1 }]);
      setNewStaff({ name: '', role: '', available: true, contact: '' });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Staffing Management</h2>
      <p style={styles.description}>Manage staffing resources for emergencies.</p>

      {/* Staffing Metrics */}
      <div style={styles.metrics}>
        <div style={styles.metricItem}>
          <h3 style={styles.metricTitle}>Total Staff</h3>
          <p style={styles.metricValue}>{staffData.length}</p>
        </div>
        <div style={styles.metricItem}>
          <h3 style={styles.metricTitle}>Available Staff</h3>
          <p style={styles.metricValue}>{staffData.filter(s => s.available).length}</p>
        </div>
      </div>

      {/* Staff Search */}
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search staff..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          style={styles.searchInput}
        />
        <select 
          value={availabilityFilter} 
          onChange={e => setAvailabilityFilter(e.target.value)} 
          style={styles.filterSelect}
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      {/* Staff List */}
      <div style={styles.staffListContainer}>
        <h3>Staff List</h3>
        <ul style={styles.staffList}>
          {filteredStaff.map(staff => (
            <li key={staff.id} style={styles.staffItem}>
              <span>{staff.name} - {staff.role} </span>
              <span>{staff.available ? 'Available' : 'Unavailable'} </span>
              <span>Contact: {staff.contact}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Staff */}
      <div style={styles.addStaffContainer}>
        <h3>Add New Staff</h3>
        <input 
          type="text" 
          placeholder="Name" 
          value={newStaff.name} 
          onChange={e => setNewStaff({ ...newStaff, name: e.target.value })} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="Role" 
          value={newStaff.role} 
          onChange={e => setNewStaff({ ...newStaff, role: e.target.value })} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="Contact" 
          value={newStaff.contact} 
          onChange={e => setNewStaff({ ...newStaff, contact: e.target.value })} 
          style={styles.input}
        />
        <select 
          value={newStaff.available} 
          onChange={e => setNewStaff({ ...newStaff, available: e.target.value === 'true' })} 
          style={styles.select}
        >
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
        <button style={styles.addButton} onClick={addNewStaff}>Add Staff</button>
      </div>
    </div>
  );
};

// CSS in JS
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#666',
  },
  metrics: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  metricItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    width: '30%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  metricTitle: {
    fontSize: '18px',
    color: '#333',
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  searchContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '60%',
  },
  filterSelect: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  staffListContainer: {
    marginBottom: '20px',
  },
  staffList: {
    listStyleType: 'none',
    padding: 0,
  },
  staffItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  addStaffContainer: {
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: 'calc(33.33% - 10px)',
    marginRight: '10px',
  },
  select: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: 'calc(33.33% - 10px)',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default HospitalityStaffing;
