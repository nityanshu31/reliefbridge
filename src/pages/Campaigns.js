import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const campaigns = [
  {
    title: "Disaster Management Campaign",
    description: "Join our efforts to manage and mitigate the impact of natural disasters. Support our initiatives to provide relief and recovery resources to affected communities.",
    date: "October 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Community Hall, Connaught Place, New Delhi, India",
    organizer: "Dr. John Doe",
    image: "https://api.thesecretariat.in/the-secretariat-api/public//file/download-content-attachment?fileId=d1569c102dc64db5bb63ad98a7acb062"
  },
  {
    title: "Blood Donation Camp",
    description: "Participate in our blood donation camp to save lives. Your donation can make a significant difference in emergency situations and help those in need.",
    date: "September 15, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Red Cross Society, MG Road, Bangalore, India",
    organizer: "Dr. Jane Smith",
    image: "https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg"
  },
  {
    title: "Emergency Life Insurance Drive",
    description: "Secure your future with our emergency life insurance plans. Our experts will be available to guide you through the process.",
    date: "November 5, 2024",
    time: "11:00 AM - 5:00 PM",
    location: "LIC Building, Anna Salai, Chennai, India",
    organizer: "Mr. Alex Johnson",
    image: "https://www.homecredit.co.in/sites/default/files/inline-images/1_2.jpg"
  },
  {
    title: "Health and Safety Workshop",
    description: "Learn how to stay safe and healthy during emergencies. This workshop covers first aid, CPR, and other essential safety skills.",
    date: "December 1, 2024",
    time: "1:00 PM - 6:00 PM",
    location: "City Auditorium, Bandra, Mumbai, India",
    organizer: "Dr. Emily Clark",
    image: "https://www.charities.govt.nz/assets/hs__ResizedImageWzYwMCwyNDBd.jpg"
  },
  {
    title: "Flood Relief Donation Drive",
    description: "Contribute to our flood relief donation drive to help those affected by recent floods. Your support will provide much-needed supplies to disaster-stricken areas.",
    date: "September 20, 2024",
    time: "8:00 AM - 2:00 PM",
    location: "Relief Center, Salt Lake, Kolkata, India",
    organizer: "Mr. Peter Williams",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fundraising%2C-flood-relief-camp-flyer-design-template-bb9f9e5f066ea36add3f193791be9810_screen.jpg?ts=1698454654"
  },
  {
    title: "Mental Health Support Campaign",
    description: "Join us for a mental health support campaign aimed at providing resources and support to those affected by trauma.",
    date: "October 25, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Wellness Center, Banjara Hills, Hyderabad, India",
    organizer: "Dr. Sarah Lee",
    image: "https://m.media-amazon.com/images/I/51y57kgDMyL.AC_UF1000,1000_QL80.jpg"
  },
  {
    title: "Emergency Response Training",
    description: "Get trained in emergency response techniques to be prepared for any crisis. This training is essential for volunteers and first responders.",
    date: "November 12, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Training Facility, Sector 18, Noida, India",
    organizer: "Dr. Robert Carter",
    image: "https://media.licdn.com/dms/image/D4D12AQG9AabmClS6lw/article-cover_image-shrink_600_2000/0/1696319288158?e=2147483647&v=beta&t=b1yy664HhgzwC5AF4ncf3gE6eQykjbnz7Wt9Xf3-Ioc"
  },
  {
    title: "Women’s Defense Workshop",
    description: "Empower yourself by learning self-defense techniques in our women's defense workshop. This event will teach you practical skills to protect yourself in dangerous situations.",
    date: "December 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Women's Center, Koregaon Park, Pune, India",
    organizer: "Ms. Angela Davis",
    image: "https://img1.wsimg.com/isteam/ip/56e80374-796d-4a39-8850-7209c6d690da/women's%20free%20self%20defense-0001.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
  }
];

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center'
  },
  item: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '5px',
    marginBottom: '15px'
  },
  title: {
    marginTop: '10px',
    color: '#333',
    fontSize: '1.5em'
  },
  description: {
    marginTop: '5px',
    color: '#666'
  },
  details: {
    marginTop: '10px',
    color: '#555',
    fontSize: '1em'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    textAlign: 'left'
  },
  closeButton: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right',
  },
  formGroup: {
    marginBottom: '15px'
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  formInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  formTextarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    height: '100px'
  },
  submitButton: {
    backgroundColor: '#28A745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

function Campaigns() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Registration successful!');
    closePopup();
  };

  return (
    <div>
        <Navbar />
    
    <div style={styles.container}>
      <h1>Our Campaigns</h1>
      <div style={styles.list}>
        {campaigns.map((campaign, index) => (
          <div key={index} style={styles.item}>
            <img src={campaign.image} alt={campaign.title} style={styles.image} />
            <h2 style={styles.title}>{campaign.title}</h2>
            <p style={styles.description}>{campaign.description}</p>
            <p style={styles.details}><strong>Date:</strong> {campaign.date}</p>
            <p style={styles.details}><strong>Time:</strong> {campaign.time}</p>
            <p style={styles.details}><strong>Location:</strong> {campaign.location}</p>
            <p style={styles.details}><strong>Organizer:</strong> {campaign.organizer}</p>
            <button style={styles.button} onClick={openPopup}>Register Now</button>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={closePopup}>X</button>
            <h2>Register for the Campaign</h2>
            <form onSubmit={handleFormSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="name">Name:</label>
                <input style={styles.formInput} type="text" id="name" name="name" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="email">Email:</label>
                <input style={styles.formInput} type="email" id="email" name="email" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="phone">Phone:</label>
                <input style={styles.formInput} type="text" id="phone" name="phone" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="comments">Comments:</label>
                <textarea style={styles.formTextarea} id="comments" name="comments"></textarea>
              </div>
              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Campaigns;
