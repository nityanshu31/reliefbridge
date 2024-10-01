import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const PoliceService = ({ onBack }) => {
    const [status, setStatus] = useState("Available");
    const [incidentReport, setIncidentReport] = useState("");
    const [location, setLocation] = useState(null);
    const [feedback, setFeedback] = useState("");
    const mapRef = useRef(null);

    // Dummy incident data
    const incidentHistory = [
        "Robbery reported on 5th Ave.",
        "Vandalism near Main St.",
        "Suspicious activity at Central Park."
    ];

    // Function to simulate getting user location
    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        });
    };

    // Function to submit an incident report
    const handleReportSubmit = () => {
        alert(`Incident reported: ${incidentReport}`);
        setIncidentReport("");
    };

    // Function to submit feedback
    const handleFeedbackSubmit = () => {
        alert(`Feedback received: ${feedback}`);
        setFeedback("");
    };

    // Map setup similar to MapPage
    useEffect(() => {
        if (mapRef.current) return; // Skip map initialization if already done

        const map = L.map('map').setView([22.3006, 73.1812], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add dummy police stations as markers
        const policeStations = [
            { lat: 22.3070, lng: 73.1850, name: 'Police Station A' },
            { lat: 22.3100, lng: 73.1800, name: 'Police Station B' },
            { lat: 22.3050, lng: 73.1700, name: 'Police Station C' },
        ];

        policeStations.forEach(station => {
            L.marker([station.lat, station.lng], {
                icon: L.divIcon({
                    className: 'station-icon',
                    html: `<div style="background-color: blue; color: white; padding: 5px; border-radius: 50%;">${station.name}</div>`,
                    iconSize: [30, 30]
                })
            }).addTo(map).bindPopup(`Police Station: ${station.name}`);
        });

        mapRef.current = map; // Save map instance
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Police Service</h1>
            <p style={styles.description}>The police are here to help with law enforcement and public safety.</p>

            <button style={styles.button} onClick={() => alert("Calling 911...")}>Call Police</button>
            <button style={styles.button} onClick={() => alert("Emailing police...")}>Email Police</button>

            <h3 style={styles.subHeader}>Service Status: {status}</h3>

            <h3 style={styles.subHeader}>Nearby Police Stations</h3>
            {/* Map for nearby police stations */}
            <div id="map" style={styles.map}></div>

            <h3 style={styles.subHeader}>Report an Incident</h3>
            <textarea
                style={styles.textarea}
                value={incidentReport}
                onChange={(e) => setIncidentReport(e.target.value)}
                placeholder="Describe the incident..."
            ></textarea>
            <button style={styles.button} onClick={handleReportSubmit}>Submit Incident Report</button>

            <h3 style={styles.subHeader}>Feedback</h3>
            <textarea
                style={styles.textarea}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Provide your feedback..."
            ></textarea>
            <button style={styles.button} onClick={handleFeedbackSubmit}>Submit Feedback</button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    header: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        marginBottom: '20px',
    },
    button: {
        margin: '10px',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    subHeader: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    map: {
        height: '300px',
        width: '100%',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    textarea: {
        width: '100%',
        height: '100px',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
};

export default PoliceService;
