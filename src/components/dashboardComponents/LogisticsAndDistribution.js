import React, { useState } from 'react';

const LogisticsAndDistribution = () => {
  // State for logistics and distributions
  const [distributions, setDistributions] = useState([]);
  const [newDistribution, setNewDistribution] = useState({
    supplyType: '',
    quantity: '',
    pickupLocation: '',
    destination: '',
    transportMethod: '',
    transportProvider: '',
    expectedDeliveryDate: '',
    driverDetails: '',
    notes: ''
  });

  // Handle form submissions
  const handleAddDistribution = (e) => {
    e.preventDefault();
    setDistributions([...distributions, { ...newDistribution, id: distributions.length + 1, status: 'Pending' }]);
    setNewDistribution({
      supplyType: '',
      quantity: '',
      pickupLocation: '',
      destination: '',
      transportMethod: '',
      transportProvider: '',
      expectedDeliveryDate: '',
      driverDetails: '',
      notes: ''
    });
  };

  // Summary statistics
  const totalDistributions = distributions.length;
  const pendingDeliveries = distributions.filter(d => d.status === 'Pending').length;
  const ongoingDeliveries = distributions.filter(d => d.status === 'In Transit').length;
  const completedDeliveries = distributions.filter(d => d.status === 'Delivered').length;
  const delayedDeliveries = distributions.filter(d => d.status === 'Delayed').length;

  // Styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const quickActionsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const summaryStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableHeaderStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    textAlign: 'left',
  };

  const tableDataStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div style={containerStyle}>
      <h1>Logistics and Distribution Management</h1>

      {/* Quick Actions */}
      <div style={quickActionsStyle}>
        <button style={buttonStyle} onClick={() => alert('Add New Distribution')}>➕ Add New Distribution</button>
        <button style={buttonStyle} onClick={() => alert('Track Deliveries')}>📍 Track Deliveries</button>
        <button style={buttonStyle} onClick={() => alert('Update Shipment Status')}>📦 Update Shipment Status</button>
        <button style={buttonStyle} onClick={() => alert('Generate Report')}>📊 Generate Reports</button>
      </div>

      {/* Distribution Summary Statistics */}
      <div style={summaryStyle}>
        <div>Total Distributions: {totalDistributions}</div>
        <div>Pending Deliveries: {pendingDeliveries}</div>
        <div>Ongoing Deliveries: {ongoingDeliveries}</div>
        <div>Completed Deliveries: {completedDeliveries}</div>
        <div>Delayed Deliveries: {delayedDeliveries}</div>
      </div>

      {/* Create New Distribution Task */}
      <h3>Create New Distribution Task</h3>
      <form onSubmit={handleAddDistribution} style={formStyle}>
        <input
          type="text"
          placeholder="Supply Type"
          value={newDistribution.supplyType}
          onChange={(e) => setNewDistribution({ ...newDistribution, supplyType: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newDistribution.quantity}
          onChange={(e) => setNewDistribution({ ...newDistribution, quantity: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Pickup Location"
          value={newDistribution.pickupLocation}
          onChange={(e) => setNewDistribution({ ...newDistribution, pickupLocation: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={newDistribution.destination}
          onChange={(e) => setNewDistribution({ ...newDistribution, destination: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Transport Method"
          value={newDistribution.transportMethod}
          onChange={(e) => setNewDistribution({ ...newDistribution, transportMethod: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Transport Provider"
          value={newDistribution.transportProvider}
          onChange={(e) => setNewDistribution({ ...newDistribution, transportProvider: e.target.value })}
          style={inputStyle}
        />
        <input
          type="date"
          placeholder="Expected Delivery Date"
          value={newDistribution.expectedDeliveryDate}
          onChange={(e) => setNewDistribution({ ...newDistribution, expectedDeliveryDate: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Driver Details"
          value={newDistribution.driverDetails}
          onChange={(e) => setNewDistribution({ ...newDistribution, driverDetails: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Notes (Optional)"
          value={newDistribution.notes}
          onChange={(e) => setNewDistribution({ ...newDistribution, notes: e.target.value })}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Create Distribution Task</button>
      </form>

      {/* Live Distribution Tracking Table */}
      <h3>Live Distribution Tracking</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Delivery ID</th>
            <th style={tableHeaderStyle}>Supply Type</th>
            <th style={tableHeaderStyle}>Quantity</th>
            <th style={tableHeaderStyle}>Destination</th>
            <th style={tableHeaderStyle}>Current Status</th>
            <th style={tableHeaderStyle}>ETA</th>
            <th style={tableHeaderStyle}>Assigned Transport</th>
            <th style={tableHeaderStyle}>Driver/Contact</th>
          </tr>
        </thead>
        <tbody>
          {distributions.length === 0 ? (
            <tr>
              <td colSpan="8" style={tableDataStyle}>No distribution tasks available.</td>
            </tr>
          ) : (
            distributions.map((distribution) => (
              <tr key={distribution.id}>
                <td style={tableDataStyle}>{distribution.id}</td>
                <td style={tableDataStyle}>{distribution.supplyType}</td>
                <td style={tableDataStyle}>{distribution.quantity}</td>
                <td style={tableDataStyle}>{distribution.destination}</td>
                <td style={tableDataStyle}>{distribution.status}</td>
                <td style={tableDataStyle}>{distribution.expectedDeliveryDate}</td>
                <td style={tableDataStyle}>{distribution.transportProvider}</td>
                <td style={tableDataStyle}>{distribution.driverDetails}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogisticsAndDistribution;
