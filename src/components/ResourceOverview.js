import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const mockResourceData = [
  { id: 1, name: 'Laptop', category: 'IT Equipment', status: 'Available' },
  { id: 2, name: 'Projector', category: 'IT Equipment', status: 'Allocated' },
  { id: 3, name: 'Conference Room', category: 'Space', status: 'Available' },
  // Add more mock data
];

const ResourceOverview = () => {
  const [resources, setResources] = useState(mockResourceData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newResource, setNewResource] = useState({ name: '', category: '', status: 'Available' });
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [sortType, setSortType] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 5;

  const filteredResources = resources
    .filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAvailability =
        availabilityFilter === 'all' ||
        (availabilityFilter === 'available' && resource.status === 'Available') ||
        (availabilityFilter === 'allocated' && resource.status === 'Allocated');
      return matchesSearch && matchesAvailability;
    })
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortType === 'status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  const chartData = {
    labels: ['Available', 'Allocated'],
    datasets: [
      {
        data: [
          resources.filter(resource => resource.status === 'Available').length,
          resources.filter(resource => resource.status === 'Allocated').length,
        ],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const categoryData = {
    labels: [...new Set(resources.map(resource => resource.category))],
    datasets: [
      {
        label: 'Category Breakdown',
        data: [...new Set(resources.map(resource => resource.category))].map(
          category => resources.filter(resource => resource.category === category).length
        ),
        backgroundColor: '#FFCE56',
      },
    ],
  };

  const handleAddResource = () => {
    if (newResource.name && newResource.category) {
      setResources([...resources, { ...newResource, id: resources.length + 1 }]);
      setNewResource({ name: '', category: '', status: 'Available' });
    }
  };

  const updateResourceStatus = (id, status) => {
    setResources(resources.map(resource => (resource.id === id ? { ...resource, status } : resource)));
  };

  const deleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  const totalResources = resources.length;
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  const currentResources = filteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Resource Overview</h2>
      <p style={styles.description}>Manage and track your resources effectively.</p>

      {/* Total Resource Count */}
      <div style={styles.totalResources}>
        <h3>Total Resources: {totalResources}</h3>
      </div>

      {/* Resource Availability Pie Chart */}
      <div style={styles.chartContainer}>
        <h3>Resource Availability</h3>
        <Pie data={chartData} options={{ responsive: true }} />
      </div>

      {/* Category Breakdown Bar Chart */}
      <div style={styles.chartContainer}>
        <h3>Category Breakdown</h3>
        <Bar data={categoryData} options={{ responsive: true }} />
      </div>

      {/* Search and Filter */}
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <select
          value={availabilityFilter}
          onChange={e => setAvailabilityFilter(e.target.value)}
          style={styles.select}
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="allocated">Allocated</option>
        </select>
        <select value={sortType} onChange={e => setSortType(e.target.value)} style={styles.select}>
          <option value="name">Sort by Name</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      {/* Resource List */}
      <ul style={styles.resourceList}>
        {currentResources.map(resource => (
          <li key={resource.id} style={styles.resourceItem}>
            {resource.name} - {resource.category} ({resource.status})
            <div>
              <button
                style={styles.button}
                onClick={() => updateResourceStatus(resource.id, resource.status === 'Available' ? 'Allocated' : 'Available')}
              >
                {resource.status === 'Available' ? 'Allocate' : 'Mark Available'}
              </button>
              <button style={styles.buttonDelete} onClick={() => deleteResource(resource.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} style={styles.paginationButton}>
          Prev
        </button>
        <span style={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          style={styles.paginationButton}
        >
          Next
        </button>
      </div>

      {/* Add New Resource */}
      <div style={styles.addResourceContainer}>
        <h3>Add New Resource</h3>
        <input
          type="text"
          placeholder="Name"
          value={newResource.name}
          onChange={e => setNewResource({ ...newResource, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Category"
          value={newResource.category}
          onChange={e => setNewResource({ ...newResource, category: e.target.value })}
          style={styles.input}
        />
        <select
          value={newResource.status}
          onChange={e => setNewResource({ ...newResource, status: e.target.value })}
          style={styles.select}
        >
          <option value="Available">Available</option>
          <option value="Allocated">Allocated</option>
        </select>
        <button style={styles.addButton} onClick={handleAddResource}>
          Add Resource
        </button>
      </div>

      {/* Export Data */}
      <button style={styles.exportButton} onClick={() => alert(JSON.stringify(resources, null, 2))}>
        Export Data
      </button>
    </div>
  );
};

// CSS in JS
const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      maxWidth: '1100px',
      margin: '30px auto',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    },
    header: {
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '10px',
      fontSize: '28px',
    },
    description: {
      textAlign: 'center',
      color: '#7f8c8d',
      marginBottom: '30px',
      fontSize: '18px',
    },
    totalResources: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#16a085',
      fontSize: '24px',
    },
    chartContainer: {
      marginBottom: '40px',
      textAlign: 'center',
      width: '350px',
      height: '350px',
      margin: '0 auto',
    },
    controls: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '25px',
    },
    input: {
      padding: '10px',
      width: '180px',
      borderRadius: '5px',
      border: '1px solid #bdc3c7',
    },
    select: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #bdc3c7',
    },
    resourceList: {
      listStyleType: 'none',
      padding: '0',
    },
    resourceItem: {
      padding: '15px 20px',
      borderBottom: '1px solid #ecf0f1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      marginBottom: '10px',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.05)',
    },
    button: {
      padding: '8px 12px',
      marginLeft: '10px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonDelete: {
      padding: '8px 12px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    pagination: {
      textAlign: 'center',
      marginTop: '20px',
    },
    paginationButton: {
      padding: '8px 14px',
      margin: '0 5px',
      backgroundColor: '#2980b9',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    pageInfo: {
      fontSize: '16px',
      color: '#7f8c8d',
    },
    addResourceContainer: {
      textAlign: 'center',
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#ecf0f1',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '15px',
    },
    exportButton: {
      padding: '10px 20px',
      backgroundColor: '#f39c12',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
      margin: '20px auto',
    },
    // Add marginTop to create space between the two charts
    chartContainer: {
      marginBottom: '40px',
      textAlign: 'center',
      width: '350px',
      height: '350px',
      margin: '0 auto',
      marginTop: '40px', // Added this line to add space between charts
    },
  };
  

export default ResourceOverview;
