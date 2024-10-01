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
  },
};

const AssignedResources = () => {
  const assignedResources = [
    { id: 1, name: 'Resource 1', status: 'In Transit' },
    { id: 2, name: 'Resource 2', status: 'Delivered' },
  ];

  const handleTrackResource = (id) => {
    // Logic to track the resource
    console.log(`Tracking resource ${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Assigned Resources</h2>
      <ul style={styles.list}>
        {assignedResources.map((resource) => (
          <li key={resource.id} style={styles.listItem}>
            <span>{resource.name}</span> - <span>{resource.status}</span>
            <button style={styles.button} onClick={() => handleTrackResource(resource.id)}>
              Track Resource
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedResources;
