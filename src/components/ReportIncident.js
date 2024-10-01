import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Navbar from '../components/Navbar';


const ReportIncident = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [location, setLocation] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Incident Reported:', { category, description, file, location });
        // Here you would typically send the data to your server
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '5px',
            display: 'block',
        },
        select: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        fileInput: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        submitButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        submitButtonHover: {
            backgroundColor: '#0056b3',
        },
        backButton: {
            backgroundColor: '#6c757d',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px',
        },
        backButtonHover: {
            backgroundColor: '#5a6268',
        },
    };

    return (
        <div >
            <Navbar/>
        <div style={styles.container}>
            
            <button
                onClick={handleBack}
                style={styles.backButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor}
            >
                Back
            </button>
            <h2>Report an Incident</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="category" style={styles.label}>Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        style={styles.select}
                    >
                        <option value="">Select a category</option>
                        <option value="fire">Fire</option>
                        <option value="flood">Flood</option>
                        <option value="earthquake">Earthquake</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="location" style={styles.label}>Location</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        style={styles.select}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="description" style={styles.label}>Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows="4"
                        style={styles.textarea}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="file" style={styles.label}>Attach File (optional)</label>
                    <input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        style={styles.fileInput}
                    />
                </div>
                <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor}
                >
                    Submit
                </button>
            </form>
        </div>
        <footer style={{ padding: '20px', background: '#003366', color: '#FFFFFF', textAlign: 'center' }}>
        <p>&copy; 2024 Emergency Coordination Platform. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@emergencycoordination.com" style={{ color: '#FFEB3B' }}>info@emergencycoordination.com</a></p>
      </footer>
        </div>
    );
};

export default ReportIncident;
