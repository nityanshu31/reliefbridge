import React from 'react';
import { Link } from 'react-router-dom';

const blogPageStyles = {
  page: {
    padding: '20px',
    backgroundColor: '#f4f4f4'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width : '100%',
    cursor: 'pointer'
  },
  image: {
    width: 'auto',
    height: '250px',
    borderBottom: '1px solid #ddd'
  },
  content: {
    padding: '15px',
    flex: '1'
  },
  title: {
    fontSize: '1.4em',
    margin: '0',
    color: '#333',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '1em',
    color: '#666',
    marginBottom: '15px'
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s'
  },
  itemHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  },
  imageHover: {
    transform: 'scale(1.1)'
  }
};

const BlogPage = () => {
  const blogs = [
    { id: 1, title: 'Emergency Preparedness 101', description: 'Learn the basics of preparing for emergencies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7f_LbdspyV6gQEUt-B1orj1hO90_DGaqg&s' },
    { id: 2, title: 'Understanding First Aid', description: 'A guide to basic first aid techniques.', image: 'https://dattmedi.com/blog/wp-content/uploads/2024/05/Understanding-the-basics-of-First-Aid-1024x769.webp' },
    { id: 3, title: 'How to Build a Disaster Kit', description: 'Essential items for your disaster preparedness kit.', image: 'https://www.redcross.org/content/dam/redcross/about-us/news/getakitfb.jpg.transform/1288/q70/feature/image.jpeg' },
    { id: 4, title: 'Emergency Communication Plans', description: 'Creating effective communication plans for emergencies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi0Za3xUqm_T7PqAI16D1dA-dUbs0ISzDeLZhcN0vjo74-X5vciF9K-J8peTw2kf8iFw&usqp=CAU' },
    { id: 5, title: 'Dealing with Natural Disasters', description: 'Strategies for dealing with natural disasters.', image: 'https://buildersproject.eu/assets/content/attachments/1.jpg' },
    { id: 6, title: 'Sheltering in Place', description: 'Guidelines for sheltering in place during emergencies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcziJ6AJrJijTNuyUYIqcqUu5x8RbWjVDuGw&s' },
    { id: 7, title: 'Evacuation Procedures', description: 'How to plan and execute an evacuation.', image: 'https://www.shutterstock.com/image-vector/emergency-evacuation-victims-natural-disasters-260nw-1659221965.jpg' },
    { id: 8, title: 'Emergency Medical Supplies', description: 'Essential medical supplies for emergencies.', image: 'https://img.freepik.com/free-vector/first-aid-kit-supply-equipment-compositions-emergency-medical-treatment-realistic-cards-set_1284-27385.jpg' },
    { id: 9, title: 'Preparing Your Family', description: 'Steps to prepare your family for emergencies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgfuS-qiX7eqOfdlhiR0koSjnqMjTUBTsHQ&s' },
    { id: 11, title: 'Mental Health in Crisis Situations', description: 'Maintaining mental health during emergencies.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-bNJp5BSKEEhYjMc65z6-7Bga_5gEc6cBA&s' },
    { id: 12, title: 'How to Stay Informed', description: 'Keeping up-to-date with emergency alerts.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzdNYxITmMcg6mZtfXCU43OC77MZhCwvPOg&s' },
    { id: 13, title: 'Creating an Emergency Plan', description: 'Developing a comprehensive emergency plan.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PyePtQXaoDWpypySKdccyaG9QmDtbASQRg&s' },
    { id: 14, title: 'Emergency Response Teams', description: 'The role of emergency response teams in crises.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2icBbX1obZe1xYudzGrLw8CLQo0zkGWTnQ&s' },
    { id: 15, title: 'Post-Emergency Recovery', description: 'Steps to recover after an emergency.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZl-t6fM6k5Sp-RT2P9OWuY6U_nqUlkf9c6w&s' }
  ];

  return (
    
    <div style={blogPageStyles.page}>
      <h1>Blog Page</h1>
      <div style={blogPageStyles.gridContainer}>
        {blogs.map(blog => (
          <div
            key={blog.id}
            style={blogPageStyles.item}
            onMouseEnter={e => {
              e.currentTarget.style.transform = blogPageStyles.itemHover.transform;
              e.currentTarget.style.boxShadow = blogPageStyles.itemHover.boxShadow;
              e.currentTarget.querySelector('img').style.transform = blogPageStyles.imageHover.transform;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img src={blog.image} alt={blog.title} style={blogPageStyles.image} />
            <div style={blogPageStyles.content}>
              <h2 style={blogPageStyles.title}>{blog.title}</h2>
              <p style={blogPageStyles.description}>{blog.description}</p>
              <Link to={`/blog/${blog.id}`} style={blogPageStyles.link}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
