import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstra // Ensure you have the correct path for the image

const VolunteerHome = () => {

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
    scrollingNews: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    scrollingText: {
      display: 'inline-block',
      animation: 'scroll 10s linear infinite',
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
      padding: '40px 0',
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
      height: '250px',
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
      <Navbar />
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.contentContainer}>
        <div style={styles.warningLine}>⚠️ Emergency Alerts! Stay informed.</div>
        
        
        <style>{`
          @keyframes scroll {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}</style>

        {/* Animation Videos Section */}
        <div style={styles.animationSection}>
          <div style={styles.videoCarousel}>
            <Carousel controls indicators>
              <Carousel.Item>
                <img
                  src="/icons/volunteeranimation.gif" alt="Flood Emergency Animation"
                  style={{ width: '100%', height: '400px' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Big Button Section */}
        <div style={styles.bigButtonContainer}>
          <button style={styles.bigButton}>
            <img src="/icons/report.png" alt="Report Icon" style={styles.bigButtonIcon} />
            Report Incident
          </button>
        </div>

        {/* Explore More Section */}
        <div style={styles.exploreMoreContainer}>
          <h2 style={styles.exploreMoreTitle}>SERVICES</h2>
          <div style={styles.exploreMore}>
          <Link to="/requests" style={styles.exploreMoreLink}>
              <div style={styles.card}>
                <img src="/icons/request.png" alt="Team Member" style={styles.cardIcon} />
                <h3>REQUESTS</h3>
              </div>
            </Link>
          <a href="/emergency-hospitality" style={styles.exploreMoreLink}>
                            <div
                                style={styles.card}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <img src="/icons/hospitality.png" alt="Hospitality" style={styles.cardIcon} />
                                <p>Hospitality</p>
                            </div>
                        </a>
            <Link to="/training" style={styles.exploreMoreLink}>
              <div style={styles.card}>
                <img src="/icons/Training.png" alt="Training" style={styles.cardIcon} />
                <h3>TRAINING</h3>
              </div>
            </Link>
            <Link to="/updates" style={styles.exploreMoreLink}>
              <div style={styles.card}>
                <img src="/icons/updates.png" alt="Updates" style={styles.cardIcon} />
                <h3>UPDATES</h3>
              </div>
            </Link>
            
            <Link to="/task-assign" style={styles.exploreMoreLink}>
              <div style={styles.card}>
                <img src="/icons/taskassign.png" alt="Task Assign" style={styles.cardIcon} />
                <h3>TASK ASSIGN</h3>
              </div>
            </Link>
            <Link to="/team-member" style={styles.exploreMoreLink}>
              <div style={styles.card}>
                <img src="/icons/team.png" alt="Team Member" style={styles.cardIcon} />
                <h3>TEAM MEMBER</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <footer style={{ padding: '20px', background: '#003366', color: '#fff', textAlign: 'center' }}>
                © 2023 Emergency Coordination Platform. All rights reserved.
            </footer>
    </div>
  );
};

export default VolunteerHome;
