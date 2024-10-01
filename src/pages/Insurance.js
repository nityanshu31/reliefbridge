import React, { useState } from 'react';

// Data
const companies = [
  {
    id: 1,
    name: 'HealthFirst Plan',
    logo: '/images/healthfirst.png',
    plans: [
      { id: 'a', name: 'Basic Plan', coverage: 'Basic Coverage', price: '$100/month' },
      { id: 'b', name: 'Standard Plan', coverage: 'Standard Coverage', price: '$200/month' },
      { id: 'c', name: 'Premium Plan', coverage: 'Premium Coverage', price: '$300/month' }
    ]
  },
  {
    id: 2,
    name: 'SafeLife Plan',
    logo: '/images/safelife.jpg',
    plans: [
      { id: 'd', name: 'Essential Plan', coverage: 'Essential Coverage', price: '$150/month' },
      { id: 'e', name: 'Enhanced Plan', coverage: 'Enhanced Coverage', price: '$250/month' },
      { id: 'f', name: 'Deluxe Plan', coverage: 'Deluxe Coverage', price: '$350/month' }
    ]
  }
  // Add more companies as needed
];

const advisors = [
  { id: 1, name: 'John Doe', specialization: 'Health Insurance' },
  { id: 2, name: 'Jane Smith', specialization: 'Life Insurance' }
];

// Component Styles
const styles = {
  app: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#eaf0f1',
    minHeight: '100vh'
  },
  companies: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  company: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    width: '300px',
    verticalAlign: 'top',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  },
  logo: {
    width: '120px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: 'transform 0.3s ease-in-out'
  },
  planContainer: {
    marginTop: '10px'
  },
  plan: {
    margin: '10px 0',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'left',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease-in-out',
    cursor: 'pointer'
  },
  advisor: {
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    display: 'inline-block',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease-in-out',
    ':hover': {
      backgroundColor: '#f1f1f1',
      transform: 'scale(1.05)'
    }
  },
  advisors: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px'
  },
  selectedAdvisor: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

// Components
const InsurancePlan = ({ plan }) => (
    <div style={styles.plan} onClick={() => alert(`Selected: ${plan.name}`)}>
      <h3>{plan.name}</h3>
      <p>{plan.coverage}</p>
      <p>{plan.price}</p>
    </div>
  );

const InsuranceCompany = ({ company }) => (
    <div style={styles.company}>
      <img src={company.logo} alt={`${company.name} logo`} style={styles.logo} />
      <h2>{company.name}</h2>
      <div style={styles.planContainer}>
        {company.plans.map(plan => (
          <InsurancePlan key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
const Advisor = ({ advisor, onSelect }) => (
  <div style={styles.advisor} onClick={() => onSelect(advisor)}>
    <h3>{advisor.name}</h3>
    <p>{advisor.specialization}</p>
  </div>
);

// Main Component
const FinanceServices = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const handleAdvisorSelect = (advisor) => {
    setSelectedAdvisor(advisor);
  };

  return (
    <div style={styles.app}>
      <h1>Insurance Plans</h1>
      <div style={styles.companies}>
        {companies.map(company => (
          <InsuranceCompany key={company.id} company={company} />
        ))}
      </div>
      <h2>Our Advisors</h2>
      <div style={styles.advisors}>
        {advisors.map(advisor => (
          <Advisor
            key={advisor.id}
            advisor={advisor}
            onSelect={handleAdvisorSelect}
          />
        ))}
      </div>
      {selectedAdvisor && (
        <div style={styles.selectedAdvisor}>
          <h2>Selected Advisor</h2>
          <p>Name: {selectedAdvisor.name}</p>
          <p>Specialization: {selectedAdvisor.specialization}</p>
        </div>
      )}
    </div>
  );
};

export default FinanceServices;