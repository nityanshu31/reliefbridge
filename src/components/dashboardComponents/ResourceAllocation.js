import React, { useState } from 'react';

const ResourceAllocation = () => {
  const [resources, setResources] = useState([
    { id: 1, name: 'Marketing Budget', budget: 5000, expenditure: 1200, savings: 3800, status: 'On Track' },
    { id: 2, name: 'Operational Costs', budget: 10000, expenditure: 10500, savings: -500, status: 'Over Budget' },
  ]);
  const [newResource, setNewResource] = useState({ name: '', budget: 0, expenditure: 0, savings: 0 });
  const [filterStatus, setFilterStatus] = useState('all');

  const addResource = () => {
    setResources([...resources, { ...newResource, id: resources.length + 1, status: newResource.savings >= 0 ? 'On Track' : 'Over Budget' }]);
    setNewResource({ name: '', budget: 0, expenditure: 0, savings: 0 });
  };

  const updateStatus = (id, status) => {
    setResources(resources.map(resource => resource.id === id ? { ...resource, status } : resource));
  };

  const filteredResources = resources.filter(resource =>
    filterStatus === 'all' ? true : resource.status === filterStatus
  );

  const calculateSavings = (budget, expenditure) => budget - expenditure;

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h2 style={styles.header}>Financial Resource Management</h2>
        <p style={styles.subheader}>Manage and track your financial resources effectively</p>
      </div>

      <div style={styles.formContainer}>
        <h3 style={styles.formHeader}>Add New Financial Resource</h3>
        <input
          type="text"
          placeholder="Resource Name"
          value={newResource.name}
          onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="number"
          placeholder="Budget"
          value={newResource.budget}
          onChange={(e) => setNewResource({ ...newResource, budget: Number(e.target.value) })}
          style={styles.inputField}
        />
        <input
          type="number"
          placeholder="Expenditure"
          value={newResource.expenditure}
          onChange={(e) => setNewResource({ ...newResource, expenditure: Number(e.target.value) })}
          style={styles.inputField}
        />
        <button onClick={addResource} style={styles.addButton}>Add Resource</button>
      </div>

      <div style={styles.filterContainer}>
        <label style={styles.filterLabel}>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={styles.selectBox}>
          <option value="all">All</option>
          <option value="On Track">On Track</option>
          <option value="Over Budget">Over Budget</option>
        </select>
      </div>

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.tableHeader}>Resource Name</th>
            <th style={styles.tableHeader}>Budget</th>
            <th style={styles.tableHeader}>Expenditure</th>
            <th style={styles.tableHeader}>Savings</th>
            <th style={styles.tableHeader}>Status</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredResources.map(resource => (
            <tr key={resource.id} style={styles.tableRow}>
              <td style={styles.tableData}>{resource.name}</td>
              <td style={styles.tableData}>${resource.budget.toFixed(2)}</td>
              <td style={styles.tableData}>${resource.expenditure.toFixed(2)}</td>
              <td style={styles.tableData}>${resource.savings.toFixed(2)}</td>
              <td style={styles.tableData}>{resource.status}</td>
              <td style={styles.tableData}>
                <button onClick={() => updateStatus(resource.id, 'On Track')} style={styles.actionButton}>On Track</button>
                <button onClick={() => updateStatus(resource.id, 'Over Budget')} style={styles.deleteButton}>Over Budget</button>
                <button style={styles.detailsButton}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// CSS in JS styles
const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9fafc',
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  header: {
    color: '#3F51B5',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  subheader: {
    color: '#616161',
    fontSize: '16px',
  },
  formContainer: {
    marginBottom: '40px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  formHeader: {
    marginBottom: '15px',
    fontSize: '20px',
    color: '#3F51B5',
  },
  inputField: {
    padding: '12px',
    margin: '10px 0',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #3F51B5',
    fontSize: '16px',
  },
  addButton: {
    padding: '12px 20px',
    backgroundColor: '#3F51B5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  filterContainer: {
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterLabel: {
    marginRight: '10px',
    fontSize: '16px',
    color: '#616161',
  },
  selectBox: {
    padding: '12px',
    border: '1px solid #3F51B5',
    borderRadius: '5px',
    fontSize: '16px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  tableHeaderRow: {
    backgroundColor: '#3F51B5',
  },
  tableHeader: {
    padding: '12px 20px',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableData: {
    padding: '12px 20px',
    fontSize: '16px',
    color: '#333',
  },
  actionButton: {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '8px 12px',
    backgroundColor: '#F44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  detailsButton: {
    padding: '8px 12px',
    backgroundColor: '#3F51B5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ResourceAllocation;
