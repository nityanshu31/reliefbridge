import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../components/Navbar';
const EmergencySOS = () => {
    const [messageVisible, setMessageVisible] = useState(false); // State to manage message visibility
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSOS = () => {
        // Handle SOS alert submission logic here
        console.log('SOS Alert Triggered');

        // Show the success message
        setMessageVisible(true);

        // Optionally navigate to a different page or show a success message
        setTimeout(() => {
            navigate('/userhome'); // Redirect to home page or any other page after SOS alert
        }, 3000); // Redirect after 3 seconds
    };

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f2f2f2',
            textAlign: 'center',
            position: 'relative',
        },
        button: {
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '20px 40px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            margin: '10px',
        },
        buttonHover: {
            backgroundColor: '#c82333',
            transform: 'scale(1.05)',
        },
        backButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            margin: '10px',
        },
        backButtonHover: {
            backgroundColor: '#0056b3',
            transform: 'scale(1.05)',
        },
        message: {
            display: messageVisible ? 'block' : 'none',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontSize: '18px',
            fontWeight: 'bold',
        },
    };

    return (
        <div>
            <Navbar/>
        <div style={styles.container}>
            <div style={styles.message}>SOS Alert Sent Successfully!</div>
            <button
                onClick={handleSOS}
                style={styles.button}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
                Emergency SOS
            </button>
            <button
                onClick={handleBack}
                style={styles.backButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor}
            >
                Back
            </button>
        </div>
        <footer style={{ padding: '20px', background: '#003366', color: '#FFFFFF', textAlign: 'center' }}>
        <p>&copy; 2024 Emergency Coordination Platform. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@emergencycoordination.com" style={{ color: '#FFEB3B' }}>info@emergencycoordination.com</a></p>
      </footer>
        </div>
        
    );
};

export default EmergencySOS;
