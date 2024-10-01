import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const FinancialServices = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            position: 'relative', // To ensure the overlay is positioned correctly
        },

        backgroundOverlay: {
            content: "''",
            backgroundImage: 'url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg3MC1teW50LTIwXzFfMi5qcGc.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            opacity: '0.2',
            zIndex: '1',
        },

        header: {
            fontSize: '30px',
            marginBottom: '20px',
            zIndex: '1', // Ensures this is above the overlay
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            zIndex: '1', // Ensures this is above the overlay
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0.2, 0.2, 0.1, 0.5)',
            margin: '10px',
            width: '300px',
            height: '300px',
            textAlign: 'center',
            fontSize: '20px',
            transition: 'transform 0.2s',
            zIndex: '1', // Ensures this is above the overlay
        },
        cardHover: {
            transform: 'scale(1.05)',
        },
        cardImage: {
            width: '200px', 
            height: '200px', 
            objectFit: 'cover',
            marginBottom: '10px',
        },
        backButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '20px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
            zIndex: '1', // Ensures this is above the overlay
        },
        backButtonHover: {
            backgroundColor: '#0056b3',
        },
    };


    return (
        <div>
            <Navbar />
            <div style={styles.container}>
            <div style={styles.backgroundOverlay}></div>
                <h2 style={styles.header}>Financial Services</h2>
                <div style={styles.cardContainer}>
                <Link to="/loans" style={{ textDecoration: 'none' }}>
    <div
        style={styles.card}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
        <img src="/icons/loans.png" alt="Loans" style={styles.cardImage} />
        <p>Loans</p>
    </div>
</Link>
                    <Link to="/finance-service" style={{ textDecoration: 'none' }}>
    <div
      style={styles.card}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src="/icons/insurance.png" alt="Insurance" style={styles.cardImage} />
      <p>Insurance</p>
    </div>
  </Link>
  <Link to="/financial-aid" style={styles.cardLink}>
    <div
        style={styles.card}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
        <img src="/icons/grants.png" alt="Grants" style={styles.cardImage} />
        <p>Financial Aid</p>
    </div>
</Link>
                    
                </div>
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

export default FinancialServices;
