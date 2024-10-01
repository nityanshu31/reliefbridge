import React, { useState } from 'react';

const SuppliesAndGoodsManagement = () => {
  // State management for supplies
  const [supplies, setSupplies] = useState([]);
  const [newSupply, setNewSupply] = useState({ name: '', quantity: '', description: '' });

  // Handle form submissions
  const handleAddSupply = (e) => {
    e.preventDefault();
    setSupplies([...supplies, { ...newSupply, id: supplies.length + 1 }]);
    setNewSupply({ name: '', quantity: '', description: '' });
  };

  const handleRemoveSupply = (id) => {
    setSupplies(supplies.filter(supply => supply.id !== id));
  };

  // Summary statistics
  const totalSupplies = supplies.length;
  const totalQuantity = supplies.reduce((acc, supply) => acc + parseInt(supply.quantity || 0), 0);

  // Styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
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
      <h1> Supply & Goods Management</h1>

      

      {/* Summary Statistics */}
      <div style={summaryStyle}>
        <div>Total Supplies: {totalSupplies}</div>
        <div>Total Quantity: {totalQuantity}</div>
        {/* Additional statistics like distributed goods, critical items can be added */}
      </div>

      {/* Add New Supply */}
      <h3>Add New Supply</h3>
      <form onSubmit={handleAddSupply} style={formStyle}>
        <input
          type="text"
          placeholder="Supply Name"
          value={newSupply.name}
          onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSupply.quantity}
          onChange={(e) => setNewSupply({ ...newSupply, quantity: e.target.value })}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newSupply.description}
          onChange={(e) => setNewSupply({ ...newSupply, description: e.target.value })}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Supply</button>
      </form>

      {/* Live Inventory Table */}
      <h3>Live Inventory</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Quantity</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {supplies.length === 0 ? (
            <tr>
              <td colSpan="5" style={tableDataStyle}>No supplies added yet.</td>
            </tr>
          ) : (
            supplies.map((supply) => (
              <tr key={supply.id}>
                <td style={tableDataStyle}>{supply.id}</td>
                <td style={tableDataStyle}>{supply.name}</td>
                <td style={tableDataStyle}>{supply.quantity}</td>
                <td style={tableDataStyle}>{supply.description}</td>
                <td style={tableDataStyle}>
                  <button onClick={() => handleRemoveSupply(supply.id)} style={buttonStyle}>❌ Remove</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SuppliesAndGoodsManagement;
