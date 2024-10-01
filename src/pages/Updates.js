import React, { useState } from 'react';
import Modal from 'react-modal';

// Ensure that the modal root is set up
Modal.setAppElement('#root');

const Updates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const updatesData = [
    {
      title: 'New Feature Release',
      date: '2024-09-01',
      category: 'Feature',
      content: 'We have released a new feature that allows you to...',
      details: 'The new feature includes a comprehensive set of tools to enhance your productivity. It integrates seamlessly with existing functionalities and provides real-time analytics. The feature is designed with user feedback in mind, focusing on improving ease of use and performance. Full documentation and tutorials are available on our website to help you get started quickly.'
    },
    {
      title: 'Security Patch Update',
      date: '2024-08-15',
      category: 'Security',
      content: 'A new security patch has been applied to fix vulnerabilities...',
      details: 'This security patch addresses critical vulnerabilities that could potentially impact the integrity of your data. The update includes enhanced encryption protocols and fixes for several identified security loopholes. We strongly recommend applying this patch to ensure that your system remains secure against emerging threats. For detailed information on the changes, please refer to the security bulletin provided in the update notes.'
    },
    {
      title: 'Performance Improvement',
      date: '2024-08-10',
      category: 'Performance',
      content: 'We have improved the system performance by optimizing...',
      details: 'Our latest update brings significant performance improvements, including optimized database queries and reduced load times for key features. These enhancements aim to provide a smoother and more responsive user experience. Benchmarks show an average increase in performance of 30%, which should be noticeable in day-to-day operations. Detailed performance metrics and optimization strategies are documented in the release notes.'
    },
    {
      title: 'Bug Fixes',
      date: '2024-08-05',
      category: 'Bug Fix',
      content: 'Several bugs have been fixed in the latest update...',
      details: 'This update includes fixes for several bugs reported by users. The issues addressed range from minor UI glitches to critical functionality problems. We have conducted extensive testing to ensure that these fixes improve overall stability and reliability. A comprehensive list of resolved issues and their solutions is available in the bug fix log included with the update.'
    },
    {
      title: 'User Interface Enhancements',
      date: '2024-07-30',
      category: 'UI',
      content: 'The user interface has been enhanced with new features...',
      details: 'The user interface enhancements introduce a more intuitive and visually appealing design. Changes include updated navigation menus, improved accessibility options, and new customization features. These updates are aimed at making the application more user-friendly and adaptable to different workflows. Detailed screenshots and user guides are provided to help you navigate the new interface changes.'
    },
    {
      title: 'Regulatory Compliance Update',
      date: '2024-07-25',
      category: 'Compliance',
      content: 'Updates to ensure compliance with new regulations...',
      details: 'We have updated our system to comply with the latest regulatory requirements. This includes changes to data handling practices, enhanced privacy controls, and new reporting features. These updates ensure that our platform remains compliant with industry standards and legal obligations. For a detailed overview of the compliance changes, please review the compliance report included in the update documentation.'
    },
    {
      title: 'System Maintenance',
      date: '2024-07-20',
      category: 'Maintenance',
      content: 'Scheduled maintenance has been completed...',
      details: 'The scheduled maintenance was carried out to enhance system performance and apply necessary updates. The maintenance window was utilized to perform critical updates, optimize server configurations, and address any underlying issues. System downtime was minimized to reduce impact on users. Detailed maintenance logs and a summary of the improvements made are available in the maintenance report.'
    },
    {
      title: 'New API Integration',
      date: '2024-07-15',
      category: 'Integration',
      content: 'We have integrated new APIs for better functionality...',
      details: 'The integration of new APIs expands the functionality of our platform and provides additional capabilities for developers. The APIs offer improved data access, enhanced connectivity with third-party services, and new features for application integration. Detailed API documentation, including usage examples and integration guidelines, is available in the developer portal.'
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const openModal = (update) => {
    setSelectedUpdate(update);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUpdate(null);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Updates</h2>
      <div style={contentStyle}>
        <input
          type="text"
          placeholder="Search updates"
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
          <option value="Feature">Feature</option>
          <option value="Security">Security</option>
          <option value="Performance">Performance</option>
          <option value="Bug Fix">Bug Fix</option>
          <option value="UI">UI</option>
          <option value="Compliance">Compliance</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Integration">Integration</option>
        </select>

        <ul style={updateListStyle}>
          {updatesData
            .filter(update =>
              (selectedCategory === '' || update.category === selectedCategory) &&
              (update.title.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            .map((update, index) => (
              <li key={index} style={updateItemStyle}>
                <h3 style={updateTitleStyle}>{update.title}</h3>
                <p style={updateDateStyle}>{update.date}</p>
                <p style={updateContentStyle}>{update.content}</p>
                <button
                  style={buttonStyle}
                  onClick={() => openModal(update)}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                >
                  Read More
                </button>
              </li>
            ))}
        </ul>
      </div>

      {selectedUpdate && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Update Details"
          style={modalStyle}
        >
          <h2>{selectedUpdate.title}</h2>
          <p><strong>Date:</strong> {selectedUpdate.date}</p>
          <p><strong>Category:</strong> {selectedUpdate.category}</p>
          <p>{selectedUpdate.details}</p>
          <button
            onClick={closeModal}
            style={closeButtonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = closeButtonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = closeButtonStyle.backgroundColor)}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f4',
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

const updateListStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
  maxWidth: '800px',
};

const updateItemStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  marginBottom: '10px',
};

const updateTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
  color: '#333',
};

const updateDateStyle = {
  fontSize: '14px',
  color: '#888',
  margin: '0 0 10px 0',
};

const updateContentStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const modalStyle = {
  content: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

const closeButtonStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

const closeButtonHoverStyle = {
  backgroundColor: '#c82333',
};

export default Updates;
