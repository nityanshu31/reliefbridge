import React from 'react';

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginLeft: '5px',
  },
};

const IncidentsRequiringResources = () => {
  const incidents = [
    { id: 1, name: 'Incident 1', status: 'Pending' },
    { id: 2, name: 'Incident 2', status: 'Urgent' },
  ];

  const handleViewIncident = (id) => {
    // Logic to view the incident details
    console.log(`Viewing incident ${id}`);
  };

  const handleAssignResources = (id) => {
    // Logic to assign resources to the incident
    console.log(`Assigning resources to incident ${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Incidents Requiring Resources</h2>
      <ul style={styles.list}>
        {incidents.map((incident) => (
          <li key={incident.id} style={styles.listItem}>
            <span>{incident.name}</span>
            <div>
              <button style={styles.button} onClick={() => handleViewIncident(incident.id)}>
                View Incident
              </button>
              <button style={styles.button} onClick={() => handleAssignResources(incident.id)}>
                Assign Resources
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentsRequiringResources;
