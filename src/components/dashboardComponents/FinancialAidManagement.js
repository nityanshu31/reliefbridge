import React, { useState, useEffect } from 'react';

const FinancialAidManagement = () => {
  const [aidRequests, setAidRequests] = useState([]);
  const [donors, setDonors] = useState([{ name: 'NGO Support', amount: 50000 }]);
  const [newDonor, setNewDonor] = useState({ name: '', amount: 0 });
  const [selectedAidRequest, setSelectedAidRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // Fetch aid requests from an API or a state management system
    setAidRequests([
      { id: 1, name: 'John Doe', type: 'Medical', amount: 15000, status: 'Pending' },
      { id: 2, name: 'Jane Smith', type: 'Education', amount: 20000, status: 'Approved' },
    ]);
  }, []);

  // Feature 1: Update the status of an aid request
  const updateStatus = (id, status) => {
    setAidRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  // Feature 2: Filter requests by status
  const filteredAidRequests = aidRequests.filter((request) =>
    statusFilter === 'all' ? true : request.status === statusFilter
  );

  // Feature 3: Add a new donor
  const addDonor = () => {
    setDonors([...donors, newDonor]);
    setNewDonor({ name: '', amount: 0 });
  };

  // Feature 4: View aid request details
  const viewRequestDetails = (id) => {
    const selectedRequest = aidRequests.find((request) => request.id === id);
    setSelectedAidRequest(selectedRequest);
  };

  // Feature 5: Calculate total donations
  const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Financial Aid Management</h2>
      <p>Manage emergency financial aid resources effectively.</p>

      {/* Aid Requests Table */}
      <div style={styles.tableContainer}>
        <h3>Financial Aid Requests</h3>
        <div style={styles.filterContainer}>
          <label>Status Filter:</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={styles.selectBox}>
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAidRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.type}</td>
                <td>₹{request.amount}</td>
                <td>{request.status}</td>
                <td>
                  <button onClick={() => updateStatus(request.id, 'Approved')} style={styles.actionButton}>Approve</button>
                  <button onClick={() => updateStatus(request.id, 'Rejected')} style={styles.actionButton}>Reject</button>
                  <button onClick={() => viewRequestDetails(request.id)} style={styles.detailsButton}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Aid Request Details */}
      {selectedAidRequest && (
        <div style={styles.detailsContainer}>
          <h3>Aid Request Details</h3>
          <p>Name: {selectedAidRequest.name}</p>
          <p>Type: {selectedAidRequest.type}</p>
          <p>Amount Requested: ₹{selectedAidRequest.amount}</p>
          <p>Status: {selectedAidRequest.status}</p>
        </div>
      )}

      {/* Donor Management */}
      <div style={styles.donorContainer}>
        <h3>Total Donations: ₹{totalDonations.toLocaleString()}</h3>
        <ul>
          {donors.map((donor, index) => (
            <li key={index}>{donor.name} - ₹{donor.amount.toLocaleString()}</li>
          ))}
        </ul>
        <h3>Add New Donor</h3>
        <input
          type="text"
          placeholder="Donor Name"
          value={newDonor.name}
          onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="number"
          placeholder="Donation Amount"
          value={newDonor.amount}
          onChange={(e) => setNewDonor({ ...newDonor, amount: Number(e.target.value) })}
          style={styles.inputField}
        />
        <button onClick={addDonor} style={styles.addButton}>Add Donor</button>
      </div>
    </div>
  );
};

// CSS in JS styles
const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f7',
  },
  header: {
    color: '#007BFF',
    marginBottom: '20px',
  },
  tableContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    borderBottom: '1px solid #ccc',
  },
  tableHeader: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'center',
  },
  actionButton: {
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  detailsButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  donorContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  filterContainer: {
    marginBottom: '20px',
  },
  selectBox: {
    padding: '10px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    width: '100%',
  },
  inputField: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #007BFF',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FinancialAidManagement;
