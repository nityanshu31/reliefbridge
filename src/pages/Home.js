import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showCards, setShowCards] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setShowCards(true);
      }
      if (scrollPosition > 800) { // Trigger services section animation later
        setShowServices(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    container: {
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
      color: '#fff',
    },
    videoBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      zIndex: '-1',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '24px',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
      zIndex: '2',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      color:'#6666ff'
    },
    subText: {
      fontSize: '20px',
      marginBottom: '20px',
      color:'#f8f800'

    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    loginBox: {
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
      color: '#000',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    signInButton: {
      marginTop: '10px',
      background: "linear-gradient(#c2eaea, #a8d8e0, #85c3d5)",
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    cardSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      padding: '100px 20px',
      height: '60vh',
      marginTop: '20px',
      zIndex: 3,
    },
    cardLeft: {
      width: '250px',
      height: '400px',
      backgroundColor: '#fff',
      color: '#000',
      textAlign: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 255, 0.1)', // Very light blue inner shadow
      border: '1px solid rgba(100, 200, 200, 0.1)', // Optional very light blue border
      transform: showCards ? 'translateX(0)' : 'translateX(-300px)',
      transition: 'transform 1s ease-in-out',
      position: 'relative',
      zIndex: 1,
    },
    cardRight: {
      width: '250px',
      height: '400px',
      backgroundColor: '#fff',
      color: '#000',
      textAlign: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 255, 0.1)', // Very light blue inner shadow
      border: '1px solid rgba(100, 200, 200, 0.1)',
      transform: showCards ? 'translateX(0)' : 'translateX(300px)',
      transition: 'transform 1s ease-in-out',
      position: 'relative',
      zIndex: 1,
    },
    eventImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    eventTitle: {
      fontWeight: 'bold',
      fontSize: '20px',
      margin: '10px 0',
      
    },
    eventDescription: {
      fontSize: '16px',
    },
    servicesSection: {
      padding: '0px 10px',
      textAlign: 'center',
      zIndex: 2,
    },
    serviceTitle: {
      fontSize: '36px',
      marginBottom: '30px',
      color:'#000',
    },
    serviceCards: {
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 255, 0.1)', // Very light blue inner shadow
      border: '1px solid rgba(100, 200, 200, 0.1)',
      gap: '20px',
      flexWrap: 'wrap',
    },
    serviceCard: {
      width: '250px',
      height: '250px',
      backgroundColor: '#fff',
      color: '#000',
      textAlign: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 255, 0.1)', // Very light blue inner shadow
      border: '1px solid rgba(100, 200, 200, 0.1)',
      opacity: showServices ? 1 : 0,
      transform: showServices ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 5s ease, transform 1s ease',
    },
    serviceIcon: {
      width: '60px',
      marginBottom: '10px',
    },
    serviceButton: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    slickSlide: {
        transition: 'transform 0.5s ease-in-out',
      },
      aboutSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: '#f9f9f9',
        color: '#333',
      },
      animationSection: {
        width: '45%',
        textAlign: 'center',
      
        borderRadius: '10px',
        padding: '20px',
      },
      infoSection: {
        padding: "40px",
        background: "linear-gradient(135deg, #e3fdfd, #cbf1f5, #a6e3e9)",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: "fadeIn 2s ease-in-out",
      },
      infoTitle: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#007acc",
        marginBottom: "25px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        animation: "slideInLeft 1.5s ease-out",
      },
      infoText: {
        fontSize: "17px",
        lineHeight: "1.3",
        marginBottom: "20px",
        maxWidth: "600px",
        color: "#333",
        textAlign: "center",
        position: "relative",
        animation: "slideInRight 2s ease-in-out",
        transition: "color 0.4s ease, background 0.4s ease",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0))",
        padding: "20px",
        borderRadius: "8px",
      },
      infoTextHover: {
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(0,204,255,0.1))",
        color: "#007acc",
        boxShadow: "0px 4px 15px rgba(0, 122, 204, 0.3)",
      },
      // Keyframes for slide-in animations
      '@keyframes slideInLeft': {
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
      },
      '@keyframes slideInRight': {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
      }
  };

  return (
    <div style={styles.container}>
      {/* Video background */}
      <video autoPlay loop muted style={styles.videoBg}>
      <source src="/icons/anime.mov.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Transparent Navbar */}
      <div style={styles.navbar}>
        <Navbar/>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Welcome to the Relief Bridge</h1>
        <p style={styles.subText}>
        The Relief Bridge connects individuals, volunteers, and organizations to streamline emergency responses. With features like real-time communication, resource tracking, and crisis mapping, we aim to improve coordination and resource management during critical times. By partnering with government agencies and NGOs, we provide timely updates, facilitate volunteer registration, and offer educational resources on disaster preparedness. Explore how our platform can help safeguard your community and enhance emergency response efforts.

        </p>

        {/* Login Options */}
        <div style={styles.buttonContainer}>
      <div style={styles.loginBox}>
        <p>Log in as User</p>
        <Link to="/signin">
          <button style={styles.signInButton}>Sign In</button>
        </Link>
      </div>
      <div style={styles.loginBox}>
        <p>Log in as Volunteer</p>
        <Link to="/signin">
          <button style={styles.signInButton}>Sign In</button>
        </Link>
      </div>
      <div style={styles.loginBox}>
        <p>Log in as Organization</p>
        <Link to="/signin">
          <button style={styles.signInButton}>Sign In</button>
        </Link>
      </div>
    </div>
      </div>

      {/* Sliding Cards Section */}
      
      <div style={styles.cardSection}>
      

        {/* Left Cards */}
        <div style={styles.cardLeft}>
          <img
            src="https://www.shutterstock.com/image-vector/extreme-weather-due-global-warming-260nw-2169904105.jpg" // Replace with your image link
            alt="Event 1"
            style={styles.eventImage}
          />
          <div style={styles.eventTitle}>Recent Event 1</div>
          <div style={styles.eventDescription}>
            Description of recent event 1, showing the success story of the relief team.
          </div>
        </div>

        <div style={styles.cardLeft}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/1510960361/display_1500/stock-vector-meteorological-disaster-or-extreme-weather-natural-catastrophe-or-cataclysm-rain-or-wind-problem-1510960361.jpg" // Replace with your image link
            alt="Event 2"
            style={styles.eventImage}
          />
          <div style={styles.eventTitle}>Recent Event 2</div>
          <div style={styles.eventDescription}>
            Description of recent event 2, a significant relief effort.
          </div>
          
        </div>

        {/* Right Cards */}
        <div style={styles.cardRight}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABG2-665LuKka9w8CaoWSWTPbuzLOys6gOA&s" // Replace with your image link
            alt="Event 3"
            style={styles.eventImage}
          />
          <div style={styles.eventTitle}>Recent Event 3</div>
          <div style={styles.eventDescription}>
            Description of recent event 3, highlighting the volunteer's work.
          </div>
        </div>

        <div style={styles.cardRight}>
          <img
            src="https://static1.bigstockphoto.com/9/4/2/large2/249588526.jpg"
            alt="Event 4"
            style={styles.eventImage}
          />
          <div style={styles.eventTitle}>Recent Event 4</div>
          <div style={styles.eventDescription}>
            Description of recent event 4, showcasing ongoing relief operations.
          </div>
        </div>
     
      </div>

      {/* Services Provided by Us */}
      <div style={styles.servicesSection}>

        <h2 style={styles.serviceTitle}>Services Provided by Us</h2>
        <div style={styles.serviceCards}>
          <div style={styles.serviceCard}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2191/2191179.png" // Replace with your icon
              alt="Service 1"
              style={styles.serviceIcon}
            />
            <h3>Emergency Aid</h3>
            <p>Providing immediate aid during emergencies.</p>
            <button style={styles.serviceButton}>Learn More</button>
          </div>
          <div style={styles.serviceCard}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4003/4003833.png" // Replace with your icon
              alt="Service 2"
              style={styles.serviceIcon}
            />
            <h3>Medical Assistance</h3>
            <p>Offering medical support and healthcare services.</p>
            <button style={styles.serviceButton}>Learn More</button>
          </div>
          <div style={styles.serviceCard}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1312/1312467.png" // Replace with your icon
              alt="Service 3"
              style={styles.serviceIcon}
            />
            <h3>Food and Supplies</h3>
            <p>Distributing essential food and supplies to affected areas.</p>
            <button style={styles.serviceButton}>Learn More</button>
          </div>
          <div style={styles.serviceCard}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1312/1312467.png" // Replace with your icon
              alt="Service 4"
              style={styles.serviceIcon}
            />
            <h3>Food and Supplies</h3>
            <p>Distributing essential food and supplies to affected areas.</p>
            <button style={styles.serviceButton}>Learn More</button>
          </div>
          
          {/* Repeat for additional services */}
        </div>
      </div>
      <div style={styles.aboutSection}>
  <div style={styles.animationSection}>
    <div style={styles.animation}>
      <iframe
        width="660"
        height="400"
        src="https://www.youtube.com/embed/1zB7tMH9k_s"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  <div style={styles.infoSection}>
  <h2 style={styles.infoTitle}>More About Our Website</h2>
  <p style={styles.infoText}>
  Our website is designed to streamline emergency responses by connecting individuals, volunteers, and organizations. With tools like real-time communication, resource tracking, and crisis mapping, we ensure efficient coordination during critical moments.

We empower communities through partnerships with government agencies and NGOs, providing timely updates, volunteer registries, and educational resources on disaster preparedness. Explore how our platform can help safeguard your community and improve emergency outcomes.
  </p>
  
</div>

</div>


    </div>
    
  );
};

export default Home;