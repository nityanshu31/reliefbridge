import React, { useState } from 'react';

const AmbulanceService = ({ onBack }) => {
    const [status, setStatus] = useState("On-Duty");
    const [incidentReport, setIncidentReport] = useState("");
    const [feedback, setFeedback] = useState("");
    const incidentHistory = ["Heart attack patient pickup", "Accident victim transported", "Emergency delivery"];

    const handleReportSubmit = () => {
        alert(`Medical emergency reported: ${incidentReport}`);
        setIncidentReport("");
    };

    const handleFeedbackSubmit = () => {
        alert(`Feedback: ${feedback}`);
        setFeedback("");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Ambulance Service</h1>
            <p style={styles.description}>Ambulance service for immediate medical emergencies.</p>
            <button style={styles.button} onClick={() => alert("Calling ambulance...")}>Call Ambulance</button>
            <button style={styles.button} onClick={() => alert("Emailing ambulance service...")}>Email Ambulance Service</button>

            <h3 style={styles.subHeader}>Service Status: {status}</h3>
            <h3 style={styles.subHeader}>Nearby Hospitals</h3>
            <div style={styles.mapPlaceholder}>Map of nearby hospitals</div>

            <h3 style={styles.subHeader}>Report a Medical Emergency</h3>
            <textarea value={incidentReport} onChange={(e) => setIncidentReport(e.target.value)} style={styles.textarea} placeholder="Describe the incident..." />
            <button style={styles.button} onClick={handleReportSubmit}>Submit Report</button>

            <h3 style={styles.subHeader}>Incident History</h3>
            <ul>{incidentHistory.map((incident, index) => (<li key={index} style={styles.listItem}>{incident}</li>))}</ul>

            <h3 style={styles.subHeader}>Provide Feedback</h3>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} style={styles.textarea} placeholder="Your feedback..." />
            <button style={styles.button} onClick={handleFeedbackSubmit}>Submit Feedback</button>

            <button style={styles.backButton} onClick={onBack}>Back</button>
        </div>
    );
};

const styles = {
    container: { padding: "20px", background: "#f9f9f9", borderRadius: "10px" },
    header: { fontSize: "24px", color: "#5bc0de" },
    description: { fontSize: "16px" },
    button: { margin: "10px", padding: "10px 15px", background: "#5bc0de", color: "white", borderRadius: "5px" },
    subHeader: { fontSize: "20px", margin: "20px 0" },
    mapPlaceholder: { background: "#eee", height: "200px", textAlign: "center", lineHeight: "200px", color: "#aaa" },
    textarea: { width: "100%", height: "100px", marginBottom: "10px", padding: "10px" },
    listItem: { marginBottom: "10px" },
    backButton: { marginTop: "20px", padding: "10px 20px", background: "#f44336", color: "white", borderRadius: "5px" }
};

export default AmbulanceService;