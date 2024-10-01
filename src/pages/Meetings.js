import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar CSS

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState('');
  const [meetingDetails, setMeetingDetails] = useState('');
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [notification, setNotification] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedDateMeetings, setSelectedDateMeetings] = useState([]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
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
    maxWidth: '900px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const meetingListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    maxWidth: '800px',
  };

  const meetingItemStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    cursor: 'pointer',
  };

  const meetingItemHoverStyle = {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  };

  // Corrected highlight style
  const highlight = {
    background: '#ff436c',
    color: 'white',
  };

  const editButtonStyle = {
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const deleteButtonStyle = {
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const notificationStyle = {
    color: '#007bff',
    marginBottom: '10px',
  };

  const handleAddMeeting = () => {
    if (newMeeting.trim() && meetingDetails.trim()) {
      const updatedMeetings = [...meetings, { title: newMeeting.trim(), details: meetingDetails.trim(), date }];
      setMeetings(updatedMeetings);
      setSelectedDateMeetings(updatedMeetings.filter(meeting => meeting.date.toDateString() === date.toDateString()));
      setNewMeeting('');
      setMeetingDetails('');
      setNotification('Meeting added successfully!');
    }
  };

  const handleEditMeeting = (index) => {
    setSelectedMeeting(index);
    setNewMeeting(meetings[index].title);
    setMeetingDetails(meetings[index].details);
    setEditMode(true);
  };

  const handleDeleteMeeting = (index) => {
    setMeetings(meetings.filter((_, i) => i !== index));
    setSelectedDateMeetings(meetings.filter((_, i) => i !== index).filter(meeting => meeting.date.toDateString() === date.toDateString()));
    setNotification('Meeting deleted successfully!');
  };

  const handleSaveEdit = () => {
    if (selectedMeeting !== null) {
      const updatedMeetings = meetings.map((meeting, index) =>
        index === selectedMeeting ? { title: newMeeting.trim(), details: meetingDetails.trim(), date } : meeting
      );
      setMeetings(updatedMeetings);
      setSelectedDateMeetings(updatedMeetings.filter(meeting => meeting.date.toDateString() === date.toDateString()));
      setNewMeeting('');
      setMeetingDetails('');
      setSelectedMeeting(null);
      setEditMode(false);
      setNotification('Meeting updated successfully!');
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setNewMeeting('');
    setMeetingDetails('');
    setSelectedMeeting(null);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDateMeetings(meetings.filter(meeting => meeting.date.toDateString() === newDate.toDateString()));
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Meetings</h2>
      {notification && <p style={notificationStyle}>{notification}</p>}
      <div style={formStyle}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={newMeeting}
          onChange={(e) => setNewMeeting(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Meeting Details"
          value={meetingDetails}
          onChange={(e) => setMeetingDetails(e.target.value)}
          style={{ ...inputStyle, height: '100px' }}
        />
        <button
          onClick={editMode ? handleSaveEdit : handleAddMeeting}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          {editMode ? 'Save Changes' : 'Add Meeting'}
        </button>
        {editMode && (
          <button
            onClick={handleCancelEdit}
            style={{ ...buttonStyle, backgroundColor: '#6c757d' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5a6268')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
          >
            Cancel
          </button>
        )}
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date, view }) => view === 'month' && meetings.some(meeting => new Date(meeting.date).toDateString() === date.toDateString()) ? 'highlight' : null}
        />
        <div style={{ flexGrow: 1 }}>
          <h3>Meetings on {date.toDateString()}</h3>
          <ul style={meetingListStyle}>
            {selectedDateMeetings.map((meeting, index) => (
              <li
                key={index}
                style={{ ...meetingItemStyle, ...(index === selectedMeeting ? meetingItemHoverStyle : {}) }}
                onClick={() => setSelectedMeeting(index === selectedMeeting ? null : index)}
              >
                <h4>{meeting.title}</h4>
                {index === selectedMeeting && (
                  <div>
                    <p>{meeting.details}</p>
                    <div style={buttonGroupStyle}>
                      <button onClick={() => handleEditMeeting(index)} style={editButtonStyle}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteMeeting(index)} style={deleteButtonStyle}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
