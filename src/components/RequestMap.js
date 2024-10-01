import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

// MapSection Component
const MapSection = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    overflow: "hidden",
    margin: "20px 0",
    border: "2px solid #4F6DFF", // Border added here
    borderRadius: "10px", // Rounded corners for the border
  };

  const mapStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={mapContainerStyle}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d4/World_map_political_map_%282018%29_with_pins.jpg"
        alt="World Map"
        style={mapStyle}
      />
    </div>
  );
};

// Popup Component with Form
const Popup = ({ onClose }) => {
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    width: "90%",
    maxWidth: "500px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const submitButtonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4F6DFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={popupStyle}>
        <h3>Request Help</h3>
        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} required />
          <input type="text" placeholder="Your Address" style={inputStyle} required />
          <input type="tel" placeholder="Contact Number" style={inputStyle} required />
          <select style={inputStyle} required>
            <option value="">Type of Help</option>
            <option value="medical">Medical</option>
            <option value="food">Food</option>
            <option value="shelter">Shelter</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
        <button onClick={onClose} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f00", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Close</button>
      </div>
    </>
  );
};

// MapInteraction Component
const MapInteraction = ({ volunteerPosition, users, selectedUserIndex, setRoutingControl }) => {
  const map = useMap();
  const userMarkersRef = useRef([]);

  useEffect(() => {
    if (volunteerPosition && map) {
      userMarkersRef.current.forEach((marker) => {
        map.removeLayer(marker);
      });
      userMarkersRef.current = [];

      const markers = users.map((user) => {
        const marker = L.marker([user.lat, user.lng], {
          icon: new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          }),
        }).bindPopup(user.name);

        marker.addTo(map);
        return marker;
      });

      userMarkersRef.current = markers;

      L.marker([volunteerPosition.lat, volunteerPosition.lng], {
        icon: new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      }).bindPopup('You are here (Volunteer)').addTo(map).openPopup();

      map.setView([volunteerPosition.lat, volunteerPosition.lng], 13);
    }
  }, [volunteerPosition, map, users]);

  useEffect(() => {
    if (selectedUserIndex !== null && volunteerPosition && map) {
      const user = users[selectedUserIndex];
      const control = L.Routing.control({
        waypoints: [
          L.latLng(volunteerPosition.lat, volunteerPosition.lng),
          L.latLng(user.lat, user.lng),
        ],
        routeWhileDragging: true,
        showAlternatives: true,
        altLineOptions: {
          styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'blue', opacity: 0.5, weight: 2 },
          ],
        },
      }).addTo(map);

      setRoutingControl(control);

      map.fitBounds([
        [volunteerPosition.lat, volunteerPosition.lng],
        [user.lat, user.lng],
      ], { padding: [50, 50] });
    }
  }, [selectedUserIndex, volunteerPosition, map, users, setRoutingControl]);

  return null;
};

// Main VolunteersHelp Component
const VolunteersHelp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [volunteerPosition, setVolunteerPosition] = useState(null);
  const [routingControl, setRoutingControl] = useState(null);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const users = [
    { name: 'User 1', lat: 22.3196, lng: 73.1553 },
    { name: 'User 2', lat: 22.3227, lng: 73.1879 },
    { name: 'User 3', lat: 22.3366, lng: 73.1851 },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setVolunteerPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please make sure location services are enabled.');
      }
    );
  }, []);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSelectChange = (event) => {
    setSelectedUserIndex(parseInt(event.target.value, 10));
  };

  const navigateToUser = () => {
    if (selectedUserIndex === null) {
      alert('Please select a user to navigate to.');
      return;
    }
  };

  const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    padding: "20px",
    
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4F6DFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  const selectStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "10px",
    width: "90%",
    maxWidth: "500px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Volunteer Help Center</h1>
      
      <MapContainer style={{ height: "300px", width: "100%" }} center={[22.3196, 73.1553]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {volunteerPosition && (
          <MapInteraction
            volunteerPosition={volunteerPosition}
            users={users}
            selectedUserIndex={selectedUserIndex}
            setRoutingControl={setRoutingControl}
          />
        )}
      </MapContainer>
      
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
      <div>
        <select onChange={handleSelectChange} style={selectStyle}>
          <option value="">Select a User to Help</option>
          {users.map((user, index) => (
            <option key={index} value={index}>{user.name}</option>
          ))}
        </select>
        <button style={buttonStyle} onClick={navigateToUser}>Navigate to User</button>
      </div>
      
    </div>
  );
};

export default VolunteersHelp;
