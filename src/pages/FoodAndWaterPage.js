import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icons for Leaflet
const foodIcon = new L.Icon({
  iconUrl: 'https://example.com/food-icon.png', // Replace with actual icon URL
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const waterIcon = new L.Icon({
  iconUrl: 'https://example.com/water-icon.png', // Replace with actual icon URL
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const FoodAndWaterPage = () => {
  const [centers, setCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [mapCenter, setMapCenter] = useState([22.3072, 73.1812]); // Vadodara coordinates

  useEffect(() => {
    // Example static data for Vadodara locations
    setCenters([
      {
        id: 1,
        name: 'Food Distribution Center 1',
        type: 'food',
        location: [22.3085, 73.1926],
        availability: 'Open',
      },
      {
        id: 2,
        name: 'Water Station Vadodara 1',
        type: 'water',
        location: [22.2993, 73.2003],
        availability: 'Limited Supply',
      },
      {
        id: 3,
        name: 'Food Distribution Center 2',
        type: 'food',
        location: [22.3056, 73.1806],
        availability: 'Closed',
      },
      {
        id: 4,
        name: 'Water Station Vadodara 2',
        type: 'water',
        location: [22.3178, 73.1646],
        availability: 'Open',
      },
    ]);
  }, []);

  const filteredCenters = centers.filter((center) => {
    return (
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === 'all' || center.type === selectedType)
    );
  });

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Food and Water Distribution Centers in Vadodara</h1>
      </header>

      {/* Search and Filter Section */}
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Search centers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <select
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
          style={styles.select}
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="water">Water</option>
        </select>
      </div>

      {/* Map Section */}
      <div style={styles.mapContainer}>
        <MapContainer center={mapCenter} zoom={12} style={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Markers for Centers */}
          {filteredCenters.map((center) => (
            <Marker
              key={center.id}
              position={center.location}
              icon={center.type === 'food' ? foodIcon : waterIcon}
            >
              <Popup>
                <strong>{center.name}</strong>
                <br />
                {center.availability}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Centers List */}
      <div style={styles.centersList}>
        {filteredCenters.map((center) => (
          <div key={center.id} style={styles.centerCard}>
            <h2 style={styles.centerName}>{center.name}</h2>
            <p>Type: {center.type === 'food' ? 'Food' : 'Water'}</p>
            <p>Availability: {center.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '48%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    width: '48%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  mapContainer: {
    height: '400px',
    marginBottom: '20px',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  centersList: {
    display: 'flex',
    flexDirection: 'column',
  },
  centerCard: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  centerName: {
    margin: '0 0 10px 0',
  },
};

export default FoodAndWaterPage;
