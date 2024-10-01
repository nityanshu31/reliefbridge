import React, { useState } from 'react';

// CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '80px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  supplyList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  cardHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDetail: {
    marginBottom: '5px',
  },
  editButton: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ffc107',
    color: '#fff',
    cursor: 'pointer',
  },
  deleteButton: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#dc3545',
    color: '#fff',
    cursor: 'pointer',
  },
  allocatedSupply: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
};

const HospitalityMedicalSupplies = () => {
  const [supplies, setSupplies] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    type: '',
    quantity: '',
    location: '',
    expiryDate: '',
    supplier: '',
    specialInstructions: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [removeIndex, setRemoveIndex] = useState(null);
  const [removeForm, setRemoveForm] = useState({
    quantityToRemove: '',
    reason: '',
  });
  const [allocationFormVisible, setAllocationFormVisible] = useState(false);
  const [selectedSupply, setSelectedSupply] = useState(null);
  const [allocatedSupplies, setAllocatedSupplies] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRemoveChange = (e) => {
    const { name, value } = e.target;
    setRemoveForm({ ...removeForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => !val)) {
      alert('Please fill in all fields.');
      return;
    }

    if (editIndex !== null) {
      // Update existing supply
      const updatedSupplies = supplies.map((supply, index) =>
        index === editIndex ? form : supply
      );
      setSupplies(updatedSupplies);
      setEditIndex(null);
    } else {
      // Add new supply
      setSupplies([...supplies, form]);
    }

    setForm({
      type: '',
      quantity: '',
      location: '',
      expiryDate: '',
      supplier: '',
      specialInstructions: '',
    });
    setFormVisible(false);
  };

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    if (!removeForm.quantityToRemove || !removeForm.reason) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedSupplies = supplies.map((supply, index) => {
      if (index === removeIndex) {
        const updatedQuantity = supply.quantity - parseInt(removeForm.quantityToRemove, 10);
        return {
          ...supply,
          quantity: updatedQuantity > 0 ? updatedQuantity : 0,
        };
      }
      return supply;
    }).filter((supply, index) => !(index === removeIndex && supply.quantity <= 0));

    setSupplies(updatedSupplies);
    setRemoveIndex(null);
    setRemoveForm({
      quantityToRemove: '',
      reason: '',
    });
  };

  const handleEdit = (index) => {
    setForm(supplies[index]);
    setEditIndex(index);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    setRemoveIndex(index);
  };

  const handleRemoveCancel = () => {
    setRemoveIndex(null);
    setRemoveForm({
      quantityToRemove: '',
      reason: '',
    });
  };

  const handleAllocation = (index) => {
    setSelectedSupply(supplies[index]);
    setAllocationFormVisible(true);
  };

  const handleAllocationSubmit = (e) => {
    e.preventDefault();
    const quantityAllocate = parseInt(e.target.quantityAllocate.value, 10);
    const distributionMethod = e.target.distributionMethod.value;
    
    if (quantityAllocate && selectedSupply) {
      const updatedSupplies = supplies.map((supply, idx) => {
        if (idx === supplies.indexOf(selectedSupply)) {
          return {
            ...supply,
            quantity: supply.quantity - quantityAllocate,
          };
        }
        return supply;
      }).filter(supply => supply.quantity > 0);

      setSupplies(updatedSupplies);
      setAllocatedSupplies([...allocatedSupplies, { ...selectedSupply, quantity: quantityAllocate, distributionMethod }]);
      setAllocationFormVisible(false);
    }
  };

  const handleAllocationCancel = () => {
    setAllocationFormVisible(false);
    setSelectedSupply(null);
  };

  return (
    <div style={styles.container}>
      <h2>Medical Supplies Management</h2>
      <button onClick={() => setFormVisible(!formVisible)} style={styles.button}>
        {formVisible ? 'Cancel' : (editIndex !== null ? 'Edit Supply' : 'Add Medical Supply')}
      </button>

      {formVisible && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="type">Type of Medical Supply:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={form.type}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="quantity">Quantity Available:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={form.quantity}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="expiryDate">Expiration Date:</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={form.expiryDate}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="supplier">Supplier:</label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              value={form.supplier}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="specialInstructions">Special Instructions:</label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={form.specialInstructions}
              onChange={handleInputChange}
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}

      {removeIndex !== null && (
        <form onSubmit={handleRemoveSubmit} style={styles.form}>
          <h3>Remove Medical Supply</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="quantityToRemove">Quantity to Remove:</label>
            <input
              type="number"
              id="quantityToRemove"
              name="quantityToRemove"
              value={removeForm.quantityToRemove}
              onChange={handleRemoveChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="reason">Reason for Removal:</label>
            <textarea
              id="reason"
              name="reason"
              value={removeForm.reason}
              onChange={handleRemoveChange}
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
          <button type="button" onClick={handleRemoveCancel} style={styles.button}>Cancel</button>
        </form>
      )}

      {allocationFormVisible && (
        <form onSubmit={handleAllocationSubmit} style={styles.form}>
          <h3>Allocate Medical Supplies</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="quantityAllocate">Quantity to Allocate:</label>
            <input
              type="number"
              id="quantityAllocate"
              name="quantityAllocate"
              min="1"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="distributionMethod">Distribution Method:</label>
            <input
              type="text"
              id="distributionMethod"
              name="distributionMethod"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Allocate</button>
          <button type="button" onClick={handleAllocationCancel} style={styles.button}>Cancel</button>
        </form>
      )}

      <div style={styles.supplyList}>
        {supplies.map((supply, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>{supply.type}</div>
            <div style={styles.cardDetail}>Quantity Available: {supply.quantity}</div>
            <div style={styles.cardDetail}>Location: {supply.location}</div>
            <div style={styles.cardDetail}>Expiry Date: {supply.expiryDate}</div>
            <div style={styles.cardDetail}>Supplier: {supply.supplier}</div>
            <div style={styles.cardDetail}>Special Instructions: {supply.specialInstructions}</div>
            <button onClick={() => handleEdit(index)} style={styles.editButton}>Edit</button>
            <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Delete</button>
            <button onClick={() => handleAllocation(index)} style={styles.button}>Allocate</button>
          </div>
        ))}
      </div>

      {allocatedSupplies.length > 0 && (
        <div>
          <h3>Allocated Supplies</h3>
          {allocatedSupplies.map((supply, index) => (
            <div key={index} style={styles.allocatedSupply}>
              <div style={styles.cardHeader}>{supply.type}</div>
              <div style={styles.cardDetail}>Allocated Quantity: {supply.quantity}</div>
              <div style={styles.cardDetail}>Distribution Method: {supply.distributionMethod}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HospitalityMedicalSupplies;
