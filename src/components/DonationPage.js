import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../components/Navbar';

const DonationPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [donationType, setDonationType] = useState('money');
    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleDonate = (e) => {
        e.preventDefault();
        // Handle donation logic here
        console.log(`Donation Type: ${donationType}, Amount: ${amount}, Details: ${details}`);
        // Redirect or show a confirmation message
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f9f9f9',
            padding: '20px',
        },
        header: {
            fontSize: '40px',
            marginBottom: '20px',
        },
        description: {
            fontSize: '18px',
            marginBottom: '20px',
            textAlign: 'center',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '500px',
            marginBottom: '20px',
        },
        input: {
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
        },
        select: {
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
        },
        submitButton: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
        },
        submitButtonHover: {
            backgroundColor: '#218838',
        },
        backButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
        },
        backButtonHover: {
            backgroundColor: '#0056b3',
        },
        headerImage: {
            width: '100%',
            height: '400px',
            
            marginBottom: '20px',
        },
        testimonial: {
            backgroundColor: '#e2e2e2',
            padding: '15px',
            borderRadius: '8px',
            margin: '20px 0',
            width: '100%',
            maxWidth: '500px',
            textAlign: 'center',
        },
        socialButtons: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
        },
        socialButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            margin: '0 5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
        },
        socialButtonHover: {
            backgroundColor: '#0056b3',
        },
       
    };

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <img src="/icons/donations.jpg" alt="Donation Header" style={styles.headerImage} />
                <h2 style={styles.header}>Make a Donation</h2>
                <p style={styles.description}>
                    Your contributions can make a significant difference during emergencies. Please select the type of donation and provide details.
                </p>
                <form style={styles.form} onSubmit={handleDonate}>
                    <select
                        value={donationType}
                        onChange={(e) => setDonationType(e.target.value)}
                        style={styles.select}
                    >
                        <option value="money">Money</option>
                        <option value="clothes">Clothes</option>
                        <option value="food">Food</option>
                        <option value="medical">Medical Supplies</option>
                        <option value="other">Other</option>
                    </select>
                    {donationType === 'money' && (
                        <input
                            type="number"
                            placeholder="Donation Amount"
                            min="1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            style={styles.input}
                            required
                        />
                    )}
                    {(donationType === 'clothes' || donationType === 'food' || donationType === 'medical' || donationType === 'other') && (
                        <textarea
                            placeholder="Additional Details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            style={styles.input}
                        />
                    )}
                    <button
                        type="submit"
                        style={styles.submitButton}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor}
                    >
                        Donate
                    </button>
                </form>
                <button
                    onClick={handleBack}
                    style={styles.backButton}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor}
                >
                    Back
                </button>
                
                <div style={styles.testimonial}>
                    <p>"Donations have saved countless lives during past emergencies. Your support is crucial!" - Past Recipient</p>
                </div>
                <div style={styles.socialButtons}>
                    <button
                        style={styles.socialButton}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.socialButtonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.socialButton.backgroundColor}
                    >
                        Share on Facebook
                    </button>
                    <button
                        style={styles.socialButton}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.socialButtonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.socialButton.backgroundColor}
                    >
                        Share on Twitter
                    </button>
                </div>
            </div>
            <footer style={{ padding: '20px', background: '#003366', color: '#FFFFFF', textAlign: 'center' }}>
                <p>&copy; 2024 Emergency Coordination Platform. All rights reserved.</p>
                <p>Contact us at <a href="mailto:info@emergencycoordination.com" style={{ color: '#FFEB3B' }}>info@emergencycoordination.com</a></p>
            </footer>
        </div>
    );
};

export default DonationPage;
