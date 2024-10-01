// import React from 'react';
// import logo from '../images/logo.png'; // Update the path to your logo image
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import user icon

// const Navbar = () => {
//   const navbarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#003366', // Dark Blue
//     padding: '20px 30px',
//     color: '#FFFFFF', // White
//     fontFamily: 'Arial, sans-serif',
//   };

//   const logoContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const logoStyle = {
//     width: '50px', // Adjust the size as needed
//     height: '50px', // Adjust the size as needed
//     marginRight: '10px',
//   };

//   const titleStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#FFFFFF', // White
//   };

//   const navLinksStyle = {
//     display: 'flex',
//     gap: '20px',
//     listStyleType: 'none',
//     margin: 0,
//     padding: 0,
//   };

//   const navLinkStyle = {
//     textDecoration: 'none',
//     color: '#FFFFFF', // White
//     fontSize: '22px',
//     cursor: 'pointer',
//     transition: 'color 0.3s',
//   };

//   const navLinkHoverStyle = {
//     color: '#FFA500', // Orange (Accent Color) on hover
//   };

//   const profileIconStyle = {
//     fontSize: '26px', // Icon size
//     cursor: 'pointer',
//     color: '#FFFFFF', // White by default
//     transition: 'color 0.3s',
//   };

//   return (
//     <nav style={navbarStyle}>
//       <div style={logoContainerStyle}>
//         <img src={logo} alt="Logo" style={logoStyle} />
//         <div style={titleStyle}>Relief Bridge</div>
//       </div>
//       <ul style={navLinksStyle}>
//         <li>
//           <a
//             href="/"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.currentTarget.style.color = navLinkHoverStyle.color)}
//             onMouseOut={(e) => (e.currentTarget.style.color = '#FFFFFF')}
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <Link
//             to="/map"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.currentTarget.style.color = navLinkHoverStyle.color)}
//             onMouseOut={(e) => (e.currentTarget.style.color = '#FFFFFF')}
//           >
//             Map
//           </Link>
//         </li>
//         <li>
//           <a
//             href="/campaigns"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.currentTarget.style.color = navLinkHoverStyle.color)}
//             onMouseOut={(e) => (e.currentTarget.style.color = '#FFFFFF')}
//           >
//             Campaigns
//           </a>
//         </li>
//         <li>
//           <Link
//             to="/blog"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.currentTarget.style.color = navLinkHoverStyle.color)}
//             onMouseOut={(e) => (e.currentTarget.style.color = '#FFFFFF')}
//           >
//             Blog
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/signup"
//             onMouseOver={(e) => (e.currentTarget.children[0].style.color = navLinkHoverStyle.color)}
//             onMouseOut={(e) => (e.currentTarget.children[0].style.color = '#FFFFFF')}
//           >
//             <FontAwesomeIcon icon={faUser} style={profileIconStyle} />
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#fff',
      fontSize: '18px',
      position: 'fixed',
      top: 0,
      width: '100%',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      zIndex: 1,
      transition: 'background-color 0.3s ease',
      boxSizing: 'border-box', // Ensure padding is included in the width
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '24px',
    },
    linkContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap', // Allow wrapping for smaller screens
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      whiteSpace: 'nowrap', // Prevent text wrapping
    },
    linkHover: {
      backgroundColor: '#555',
      color: '#fff',
    },
    '@media (max-width: 768px)': {
      navbar: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
      },
      linkContainer: {
        flexDirection: 'column',
        gap: '10px',
        width: '100%', // Ensure links take full width
      },
    },
    '@media (max-width: 480px)': {
      navbar: {
        fontSize: '16px',
      },
      logo: {
        fontSize: '20px',
      },
      link: {
        fontSize: '14px',
        padding: '8px 12px',
      },
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Relief Bridge</div>
      <div style={styles.linkContainer}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#map" style={styles.link}>Map</a>
        <a href="#insurance" style={styles.link}>Insurance</a>
        <a href="#blog" style={styles.link}>Blog</a>
        <a href="#login" style={styles.link}>Login</a>
      </div>
    </div>
  );
};

export default Navbar;