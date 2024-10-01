import React, { useState } from 'react';

const RetailSpacesManagement = () => {
  const [spaces, setSpaces] = useState([]);
  const [spaceDetails, setSpaceDetails] = useState({ name: '', location: '', capacity: '', contactPerson: '', availability: true });
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [reservedSpaces, setReservedSpaces] = useState([]);
  const [volunteers, setVolunteers] = useState({});
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [reports, setReports] = useState([]);

  // Feature 1: Add or Update a retail space
  const addOrUpdateSpace = () => {
    if (editIndex !== null) {
      const updatedSpaces = [...spaces];
      updatedSpaces[editIndex] = spaceDetails;
      setSpaces(updatedSpaces);
      setEditIndex(null);
    } else {
      setSpaces([...spaces, spaceDetails]);
    }
    setSpaceDetails({ name: '', location: '', capacity: '', contactPerson: '', availability: true });
  };

  // Feature 2: Delete a retail space
  const deleteSpace = (index) => {
    const updatedSpaces = spaces.filter((_, i) => i !== index);
    setSpaces(updatedSpaces);
  };

  // Feature 3: Edit a retail space
  const editSpace = (index) => {
    setSpaceDetails(spaces[index]);
    setEditIndex(index);
  };

  // Feature 4: Search retail spaces
  const filteredSpaces = spaces.filter((space) =>
    space.name.toLowerCase().includes(search.toLowerCase())
  );

  // Feature 5: Sort retail spaces by name
  const sortSpacesByName = () => {
    const sortedSpaces = [...spaces].sort((a, b) => a.name.localeCompare(b.name));
    setSpaces(sortedSpaces);
  };

  // Feature 6: Track available capacity
  const totalCapacity = spaces.reduce((acc, curr) => acc + parseInt(curr.capacity || 0, 10), 0);

  // Feature 7: Reserve retail space for emergency use
  const reserveSpace = (index) => {
    setReservedSpaces([...reservedSpaces, spaces[index]]);
  };

  // Feature 8: Toggle space availability
  const toggleAvailability = (index) => {
    const updatedSpaces = [...spaces];
    updatedSpaces[index].availability = !updatedSpaces[index].availability;
    setSpaces(updatedSpaces);
  };

  // Feature 9: View detailed information about each retail space
  const viewDetails = (space) => {
    alert(`Details:\nName: ${space.name}\nLocation: ${space.location}\nCapacity: ${space.capacity}\nContact: ${space.contactPerson}\nAvailable: ${space.availability ? 'Yes' : 'No'}`);
  };

  // Feature 10: Filter spaces by availability (Not used in this version)
  // const availableSpaces = spaces.filter((space) => space.availability);

  // Feature 11: Assign volunteer
  const assignVolunteer = (spaceName, volunteerName) => {
    setVolunteers({ ...volunteers, [spaceName]: volunteerName });
  };

  // Feature 12: Submit maintenance request
  const submitRequest = (spaceName, issue) => {
    setMaintenanceRequests([...maintenanceRequests, { spaceName, issue }]);
  };

  // Feature 13: Generate reports
  const generateReport = () => {
    const reportData = {
      totalSpaces: spaces.length,
      reservedSpaces: reservedSpaces.length,
      totalCapacity,
    };
    setReports([...reports, reportData]);
  };

  // Feature 14: Notifications for space availability
  const sendNotification = (spaceName, status) => {
    alert(`Notification: Space "${spaceName}" is now ${status ? 'available' : 'unavailable'}.`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Retail Spaces Management</h2>
      <p>Manage retail spaces available for emergency use.</p>

      {/* Input form for adding or editing spaces */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={spaceDetails.name}
          onChange={(e) => setSpaceDetails({ ...spaceDetails, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Location"
          value={spaceDetails.location}
          onChange={(e) => setSpaceDetails({ ...spaceDetails, location: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={spaceDetails.capacity}
          onChange={(e) => setSpaceDetails({ ...spaceDetails, capacity: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Contact Person"
          value={spaceDetails.contactPerson}
          onChange={(e) => setSpaceDetails({ ...spaceDetails, contactPerson: e.target.value })}
          style={styles.input}
        />
        <button onClick={addOrUpdateSpace} style={styles.button}>
          {editIndex !== null ? 'Update Space' : 'Add Space'}
        </button>
      </div>

      {/* Search and Sort */}
      <input
        type="text"
        placeholder="Search spaces"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBar}
      />
      <button onClick={sortSpacesByName} style={styles.sortButton}>Sort by Name</button>

      {/* Available Spaces */}
      <h3 style={styles.subHeader}>Available Spaces</h3>
      <ul style={styles.spaceList}>
        {filteredSpaces.map((space, index) => (
          <li key={index} style={styles.spaceItem}>
            <div>
              <strong>{space.name}</strong> - {space.location} (Capacity: {space.capacity})
              <span style={styles.availability}>
                {space.availability ? 'Available' : 'Not Available'}
              </span>
            </div>
            <button onClick={() => toggleAvailability(index)} style={styles.actionButton}>
              Toggle Availability
            </button>
            <button onClick={() => viewDetails(space)} style={styles.actionButton}>View Details</button>
            <button onClick={() => editSpace(index)} style={styles.actionButton}>Edit</button>
            <button onClick={() => deleteSpace(index)} style={styles.actionButton}>Delete</button>
            <button onClick={() => reserveSpace(index)} style={styles.actionButton}>Reserve</button>
            <button onClick={() => assignVolunteer(space.name, 'John Doe')} style={styles.actionButton}>Assign Volunteer</button>
            <button onClick={() => submitRequest(space.name, 'Broken AC')} style={styles.actionButton}>Submit Request</button>
            <button onClick={() => sendNotification(space.name, space.availability)} style={styles.actionButton}>Notify</button>
          </li>
        ))}
      </ul>

      {/* Display total capacity */}
      <h4 style={styles.capacity}>Total Available Capacity: {totalCapacity}</h4>

      {/* Reports */}
      <button onClick={generateReport} style={styles.reportButton}>Generate Report</button>
      <div style={styles.reportSection}>
        {reports.map((report, index) => (
          <div key={index}>
            <h4>Report {index + 1}:</h4>
            <p>Total Spaces: {report.totalSpaces}</p>
            <p>Reserved Spaces: {report.reservedSpaces}</p>
            <p>Total Capacity: {report.totalCapacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS in JS
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  header: {
    color: '#4CAF50',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  searchBar: {
    padding: '8px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  sortButton: {
    padding: '8px 16px',
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  subHeader: {
    color: '#333',
    marginTop: '20px',
  },
  spaceList: {
    listStyleType: 'none',
    padding: 0,
  },
  spaceItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  actionButton: {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#ff9800',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  availability: {
    color: 'green',
    marginLeft: '10px',
  },
  capacity: {
    color: '#FF5722',
  },
  reportButton: {
    padding: '8px 16px',
    backgroundColor: '#E91E63',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  reportSection: {
    marginTop: '20px',
    backgroundColor: '#eeeeee',
    padding: '10px',
    borderRadius: '4px',
  },
};

export default RetailSpacesManagement;
