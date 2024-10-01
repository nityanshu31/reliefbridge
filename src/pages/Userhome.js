import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoTerrain from '../images/Info_Terrain.gif';
import Fire from '../images/Fire.gif';
import NaturalDisaster from '../images/Natural-Disaster-Statistics.gif';

function Userhome() {
    const navigate = useNavigate();

    const handleSOSClick = () => {
        navigate('/sos');  // Navigate to the SOS page
    };

    const handleReportIncidentClick = () => {
        navigate('/report-incident');
    };

    const styles = {
        pageContainer: {
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            padding: '0',
            margin: '0',
            color: '#000000',
            overflow: 'hidden',
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
            zIndex: '-1',
        },
        contentContainer: {
            position: 'relative',
            zIndex: '1',
        },
        warningLine: {
            backgroundColor: 'yellow',
            color: 'black',
            padding: '10px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
        },
        animationSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
        },
        videoCarousel: {
            width: '100%',
            MaxWidth: '100%',
            margin: '0 auto 40px auto',
        },
        bigButtonContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '30px',
        },
        bigButton: {
            backgroundColor: '#ff5733',
            color: 'white',
            padding: '15px 30px',
            margin: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
        },
        bigButtonIcon: {
            width: '24px',
            height: '24px',
            marginRight: '8px',
        },
        exploreMoreContainer: {
            width: '100%',
            padding: '40px 0'
        },
        exploreMore: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '90%',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: '#f4f4f4',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '250px',
            height:'250px',
            margin: '10px',
            transition: 'transform 0.2s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardIcon: {
            width: '100px',
            height: '100px',
            marginBottom: '10px',
        },
        exploreMoreTitle: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
        },
        exploreMoreLink: {
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
        },
        '@media (max-width: 768px)': {
            bigButtonContainer: {
                flexDirection: 'column',
            },
            exploreMore: {
                flexDirection: 'column',
                alignItems: 'center',
            },
        },
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.backgroundOverlay}></div>
            <div style={styles.contentContainer}>
                <Navbar />
                
                {/* Warning Line with Latest News */}
                <div style={styles.warningLine}>
                    <marquee>Breaking News: Emergency Alert in Place due to Floods in Several Regions.</marquee>
                </div>

                {/* Animation Videos Section */}
                <div style={styles.animationSection}>
                    <div style={styles.videoCarousel}>
                        <Carousel controls indicators>
                            <Carousel.Item>
                                <img
                                    src={InfoTerrain} alt="Flood Emergency Animation"
                                    style={{ width: '100%', height: '400px' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={Fire} alt="Fire Emergency Animation"
                                    style={{ width: '100%', height: '400px' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={NaturalDisaster} alt="Natural Emergency Animation"
                                    style={{ width: '100%', height: '400px' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    {/* Big Buttons Section */}
                    <div style={styles.bigButtonContainer}>
                        <button
                            style={styles.bigButton}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c70039')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5733')}
                            onClick={handleReportIncidentClick}
                        >
                            <img src="/icons/report.png" alt="Report Incident" style={styles.bigButtonIcon} />
                            Report Incident
                        </button>
                        <button
                            style={styles.bigButton}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c70039')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5733')}
                            onClick={handleSOSClick}
                        >
                            <img src="/icons/sos.png" alt="SOS" style={styles.bigButtonIcon} />
                            SOS
                        </button>
                    </div>
                </div>

                {/* Explore More Section */}
                <div style={styles.exploreMoreContainer}>
                    <h2 style={styles.exploreMoreTitle}>Explore More</h2>
                    <div style={styles.exploreMore}>
                        <a href="/askforhelp" style={styles.exploreMoreLink}>
                            <div
                                style={styles.card}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <img src="/icons/ask-for-help.png" alt="Hospitality" style={styles.cardIcon} />
                                <p>Ask For help</p>
                            </div>
                        </a>
                        <a href="/financial-services" style={styles.exploreMoreLink}>
                            <div
                                style={styles.card}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <img src="/icons/finance.png" alt="Finance" style={styles.cardIcon} />
                                <p>Finance</p>
                            </div>
                        </a>
                        <a href="/donation" style={styles.exploreMoreLink}>
                            <div
                                style={styles.card}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <img src="/icons/donate.png" alt="Donations" style={styles.cardIcon} />
                                <p>Donations</p>
                            </div>
                        </a>
                        <a href="/emergency-services" style={styles.exploreMoreLink}>
                            <div
                                style={styles.card}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <img src="/icons/emergencyservices.png" alt="Donations" style={styles.cardIcon} />
                                <p>Emergency Services</p>
                            </div>
                        </a>
                        {/* Add more cards as needed */}
                    </div>
                </div>
            </div>
            <footer style={{ padding: '20px', background: '#003366', color: '#fff', textAlign: 'center' }}>
                © 2023 Emergency Coordination Platform. All rights reserved.
            </footer>
        </div>
    );
}

export default Userhome;
