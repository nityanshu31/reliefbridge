import React, { useState } from 'react';
import QuizGame from '../components/QuizGame';

const Training = () => {
  // State for search, filters, and progress
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [progress, setProgress] = useState({
    'Introduction to the System': 0,
    'Advanced Features and Customization': 0,
    'Security Essentials': 0,
    'Regulatory Compliance': 0,
    'Effective Team Collaboration': 0,
    'Exceptional Customer Service': 0,
    'In-Depth Product Knowledge': 0,
    'System Maintenance Best Practices': 0,
  });

  // Example data for training materials
  const trainingMaterials = [
    { title: 'Introduction to the System', category: 'Basics', program: 'Onboarding Program', content: 'Introductory content about the system...', url: '#' },
    { title: 'Advanced Features and Customization', category: 'Advanced', program: 'Advanced Usage Program', content: 'Advanced content on features and customization...', url: '#' },
    { title: 'Security Essentials', category: 'Security', program: 'Security Awareness Program', content: 'Content on security essentials and best practices...', url: '#' },
    { title: 'Regulatory Compliance', category: 'Compliance', program: 'Compliance Training Program', content: 'Content on regulatory compliance and legal standards...', url: '#' },
    { title: 'Effective Team Collaboration', category: 'Team', program: 'Collaboration Skills Program', content: 'Content on effective team collaboration strategies...', url: '#' },
    { title: 'Exceptional Customer Service', category: 'Customer Service', program: 'Customer Service Excellence Program', content: 'Content on delivering exceptional customer service...', url: '#' },
    { title: 'In-Depth Product Knowledge', category: 'Product', program: 'Product Mastery Program', content: 'Detailed content on product features and benefits...', url: '#' },
    { title: 'System Maintenance Best Practices', category: 'Maintenance', program: 'Maintenance Procedures Program', content: 'Content on best practices for system maintenance...', url: '#' },
  ];

  // Features
  const features = [
    'Search functionality',
    'Category filtering',
    'Program filtering',
    'Progress tracking',
    'Feedback form',
    'Downloadable content',
    'Detailed view with descriptions',
    'Interactive progress bars',
    'Personalized training suggestions'
  ];

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const contentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    textAlign: 'left',
    width: '100%',
    maxWidth: '800px',
  };

  const searchStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '10px',
  };

  const selectStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
    maxWidth: '250px',
  };

  const sectionStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
  };

  const downloadButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
  };

  const downloadButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const progressBarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const progressBarStyle = {
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    flexGrow: 1,
    marginLeft: '10px',
  };

  const progressFillStyle = (percentage) => ({
    width: `${percentage}%`,
    height: '100%',
    borderRadius: '5px',
    backgroundColor: '#007bff',
  });

  const feedbackFormStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
  };

  const feedbackButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const feedbackButtonHoverStyle = {
    backgroundColor: '#218838',
  };

  const featureListStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    marginBottom: '20px',
  };

  // Handlers
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleProgramChange = (e) => {
    setSelectedProgram(e.target.value);
  };

  const handleProgressChange = (title, value) => {
    setProgress(prev => ({ ...prev, [title]: value }));
  };

  return (
    <div style={containerStyle}>
      <div>
        <QuizGame/>
      </div>
      <h2 style={titleStyle}>Training</h2>
      <div style={contentStyle}>
        <input
          type="text"
          placeholder="Search training materials"
          value={searchTerm}
          onChange={handleSearch}
          style={searchStyle}
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={selectStyle}
        >
          <option value="">All Categories</option>
          <option value="Basics">Basics</option>
          <option value="Advanced">Advanced</option>
          <option value="Security">Security</option>
          <option value="Compliance">Compliance</option>
          <option value="Team">Team</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Product">Product</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <select
          value={selectedProgram}
          onChange={handleProgramChange}
          style={selectStyle}
        >
          <option value="">All Programs</option>
          <option value="Onboarding Program">Onboarding Program</option>
          <option value="Advanced Usage Program">Advanced Usage Program</option>
          <option value="Security Awareness Program">Security Awareness Program</option>
          <option value="Compliance Training Program">Compliance Training Program</option>
          <option value="Collaboration Skills Program">Collaboration Skills Program</option>
          <option value="Customer Service Excellence Program">Customer Service Excellence Program</option>
          <option value="Product Mastery Program">Product Mastery Program</option>
          <option value="Maintenance Procedures Program">Maintenance Procedures Program</option>
        </select>

        {trainingMaterials
          .filter(material =>
            (selectedCategory === '' || material.category === selectedCategory) &&
            (selectedProgram === '' || material.program === selectedProgram) &&
            (material.title.toLowerCase().includes(searchTerm.toLowerCase()))
          )
          .map((material, index) => (
            <div key={index} style={sectionStyle}>
              <h3>{material.title}</h3>
              <p>{material.content}</p>
              <a href={material.url} style={downloadButtonStyle} download
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = downloadButtonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = downloadButtonStyle.backgroundColor)}
              >
                Download
              </a>
              <div style={progressBarContainerStyle}>
                <span>Progress:</span>
                <div style={progressBarStyle}>
                  <div style={progressFillStyle(progress[material.title] || 0)}></div>
                </div>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={progress[material.title] || 0}
                  onChange={(e) => handleProgressChange(material.title, e.target.value)}
                  style={{ marginLeft: '10px', width: '60px' }}
                />
              </div>
            </div>
          ))}
        <div style={feedbackFormStyle}>
          <h4>Feedback</h4>
          <form>
            <textarea placeholder="Enter your feedback here..." rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', marginBottom: '10px' }}></textarea>
            <button
              type="submit"
              style={feedbackButtonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = feedbackButtonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = feedbackButtonStyle.backgroundColor)}
            >
              Submit Feedback
            </button>
          </form>
        </div>
        <h3>Features:</h3>
        <ul style={featureListStyle}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Training;
