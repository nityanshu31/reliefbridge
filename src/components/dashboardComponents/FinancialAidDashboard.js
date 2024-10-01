import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const mockFinancialAidData = {
  totalAid: 5000000, // in dollars
  totalRecipients: 1200,
  averageAid: 4166.67, // in dollars
  eligibilityRate: 0.85, // 85%
  disbursedAid: 4000000, // in dollars
  pendingAid: 1000000, // in dollars
  topRecipients: ['Student A - $5000', 'Student B - $4500', 'Student C - $4200'],
  aidTypes: { grants: 60, scholarships: 30, loans: 10 }, // percentage breakdown
  recentActivities: [
    'Disbursed aid to Student A',
    'New scholarship added: STEM Scholars',
    'Aid application for Student D approved',
    'Annual budget update: increased funding'
  ]
};

const FinancialAidDashboard = () => {
  const [data, setData] = useState(mockFinancialAidData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const chartRef = useRef(null);

  const filteredActivities = data.recentActivities.filter(activity =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewActivity = () => {
    if (newActivity.trim()) {
      setData(prevData => ({
        ...prevData,
        recentActivities: [newActivity, ...prevData.recentActivities]
      }));
      setNewActivity('');
    }
  };

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Grants', 'Scholarships', 'Loans'],
        datasets: [
          {
            label: 'Aid Distribution',
            data: [data.aidTypes.grants, data.aidTypes.scholarships, data.aidTypes.loans],
            backgroundColor: ['#4CAF50', '#FFC107', '#2196F3'], // green, yellow, blue
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: context => `${context.label}: ${context.raw}%`
            }
          }
        }
      }
    });
    return () => chartInstance.destroy();
  }, [data]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Financial Aid Dashboard</h2>
      <p style={styles.description}>Overview of financial aid and related metrics.</p>

      {/* Financial Metrics */}
      <div style={styles.metrics}>
        {[
          { label: 'Total Aid', value: `$${data.totalAid.toLocaleString()}` },
          { label: 'Total Recipients', value: data.totalRecipients },
          { label: 'Average Aid', value: `$${data.averageAid.toLocaleString()}` },
          { label: 'Eligibility Rate', value: `${(data.eligibilityRate * 100).toFixed(1)}%` },
          { label: 'Disbursed Aid', value: `$${data.disbursedAid.toLocaleString()}` },
          { label: 'Pending Aid', value: `$${data.pendingAid.toLocaleString()}` }
        ].map((metric, index) => (
          <div key={index} style={styles.metricItem}>
            <h3 style={styles.metricTitle}>{metric.label}</h3>
            <p style={styles.metricValue}>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Aid Distribution Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Aid Distribution by Type</h3>
        <div style={{ width: '100%', height: '250px' }}>
          <canvas ref={chartRef} />
        </div>
      </div>

      {/* Top Recipients */}
      <div style={styles.recipientsContainer}>
        <h3 style={styles.recipientsTitle}>Top Recipients</h3>
        <ul style={styles.recipientsList}>
          {data.topRecipients.map((recipient, index) => (
            <li key={index} style={styles.recipientItem}>{recipient}</li>
          ))}
        </ul>
      </div>

      {/* Recent Activities */}
      <div style={styles.activitiesContainer}>
        <h3 style={styles.activitiesTitle}>Recent Activities</h3>
        <input
          type="text"
          placeholder="Search activities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <ul style={styles.activitiesList}>
          {filteredActivities.map((activity, index) => (
            <li key={index} style={styles.activityItem}>{activity}</li>
          ))}
        </ul>

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
      </div>
    </div>
  );
};

// CSS in JS
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  metrics: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  metricItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    width: '30%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
    textAlign: 'center',
  },
  recipientsContainer: {
    marginBottom: '20px',
  },
  recipientsTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  recipientsList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  recipientItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  activitiesContainer: {
    marginBottom: '20px',
  },
  activitiesTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '10px',
  },
  activitiesList: {
    listStyleType: 'none',
    padding: 0,
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  addActivity: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
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
};

export default FinancialAidDashboard;
