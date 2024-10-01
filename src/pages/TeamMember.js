import React, { useState } from 'react';

const TeamMember = () => {
  // State to manage team members and form inputs
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 5;

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '500px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  };

  const memberItemStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '15px',
  };

  const searchStyle = {
    width: '100%',
    maxWidth: '500px',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '20px',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
  };

  const paginationButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    margin: '0 5px',
  };

  const paginationDisabledStyle = {
    ...paginationButtonStyle,
    backgroundColor: '#d6d6d6',
    cursor: 'not-allowed',
  };

  // Handlers
  const handleAddMember = () => {
    if (newMemberName && newMemberRole && validateEmail(newMemberEmail)) {
      const newMember = {
        name: newMemberName,
        role: newMemberRole,
        email: newMemberEmail,
      };
      if (editIndex !== null) {
        const updatedMembers = teamMembers.map((member, index) =>
          index === editIndex ? newMember : member
        );
        setTeamMembers(updatedMembers);
        setEditIndex(null);
      } else {
        setTeamMembers([...teamMembers, newMember]);
      }
      resetForm();
    } else {
      alert('Please enter valid details.');
    }
  };

  const handleEditMember = (index) => {
    const member = teamMembers[index];
    setNewMemberName(member.name);
    setNewMemberRole(member.role);
    setNewMemberEmail(member.email);
    setEditIndex(index);
  };

  const handleDeleteMember = (index) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const resetForm = () => {
    setNewMemberName('');
    setNewMemberRole('');
    setNewMemberEmail('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handlePagination = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === 'prev') {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const filteredMembers = teamMembers
    .filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (sortBy === 'name' ? a.name.localeCompare(b.name) : a.role.localeCompare(b.role)));

  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * membersPerPage,
    currentPage * membersPerPage
  );

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Team Member</h2>
      <div style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Role"
          value={newMemberRole}
          onChange={(e) => setNewMemberRole(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={newMemberEmail}
          onChange={(e) => setNewMemberEmail(e.target.value)}
          style={inputStyle}
        />
        <button
          onClick={handleAddMember}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          {editIndex !== null ? 'Update Member' : 'Add Member'}
        </button>
      </div>
      <input
        type="text"
        placeholder="Search by name or role"
        value={searchTerm}
        onChange={handleSearch}
        style={searchStyle}
      />
      <select value={sortBy} onChange={handleSort} style={selectStyle}>
        <option value="name">Sort by Name</option>
        <option value="role">Sort by Role</option>
      </select>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {paginatedMembers.length === 0 ? (
          <p>No team members found</p>
        ) : (
          paginatedMembers.map((member, index) => (
            <div key={index} style={memberItemStyle}>
              <h4 style={{ margin: '0 0 10px 0' }}>{member.name}</h4>
              <p style={{ margin: '0 0 5px 0' }}>Role: {member.role}</p>
              <p style={{ margin: '0 0 15px 0' }}>Email: {member.email}</p>
              <div style={buttonGroupStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => handleEditMember(index)}
                >
                  Edit
                </button>
                <button
                  style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                  onClick={() => handleDeleteMember(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={() => handlePagination('prev')}
            disabled={currentPage === 1}
            style={currentPage === 1 ? paginationDisabledStyle : paginationButtonStyle}
          >
            Previous
          </button>
          <button
            onClick={() => handlePagination('next')}
            disabled={currentPage * membersPerPage >= filteredMembers.length}
            style={currentPage * membersPerPage >= filteredMembers.length ? paginationDisabledStyle : paginationButtonStyle}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
