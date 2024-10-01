import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat'; // Import heatmap plugin if needed

const accommodations = [
  // Your accommodation data
  {
    id: 1,
    name: "Shelter Home Central",
    type: "Shelter",
    location: "Alkapuri, Vadodara",
    capacity: 100,
    availability: "Available",
    description: "A well-equipped shelter providing emergency accommodation.",
    photo: "https://via.placeholder.com/300?text=Shelter+Home+Central",
    amenities: ["Basic Supplies", "Medical Assistance", "Hot Meals"],
    rating: 4.0,
    reviews: 75,
    contact: "shelter@central.com",
    coordinates: [22.3084, 73.1811],  // Alkapuri coordinates
  },
  {
    id: 2,
    name: "Emergency Shelter East",
    type: "Shelter",
    location: "Gorwa, Vadodara",
    capacity: 80,
    availability: "Available",
    description: "Safe and secure shelter for emergency situations.",
    photo: "https://via.placeholder.com/300?text=Emergency+Shelter+East",
    amenities: ["Basic Supplies", "Security", "Hot Meals"],
    rating: 4.2,
    reviews: 60,
    contact: "shelter@east.com",
    coordinates: [22.2895, 73.1777],  // Gorwa coordinates
  },
  {
    id: 3,
    name: "Safe Haven Motel",
    type: "Motel",
    location: "Sayajigunj, Vadodara",
    capacity: 30,
    availability: "Available",
    description: "Affordable motel for short-term stays during emergencies.",
    photo: "https://via.placeholder.com/300?text=Safe+Haven+Motel",
    amenities: ["Wi-Fi", "Basic Supplies", "24/7 Front Desk"],
    rating: 3.8,
    reviews: 40,
    contact: "motel@safehaven.com",
    coordinates: [22.3116, 73.1869],  // Sayajigunj coordinates
  },
  {
    id: 4,
    name: "Community Shelter South",
    type: "Shelter",
    location: "Vasna, Vadodara",
    capacity: 90,
    availability: "Available",
    description: "Community-driven shelter offering essential services.",
    photo: "https://via.placeholder.com/300?text=Community+Shelter+South",
    amenities: ["Hot Meals", "Basic Supplies", "Community Support"],
    rating: 4.1,
    reviews: 85,
    contact: "shelter@south.com",
    coordinates: [22.2937, 73.1934],  // Vasna coordinates
  },
  {
    id: 5,
    name: "Quick Stop Inn",
    type: "Inn",
    location: "Narmada Canal Road, Vadodara",
    capacity: 40,
    availability: "Available",
    description: "Comfortable inn with quick access to local services.",
    photo: "https://via.placeholder.com/300?text=Quick+Stop+Inn",
    amenities: ["Wi-Fi", "Free Breakfast", "24/7 Assistance"],
    rating: 3.9,
    reviews: 50,
    contact: "inn@quickstop.com",
    coordinates: [22.3030, 73.1920],  // Narmada Canal Road coordinates
  },
  {
    id: 6,
    name: "Crisis Support Lodge",
    type: "Lodge",
    location: "Bhayli, Vadodara",
    capacity: 60,
    availability: "Available",
    description: "Lodge providing temporary accommodation during crises.",
    photo: "https://via.placeholder.com/300?text=Crisis+Support+Lodge",
    amenities: ["Basic Supplies", "Security", "Hot Meals"],
    rating: 4.0,
    reviews: 55,
    contact: "lodge@crisisupport.com",
    coordinates: [22.2656, 73.1558],  // Bhayli coordinates
  },
  {
    id: 7,
    name: "Refugee Inn",
    type: "Inn",
    location: "Karama, Vadodara",
    capacity: 35,
    availability: "Available",
    description: "Safe haven for refugees and those in need.",
    photo: "https://via.placeholder.com/300?text=Refugee+Inn",
    amenities: ["Wi-Fi", "Free Meals", "Counseling"],
    rating: 4.3,
    reviews: 65,
    contact: "inn@refugee.com",
    coordinates: [22.3034, 73.1740],  // Karama coordinates
  },
  {
    id: 8,
    name: "Homeless Outreach Hotel",
    type: "Hotel",
    location: "Ravet, Vadodara",
    capacity: 150,
    availability: "Available",
    description: "Hotel providing temporary housing for the homeless.",
    photo: "https://via.placeholder.com/300?text=Homeless+Outreach+Hotel",
    amenities: ["Hot Meals", "Medical Aid", "Security"],
    rating: 4.4,
    reviews: 90,
    contact: "hotel@outreach.com",
    coordinates: [22.2812, 73.1675],  // Ravet coordinates
  },
  {
    id: 9,
    name: "Disaster Relief Motel",
    type: "Motel",
    location: "Waghodia, Vadodara",
    capacity: 50,
    availability: "Available",
    description: "Motel offering short-term stays for disaster relief.",
    photo: "https://via.placeholder.com/300?text=Disaster+Relief+Motel",
    amenities: ["Wi-Fi", "Basic Supplies", "24/7 Assistance"],
    rating: 4.1,
    reviews: 45,
    contact: "motel@disasterrelief.com",
    coordinates: [22.2786, 73.1968],  // Waghodia coordinates
  },
  {
    id: 10,
    name: "Emergency Care Lodge",
    type: "Lodge",
    location: "Narmada Nagar, Vadodara",
    capacity: 70,
    availability: "Available",
    description: "Lodge providing care and support during emergencies.",
    photo: "https://via.placeholder.com/300?text=Emergency+Care+Lodge",
    amenities: ["Medical Assistance", "Hot Meals", "Security"],
    rating: 4.2,
    reviews: 55,
    contact: "lodge@emergencycare.com",
    coordinates: [22.3045, 73.1856],  // Narmada Nagar coordinates
  },
  {
    id: 11,
    name: "Shelter Haven North",
    type: "Shelter",
    location: "Manjalpur, Vadodara",
    capacity: 120,
    availability: "Available",
    description: "Shelter providing emergency accommodation and support.",
    photo: "https://via.placeholder.com/300?text=Shelter+Haven+North",
    amenities: ["Basic Supplies", "Medical Aid", "Counseling"],
    rating: 4.5,
    reviews: 80,
    contact: "shelter@haven.com",
    coordinates: [22.3214, 73.2073],  // Manjalpur coordinates
  },
  {
    id: 12,
    name: "Refugee Support Hotel",
    type: "Hotel",
    location: "Gotri, Vadodara",
    capacity: 90,
    availability: "Available",
    description: "Hotel offering support and accommodation for refugees.",
    photo: "https://via.placeholder.com/300?text=Refugee+Support+Hotel",
    amenities: ["Hot Meals", "Medical Assistance", "Security"],
    rating: 4.3,
    reviews: 70,
    contact: "hotel@refugeesupport.com",
    coordinates: [22.3092, 73.1702],  // Gotri coordinates
  },
  {
    id: 13,
    name: "Safe Harbor Motel",
    type: "Motel",
    location: "Pratapganj, Vadodara",
    capacity: 25,
    availability: "Available",
    description: "Motel providing safe accommodation during emergencies.",
    photo: "https://via.placeholder.com/300?text=Safe+Harbor+Motel",
    amenities: ["Wi-Fi", "24/7 Assistance", "Basic Supplies"],
    rating: 3.9,
    reviews: 30,
    contact: "motel@safeharbor.com",
    coordinates: [22.2960, 73.1606],  // Pratapganj coordinates
  },
  {
    id: 14,
    name: "Community Relief Lodge",
    type: "Lodge",
    location: "Alkapuri, Vadodara",
    capacity: 100,
    availability: "Available",
    description: "Lodge providing relief and accommodation for the community.",
    photo: "https://via.placeholder.com/300?text=Community+Relief+Lodge",
    amenities: ["Hot Meals", "Medical Assistance", "Counseling"],
    rating: 4.4,
    reviews: 85,
    contact: "lodge@communityrelief.com",
    coordinates: [22.3084, 73.1811],  // Alkapuri coordinates (same as Shelter Home Central for demonstration)
  },
  {
    id: 15,
    name: "Urgent Care Inn",
    type: "Inn",
    location: "Vasna, Vadodara",
    capacity: 50,
    availability: "Available",
    description: "Inn offering urgent care and accommodation during emergencies.",
    photo: "https://via.placeholder.com/300?text=Urgent+Care+Inn",
    amenities: ["Wi-Fi", "Medical Assistance", "24/7 Assistance"],
    rating: 4.0,
    reviews: 50,
    contact: "inn@urgentcare.com",
    coordinates: [22.2937, 73.1934],  // Vasna coordinates (same as Community Shelter South for demonstration)
  }
];

const AccommodationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: '', type: '', capacity: '', dates: '' });
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({ name: '', email: '', phone: '', dates: '' });
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSelectAccommodation = (acc) => {
    setSelectedAccommodation(acc);
    setShowBookingPopup(true);
  };

  const handleClosePopup = () => {
    setShowBookingPopup(false);
    setSelectedAccommodation(null);
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmitBooking = () => {
    // Implement booking submission functionality here
    handleClosePopup();
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    searchBar: {
      display: 'flex',
      gap: '10px',
    },
    searchInput: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '200px',
    },
    accommodationListings: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
    accommodationCard: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
    },
    accommodationCardHover: {
      transform: 'scale(1.05)',
    },
    accommodationImage: {
      width: '100%',
      height: '200px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 10,
    },
    popup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      zIndex: 11,
    },
    formInput: {
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      marginLeft: '10px',
      cursor: 'pointer',
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    footerNav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '20px',
    },
    footerLinks: {
      color: '#fff',
      textDecoration: 'none',
    },
    map: {
      height: '400px',
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
    },
  };

  const customIcon = new L.Icon({
  iconUrl: 'https://example.com/your-icon.png', // URL to your custom icon
  iconSize: [32, 32], // Size of the icon [width, height]
  iconAnchor: [16, 32], // Anchor point of the icon [x, y]
  popupAnchor: [0, -32], // Anchor point of the popup relative to the icon
});

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Emergency Accommodation Listings</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleFilterChange}
            style={styles.searchInput}
          />
          <select name="type" onChange={handleFilterChange} style={styles.searchInput}>
            <option value="">Type</option>
            <option value="Shelter">Shelter</option>
            <option value="Motel">Motel</option>
            <option value="Lodge">Lodge</option>
            <option value="Inn">Inn</option>
          </select>
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            onChange={handleFilterChange}
            style={styles.searchInput}
          />
          <input
            type="text"
            name="dates"
            placeholder="Dates"
            onChange={handleFilterChange}
            style={styles.searchInput}
          />
          <button onClick={handleSearch} style={styles.submitButton}>Search</button>
        </div>
      </header>

      <MapContainer center={[22.3039, 73.1812]} zoom={13} style={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
         {accommodations.map(acc => (
      <Marker
        key={acc.id}
        position={acc.coordinates}
        icon={customIcon} // Apply the custom icon
      >
        <Popup>
          <h2>{acc.name}</h2>
          <p>{acc.type}</p>
          <p>{acc.location}</p>
          <p>Capacity: {acc.capacity}</p>
          <p>{acc.description}</p>
        </Popup>
      </Marker>
        ))}
      </MapContainer>

      <main>
        <div style={styles.accommodationListings}>
          {accommodations.map((acc) => (
            <div
              key={acc.id}
              style={styles.accommodationCard}
              onClick={() => handleSelectAccommodation(acc)}
            >
              <img src={acc.photo} alt={acc.name} style={styles.accommodationImage} />
              <h2>{acc.name}</h2>
              <p>{acc.type}</p>
              <p>{acc.location}</p>
              <p>Capacity: {acc.capacity}</p>
              <p>Status: {acc.availability}</p>
              <p>{acc.description}</p>
            </div>
          ))}
        </div>

        {showBookingPopup && selectedAccommodation && (
          <>
            <div style={styles.popupOverlay} onClick={handleClosePopup}></div>
            <div style={styles.popup}>
              <h2>{selectedAccommodation.name}</h2>
              <p>Type: {selectedAccommodation.type}</p>
              <p>Location: {selectedAccommodation.location}</p>
              <p>Capacity: {selectedAccommodation.capacity}</p>
              <p>{selectedAccommodation.description}</p>
              <p>Amenities: {selectedAccommodation.amenities.join(', ')}</p>
              <p>Rating: {selectedAccommodation.rating} ({selectedAccommodation.reviews} reviews)</p>
              <p>Contact: {selectedAccommodation.contact}</p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={bookingDetails.name}
                onChange={handleBookingChange}
                style={styles.formInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={bookingDetails.email}
                onChange={handleBookingChange}
                style={styles.formInput}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={bookingDetails.phone}
                onChange={handleBookingChange}
                style={styles.formInput}
              />
              <input
                type="text"
                name="dates"
                placeholder="Dates"
                value={bookingDetails.dates}
                onChange={handleBookingChange}
                style={styles.formInput}
              />
              <button onClick={handleSubmitBooking} style={styles.submitButton}>Submit Booking</button>
              <button onClick={handleClosePopup} style={styles.cancelButton}>Cancel</button>
            </div>
          </>
        )}
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerNav}>
          <a href="/" style={styles.footerLinks}>Home</a>
          <a href="/about" style={styles.footerLinks}>About</a>
          <a href="/contact" style={styles.footerLinks}>Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Emergency Accommodation</p>
      </footer>
    </div>
  );
};

export default AccommodationPage;
