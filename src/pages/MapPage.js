



import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

// Sample data for incidents
const incidentMarkers = [
  { lat: 22.3039, lng: 73.1812, incident: 'Fire' },
  { lat: 22.3070, lng: 73.1830, incident: 'Flood' },
  { lat: 22.3060, lng: 73.1880, incident: 'Accident' },
  { lat: 22.3090, lng: 73.1800, incident: 'Fire' },
  { lat: 22.3120, lng: 73.1820, incident: 'Flood' },
  { lat: 22.3100, lng: 73.1900, incident: 'Accident' },
  { lat: 22.3050, lng: 73.1760, incident: 'Fire' },
  { lat: 22.3000, lng: 73.1700, incident: 'Flood' },
];

// Sample data for heatmap
const heatmapData = [
  [22.3100, 73.1750, 0.8],
  [22.3200, 73.1800, 0.9],
  // Additional heatmap data...
];

// Sample data for emergency shelters
const shelterMarkers = [
  { lat: 22.3070, lng: 73.1850, name: 'Shelter A' },
  { lat: 22.3100, lng: 73.1800, name: 'Shelter B' },
  { lat: 22.3050, lng: 73.1700, name: 'Shelter C' },
  { lat: 22.3150, lng: 73.1850, name: 'Shelter D' },
];

// Sample data for medical facilities
const medicalMarkers = [
  { lat: 22.3024, lng: 73.1812, name: 'Hospital X' },
  { lat: 22.3075, lng: 73.1830, name: 'Clinic Y' },
  { lat: 22.3150, lng: 73.1850, name: 'Hospital Z' },
  { lat: 22.3100, lng: 73.1800, name: 'Clinic A' },
];

// Sample data for resource points
const resourceMarkers = [
  { lat: 22.3080, lng: 73.1850, name: 'Food Bank' },
  { lat: 22.3100, lng: 73.1820, name: 'Donation Center' },
  { lat: 22.3050, lng: 73.1700, name: 'Resource Center' },
  { lat: 22.3120, lng: 73.1880, name: 'Supply Hub' },
];

const MapPage = () => {
    const mapRef = useRef(null); // Ref to hold the map instance
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        if (mapRef.current) return; // Skip map initialization if already done

        const map = L.map('map').setView([22.3006, 73.1812], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add heatmap layer
        L.heatLayer(heatmapData, { radius: 25, blur: 15, maxZoom: 17 }).addTo(map);

        // Add incident markers with custom icons
        incidentMarkers.forEach(incident => {
            L.marker([incident.lat, incident.lng], { 
                icon: L.divIcon({ 
                    className: 'incident-icon', 
                    html: `<div style="background-color: red; color: white; padding: 5px; border-radius: 50%;">${incident.incident}</div>`, 
                    iconSize: [30, 30] 
                }) 
            }).addTo(map)
                .bindPopup(`Incident: ${incident.incident}`)
                .on('click', () => setSelectedMarker(`Incident: ${incident.incident}`));
        });

        // Add shelter markers
        shelterMarkers.forEach(shelter => {
            L.marker([shelter.lat, shelter.lng], {
                icon: L.divIcon({
                    className: 'shelter-icon',
                    html: `<div style="background-color: blue; color: white; padding: 5px; border-radius: 50%;">${shelter.name}</div>`,
                    iconSize: [30, 30]
                })
            }).addTo(map)
                .bindPopup(`Shelter: ${shelter.name}`)
                .on('click', () => setSelectedMarker(`Shelter: ${shelter.name}`));
        });

        // Add medical facility markers
        medicalMarkers.forEach(medical => {
            L.marker([medical.lat, medical.lng], {
                icon: L.divIcon({
                    className: 'medical-icon',
                    html: `<div style="background-color: green; color: white; padding: 5px; border-radius: 50%;">${medical.name}</div>`,
                    iconSize: [30, 30]
                })
            }).addTo(map)
                .bindPopup(`Medical Facility: ${medical.name}`)
                .on('click', () => setSelectedMarker(`Medical Facility: ${medical.name}`));
        });

        // Add resource point markers
        resourceMarkers.forEach(resource => {
            L.marker([resource.lat, resource.lng], {
                icon: L.divIcon({
                    className: 'resource-icon',
                    html: `<div style="background-color: orange; color: white; padding: 5px; border-radius: 50%;">${resource.name}</div>`,
                    iconSize: [30, 30]
                })
            }).addTo(map)
                .bindPopup(`Resource Point: ${resource.name}`)
                .on('click', () => setSelectedMarker(`Resource Point: ${resource.name}`));
        });

        mapRef.current = map; // Set the mapRef to the initialized map
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Disaster Response Map</h1>
            <div id="map" style={styles.map}></div>
            <div style={styles.infoPanel}>
                <h2 style={styles.infoTitle}>Selected Marker Information</h2>
                <p style={styles.infoText}>{selectedMarker ? selectedMarker : 'Click on a marker to see details'}</p>
            </div>
            <div style={styles.additionalInfo}>
                <h2 style={styles.additionalTitle}>Emergency Resources</h2>
                <ul style={styles.infoList}>
                    <li style={styles.infoItem}>Fire Stations: Available to respond to fire incidents.</li>
                    <li style={styles.infoItem}>Shelters: Safe locations for emergency accommodation.</li>
                    <li style={styles.infoItem}>Medical Facilities: Hospitals and clinics for urgent medical needs.</li>
                    <li style={styles.infoItem}>Resource Centers: Places to access emergency supplies and food.</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    map: {
        height: '400px',
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    infoPanel: {
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)', // Gradient background
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  },
  infoTitle: {
      margin: '0 0 10px',
      fontSize: '20px',
      fontWeight: 'bold', // Bold title for emphasis
      color: '#007BFF', // Accent color for the title
  },
  infoText: {
      margin: '0',
      fontSize: '16px',
      color: '#333', // Darker text color for better readability
  },
  additionalInfo: {
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)', // Gradient background
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  },
  additionalTitle: {
      margin: '0 0 10px',
      fontSize: '20px',
      fontWeight: 'bold', // Bold title for emphasis
      color: '#007BFF', // Accent color for the title
  },
  infoList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
      color: '#555', // Slightly lighter text for list items
  },
  infoItem: {
      marginBottom: '8px',
      fontSize: '16px',
  },
};

export default MapPage;
