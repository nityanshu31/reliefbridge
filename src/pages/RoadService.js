import React, { useState } from 'react';

const RoadService = ({ onBack }) => {
    const [status, setStatus] = useState("Active");
    const [incidentReport, setIncidentReport] = useState("");
    const [feedback, setFeedback] = useState("");
    const incidentHistory = ["Vehicle breakdown at Exit 4", "Accident reported at Highway 10", "Traffic congestion on Main St."];

    const handleReportSubmit = () => {
        alert(`Road incident reported: ${incidentReport}`);
        setIncidentReport("");
    };

    const handleFeedbackSubmit = () => {
        alert(`Feedback: ${feedback}`);
        setFeedback("");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Road Service</h1>
            <p style={styles.description}>Road assistance and emergency services for vehicle breakdowns.</p>
            <button style={styles.button} onClick={() => alert("Calling road service...")}>Call Road Service</button>
            <button style={styles.button} onClick={() => alert("Emailing road service...")}>Email Road Service</button>

            <h3 style={styles.subHeader}>Service Status: {status}</h3>
            <h3 style={styles.subHeader}>Nearby Service Stations</h3>
            <div style={styles.mapPlaceholder}>Map of nearby service stations</div>

            <h3 style={styles.subHeader}>Report an Incident</h3>
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
    header: { fontSize: "24px", color: "#ff6600" },
    description: { fontSize: "16px" },
    button: { margin: "10px", padding: "10px 15px", background: "#ff6600", color: "white", borderRadius: "5px" },
    subHeader: { fontSize: "20px", margin: "20px 0" },
    mapPlaceholder: { background: "#eee", height: "200px", textAlign: "center", lineHeight: "200px", color: "#aaa" },
    textarea: { width: "100%", height: "100px", marginBottom: "10px", padding: "10px" },
    listItem: { marginBottom: "10px" },
    backButton: { marginTop: "20px", padding: "10px 20px", background: "#f44336", color: "white", borderRadius: "5px" }
};

export default RoadService;
