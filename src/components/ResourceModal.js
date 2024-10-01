import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const styles = {
  modalContent: {
    padding: '20px',
    width: '350px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    fontSize: '16px',
  },
  dropdown: {
    margin: '20px 0',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  },
};

const ResourceModal = ({ isOpen, onRequestClose, organizationType, onAddResource }) => {
  const [resourceType, setResourceType] = useState('');
  const [resource, setResource] = useState({});

  const handleResourceTypeChange = (e) => {
    setResourceType(e.target.value);
    setResource({});
  };

  const handleResourceChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleAddResource = () => {
    onAddResource(resource);
    setResource({});
    setResourceType('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ content: styles.modalContent }}
    >
      <h2>Add Resource</h2>

      <label>Select Resource Type:</label>
      <select
        style={styles.dropdown}
        value={resourceType}
        onChange={handleResourceTypeChange}
      >
        <option value="">Select Resource Type</option>
        {organizationType === 'hospitality' && (
          <>
            <option value="accommodation">Accommodation</option>
            <option value="foodAndBeverage">Food and Beverage</option>
            <option value="staffing">Staffing</option>
            <option value="transportation">Transportation</option>
            <option value="medicalSupplies">Medical Supplies</option>
            <option value="communicationTools">Communication Tools</option>
          </>
        )}

        {organizationType === 'finance' && (
          <>
            <option value="financialAid">Financial Aid</option>
            <option value="insuranceServices">Insurance Services</option>
            <option value="atmServices">ATM Services</option>
            <option value="financialCounseling">Financial Counseling</option>
            <option value="resourceAllocation">Resource Allocation</option>
            <option value="donationsManagement">Donations Management</option>
          </>
        )}

        {organizationType === 'retail' && (
          <>
            <option value="suppliesAndGoods">Supplies and Goods</option>
            <option value="retailSpaces">Retail Spaces</option>
            <option value="logisticsAndDistribution">Logistics and Distribution</option>
            <option value="staffing">Staffing</option>
            <option value="discountsAndDonations">Discounts and Donations</option>
            <option value="customerAssistance">Customer Assistance</option>
          </>
        )}
      </select>

      {/* Display fields based on resource type */}
      {organizationType && resourceType && (
        <>
          {organizationType === 'hospitality' && resourceType === 'accommodation' && (
            <>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Resource Name (e.g., Hotel Room)"
                value={resource.name || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="text"
                name="description"
                placeholder="Description"
                value={resource.description || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="text"
                name="location"
                placeholder="Location"
                value={resource.location || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={resource.quantity || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="date"
                name="availabilityDates"
                placeholder="Availability Dates"
                value={resource.availabilityDates || ''}
                onChange={handleResourceChange}
              />
              <textarea
                style={styles.input}
                name="specialFeatures"
                placeholder="Special Features"
                value={resource.specialFeatures || ''}
                onChange={handleResourceChange}
              />
            </>
          )}

          {organizationType === 'finance' && resourceType === 'financialAid' && (
            <>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Resource Name (e.g., Financial Aid)"
                value={resource.name || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="text"
                name="description"
                placeholder="Description"
                value={resource.description || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="number"
                name="quantity"
                placeholder="Amount"
                value={resource.quantity || ''}
                onChange={handleResourceChange}
              />
              <textarea
                style={styles.input}
                name="eligibilityCriteria"
                placeholder="Eligibility Criteria"
                value={resource.eligibilityCriteria || ''}
                onChange={handleResourceChange}
              />
              <textarea
                style={styles.input}
                name="applicationProcess"
                placeholder="Application Process"
                value={resource.applicationProcess || ''}
                onChange={handleResourceChange}
              />
            </>
          )}

          {organizationType === 'retail' && resourceType === 'suppliesAndGoods' && (
            <>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Resource Name (e.g., Clothing)"
                value={resource.name || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="text"
                name="description"
                placeholder="Description"
                value={resource.description || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={resource.quantity || ''}
                onChange={handleResourceChange}
              />
              <input
                style={styles.input}
                type="text"
                name="location"
                placeholder="Location"
                value={resource.location || ''}
                onChange={handleResourceChange}
              />
              <textarea
                style={styles.input}
                name="distributionDetails"
                placeholder="Distribution Details"
                value={resource.distributionDetails || ''}
                onChange={handleResourceChange}
              />
            </>
          )}
        </>
      )}

      <button
        style={styles.button}
        onClick={handleAddResource}
      >
        Add Resource
      </button>
      <button
        style={styles.closeButton}
        onClick={onRequestClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default ResourceModal;
