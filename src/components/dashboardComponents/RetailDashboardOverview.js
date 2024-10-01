import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const professionalData = {
  totalSpaces: 100,
  availableSpaces: 35,
  reservedSpaces: 65,
  topPerformingSpaces: ['Mall A - 40%', 'Mall B - 30%', 'Mall C - 20%', 'Mall D - 10%'],
  recentActivities: [
    'Space 101 reserved by XYZ Corp',
    'Space 202 maintenance request raised',
    'Space 305 available for booking',
    'New space added in Mall A'
  ]
};

const RetailDashboardOverview = () => {
  const [data, setData] = useState(professionalData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const [showModal, setShowModal] = useState(false); // Modal for detailed report
  const chartRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const resetData = () => {
    setData(professionalData);
  };

  const addNewActivity = () => {
    if (newActivity.trim()) {
      setData(prevData => ({
        ...prevData,
        recentActivities: [newActivity, ...prevData.recentActivities]
      }));
      setNewActivity('');
    }
  };

  const filteredActivities = data.recentActivities.filter(activity =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!loading && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: ['Available Spaces', 'Reserved Spaces'],
          datasets: [
            {
              label: 'Space Utilization',
              data: [data.availableSpaces, data.reservedSpaces],
              backgroundColor: ['#4CAF50', '#FF5722'], // Green for available, red for reserved
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Keeps the chart size under control
          plugins: {
            legend: { position: 'top' },
            tooltip: {
              callbacks: {
                label: context => `${context.label}: ${context.raw}`
              }
            }
          }
        }
      });
      return () => chartInstance.destroy();
    }
  }, [loading, data]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Retail Dashboard Overview</h2>
      <p style={styles.description}>Overview of retail spaces with key metrics and activities.</p>

      {loading ? (
        <div style={styles.loader}>Loading...</div>
      ) : (
        <div style={styles.content}>
          {/* Key Metrics */}
          <div style={styles.metrics}>
            {['Total Spaces', 'Available Spaces', 'Reserved Spaces'].map((metric, index) => (
              <div key={index} style={styles.metricItem}>
                <h3 style={styles.metricTitle}>{metric}</h3>
                <p style={styles.metricValue}>
                  {metric === 'Total Spaces' ? data.totalSpaces
                    : metric === 'Available Spaces' ? data.availableSpaces
                    : data.reservedSpaces}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={styles.chartContainer}>
            <h3 style={styles.chartTitle}>Space Utilization</h3>
            <div style={{ width: '100%', height: '200px' }}>
              <canvas ref={chartRef} />
            </div>
          </div>

          {/* Recent Activities */}
          <div style={styles.recentActivities}>
            <h3 style={styles.activitiesTitle}>Recent Activities</h3>
            <ul style={styles.activitiesList}>
              {filteredActivities.map((activity, index) => (
                <li key={index} style={styles.activityItem}>{activity}</li>
              ))}
            </ul>
          </div>

          {/* Search and Filter */}
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          {/* Add New Activity */}
          <div style={styles.addActivity}>
            <input
              type="text"
              placeholder="New Activity..."
              value={newActivity}
              onChange={(e) => setNewActivity(e.target.value)}
              style={styles.newActivityInput}
            />
            <button style={styles.addActivityButton} onClick={addNewActivity}>Add Activity</button>
          </div>

          {/* Reset Data */}
          <button onClick={resetData} style={styles.resetButton}>Reset Data</button>

          {/* Detailed Report */}
          <button onClick={() => setShowModal(true)} style={styles.reportButton}>View Detailed Report</button>

          {/* Modal for Detailed Report */}
          {showModal && (
            <div style={styles.modal}>
              <div style={styles.modalContent}>
                <h3>Detailed Report</h3>
                <p>Detailed report includes space usage, performance, and revenue data.</p>
                <p><strong>Total Spaces:</strong> {data.totalSpaces}</p>
                <p><strong>Available Spaces:</strong> {data.availableSpaces}</p>
                <p><strong>Reserved Spaces:</strong> {data.reservedSpaces}</p>
                <p><strong>Top Performing Spaces:</strong></p>
                <ul>
                  {data.topPerformingSpaces.map((space, index) => (
                    <li key={index}>{space}</li>
                  ))}
                </ul>
                <button style={styles.closeModalButton} onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    color: '#333',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#666',
  },
  loader: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#007bff',
  },
  content: {
    marginTop: '20px',
  },
  metrics: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  metricItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '30%',
    textAlign: 'center',
  },
  metricTitle: {
    fontSize: '18px',
    color: '#333',
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  chartContainer: {
    marginBottom: '20px',
  },
  chartTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  recentActivities: {
    marginBottom: '20px',
  },
  activitiesTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  activitiesList: {
    listStyleType: 'none',
    padding: 0,
  },
  activityItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  searchContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px',
    marginRight: '10px',
  },
  addActivity: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  newActivityInput: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px',
    marginRight: '10px',
  },
  addActivityButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  resetButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  reportButton: {
    padding: '10px 20px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    textAlign: 'center',
  },
  closeModalButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

export default RetailDashboardOverview;
