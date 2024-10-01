import React, { useState } from 'react';

const DisasterService = ({ onBack }) => {
    const [status, setStatus] = useState("Monitoring");
    const [incidentReport, setIncidentReport] = useState("");
    const [feedback, setFeedback] = useState("");
    const incidentHistory = ["Tornado warning", "Flood in Riverside", "Earthquake tremors reported"];

    const handleReportSubmit = () => {
        alert(`Disaster reported: ${incidentReport}`);
        setIncidentReport("");
    };

    const handleFeedbackSubmit = () => {
        alert(`Feedback: ${feedback}`);
        setFeedback("");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Disaster Service</h1>
            <p style={styles.description}>Stay updated with disaster alerts and report emergencies.</p>
            <button style={styles.button} onClick={() => alert("Calling disaster management...")}>Call Disaster Management</button>
            <button style={styles.button} onClick={() => alert("Emailing disaster management...")}>Email Disaster Management</button>

            <h3 style={styles.subHeader}>Service Status: {status}</h3>
            <h3 style={styles.subHeader}>Nearby Shelters</h3>
            <div style={styles.mapPlaceholder}>Map of nearby shelters</div>

            <h3 style={styles.subHeader}>Report a Disaster</h3>
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
    header: { fontSize: "24px", color: "#ff9900" },
    description: { fontSize: "16px" },
    button: { margin: "10px", padding: "10px 15px", background: "#ff9900", color: "white", borderRadius: "5px" },
    subHeader: { fontSize: "20px", margin: "20px 0" },
    mapPlaceholder: { background: "#eee", height: "200px", textAlign: "center", lineHeight: "200px", color: "#aaa" },
    textarea: { width: "100%", height: "100px", marginBottom: "10px", padding: "10px" },
    listItem: { marginBottom: "10px" },
    backButton: { marginTop: "20px", padding: "10px 20px", background: "#f44336", color: "white", borderRadius: "5px" }
};

export default DisasterService;
