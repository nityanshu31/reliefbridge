import React, { useState } from 'react';

// CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  quickActions: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  summarySection: {
    marginBottom: '30px',
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  summaryItem: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',
  },
  realTime: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
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
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
    marginRight: '15px',
    marginBottom: '15px',
  },
  cardHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDetail: {
    marginBottom: '5px',
  },
  allocateButton: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  },
  section: {
    marginBottom: '30px',
  },
  horizontalLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  allocatedCard: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    marginBottom: '15px',
    width: '300px',
  },
};

const HospitalityAccommodation = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [allocatedRooms, setAllocatedRooms] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    type: '',
    location: '',
    numberOfRooms: '',
    capacityPerRoom: '',
    availabilityDates: '',
    specialFeatures: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => !val)) {
      alert('Please fill in all fields.');
      return;
    }

    setAccommodations([...accommodations, { ...form, availableRooms: parseInt(form.numberOfRooms) }]);
    setForm({
      type: '',
      location: '',
      numberOfRooms: '',
      capacityPerRoom: '',
      availabilityDates: '',
      specialFeatures: '',
    });
    setFormVisible(false);
  };

  const handleAllocate = (index) => {
    const numberOfRoomsToAllocate = prompt('How many rooms would you like to allocate?');
    const numRooms = parseInt(numberOfRoomsToAllocate);
    
    if (isNaN(numRooms) || numRooms <= 0) {
      alert('Invalid number of rooms.');
      return;
    }

    if (numRooms > accommodations[index].availableRooms) {
      alert('Not enough available rooms.');
      return;
    }

    const updatedAccommodations = accommodations.map((acc, idx) => {
      if (idx === index) {
        return { ...acc, availableRooms: acc.availableRooms - numRooms };
      }
      return acc;
    });

    setAccommodations(updatedAccommodations);
    setAllocatedRooms([...allocatedRooms, {
      type: accommodations[index].type,
      location: accommodations[index].location,
      numberOfRoomsAllocated: numRooms,
    }]);
  };

  // Summary statistics
  const totalAccommodations = accommodations.length;
  const totalCapacity = accommodations.reduce((acc, acco) => acc + acco.numberOfRooms * acco.capacityPerRoom, 0);
  const currentOccupancyRate = (totalCapacity - accommodations.reduce((acc, acco) => acc + acco.availableRooms * acco.capacityPerRoom, 0)) / totalCapacity * 100;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.title}>Accommodation Dashboard</div>
        <div style={styles.quickActions}>
          <button onClick={() => setFormVisible(!formVisible)} style={styles.button}>
            {formVisible ? 'Cancel' : 'Add New Accommodation'}
          </button>
          <button
            onClick={() => alert('Allocate Accommodations feature is now working.')}
            style={styles.button}
          >
            Allocate Accommodations
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div style={styles.summarySection}>
        <div style={styles.summary}>
          <div style={styles.summaryItem}><strong>Total Accommodations:</strong> {totalAccommodations}</div>
          <div style={styles.summaryItem}><strong>Total Capacity:</strong> {totalCapacity}</div>
          <div style={styles.summaryItem}><strong>Current Occupancy Rate:</strong> {isNaN(currentOccupancyRate) ? 'N/A' : currentOccupancyRate.toFixed(2)}%</div>
        </div>
      </div>

      {/* Real-Time Data Display */}
      <div style={styles.realTime}>
        <div style={{ flex: 1 }}>
          <h3>Live Inventory</h3>
          {/* Placeholder for live inventory */}
          <p>Inventory data would be displayed here.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Map View</h3>
          {/* Placeholder for map view */}
          <p>Map view would be displayed here.</p>
        </div>
      </div>

      {/* Accommodations List */}
      <div style={styles.section}>
        <h3>Accommodations List</h3>
        <div style={styles.horizontalLayout}>
          {accommodations.length > 0 ? (
            accommodations.map((acc, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.cardHeader}>{acc.type}</div>
                <div style={styles.cardDetail}><strong>Location:</strong> {acc.location}</div>
                <div style={styles.cardDetail}><strong>Number of Rooms:</strong> {acc.numberOfRooms}</div>
                <div style={styles.cardDetail}><strong>Available Rooms:</strong> {acc.availableRooms}</div>
                <div style={styles.cardDetail}><strong>Capacity per Room:</strong> {acc.capacityPerRoom}</div>
                <div style={styles.cardDetail}><strong>Availability Dates:</strong> {acc.availabilityDates}</div>
                <div style={styles.cardDetail}><strong>Special Features:</strong> {acc.specialFeatures}</div>
                <button
                  onClick={() => handleAllocate(index)}
                  style={styles.allocateButton}
                >
                  Allocate Rooms
                </button>
              </div>
            ))
          ) : (
            <p>No accommodations added yet.</p>
          )}
        </div>
      </div>

      {/* Allocated Rooms */}
      <div style={styles.section}>
        <h3>Allocated Rooms</h3>
        <div style={styles.horizontalLayout}>
          {allocatedRooms.length > 0 ? (
            allocatedRooms.map((room, index) => (
              <div key={index} style={styles.allocatedCard}>
                <div><strong>Type:</strong> {room.type}</div>
                <div><strong>Location:</strong> {room.location}</div>
                <div><strong>Number of Rooms Allocated:</strong> {room.numberOfRoomsAllocated}</div>
              </div>
            ))
          ) : (
            <p>No rooms have been allocated yet.</p>
          )}
        </div>
      </div>

      {/* Add Accommodation Form */}
      {formVisible && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="type" style={styles.label}>Type of Accommodation:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={form.type}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="location" style={styles.label}>Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="numberOfRooms" style={styles.label}>Number of Rooms:</label>
            <input
              type="number"
              id="numberOfRooms"
              name="numberOfRooms"
              value={form.numberOfRooms}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="capacityPerRoom" style={styles.label}>Capacity per Room:</label>
            <input
              type="number"
              id="capacityPerRoom"
              name="capacityPerRoom"
              value={form.capacityPerRoom}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="availabilityDates" style={styles.label}>Availability Dates:</label>
            <input
              type="text"
              id="availabilityDates"
              name="availabilityDates"
              value={form.availabilityDates}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="specialFeatures" style={styles.label}>Special Features:</label>
            <textarea
              id="specialFeatures"
              name="specialFeatures"
              value={form.specialFeatures}
              onChange={handleInputChange}
              style={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>Add Accommodation</button>
        </form>
      )}
    </div>
  );
};

export default HospitalityAccommodation;
