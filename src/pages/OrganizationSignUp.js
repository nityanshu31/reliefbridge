import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const style = {
  container: {
    padding: '20px',
    maxWidth: '700px',
    border: '2px solid #000000',
    borderRadius: '10px',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '15px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  slider: {
    flexGrow: 1,
    height: '8px',
    borderRadius: '5px',
    background: '#E0E0E0',
    marginRight: '15px',
    position: 'relative',
  },
  sliderFilled: {
    height: '100%',
    borderRadius: '5px',
    background: '#0055A4',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  sliderDot: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#E0E0E0',
    position: 'absolute',
    top: '-6px',
    cursor: 'pointer',
  },
  activeDot: {
    background: '#0055A4',
  },
  stepLabel: {
    fontSize: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #E0E0E0',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    backgroundColor: '#0055A4',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '15px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#003366',
    transform: 'scale(1.05)',
  },
  signInLink: {
    color: '#0055A4',
    cursor: 'pointer',
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
};

const OrganizationSignUp = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    website: '',
    address: '',
    gpsLocation: '',
    resourceTypes: '',
    capacity: '',
    availability: '',
    responsePlan: '',
    previousExperience: '',
    password: '',
    confirmPassword: '',
    legalDocuments: '',
    bankDetails: '',
    termsAccepted: false,
    privacyAccepted: false,
    transparencyAgreement: false,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSignIn = () => {
    navigate('/signin'); // Redirect to sign-in page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate('/organizationhome'); // Redirect to organization home or dashboard after successful sign-up
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div style={style.container}>
      <h2 style={style.heading}>Sign Up as an Organization</h2>

      <div style={style.sliderContainer}>
        <div style={style.slider}>
          <div
            style={{
              ...style.sliderFilled,
              width: `${(currentStep / 3) * 100}%`, // Assuming 3 steps in total
            }}
          ></div>
          <div
            style={{
              ...style.sliderDot,
              left: '0%',
              ...(currentStep === 1 ? style.activeDot : {}),
            }}
            onClick={() => goToStep(1)}
          ></div>
          <div
            style={{
              ...style.sliderDot,
              left: '50%',
              ...(currentStep === 2 ? style.activeDot : {}),
            }}
            onClick={() => goToStep(2)}
          ></div>
          <div
            style={{
              ...style.sliderDot,
              left: '100%',
              ...(currentStep === 3 ? style.activeDot : {}),
            }}
            onClick={() => goToStep(3)}
          ></div>
        </div>
        <span style={style.stepLabel}>Step {currentStep} of 3</span>
      </div>

      {currentStep === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep(2);
          }}
          style={style.form}
        >
          <label style={style.label}>
            Organization Name:
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Type of Organization:
            <input
              type="text"
              name="orgType"
              value={formData.orgType}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Contact Person:
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <div style={style.buttonContainer}>
            <button
              type="submit"
              style={style.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = style.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = style.button.backgroundColor)
              }
            >
              Next
            </button>
          </div>
          <div style={style.signInLink} onClick={handleSignIn}>
            Already have an account? Sign In
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep(3);
          }}
          style={style.form}
        >
          <label style={style.label}>
            Website (optional):
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={style.input}
            />
          </label>
          <label style={style.label}>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            GPS Location (optional):
            <input
              type="text"
              name="gpsLocation"
              value={formData.gpsLocation}
              onChange={handleChange}
              style={style.input}
            />
          </label>
          <label style={style.label}>
            Types of Resources Available:
            <input
              type="text"
              name="resourceTypes"
              value={formData.resourceTypes}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Capacity:
            <input
              type="text"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Availability:
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <div style={style.buttonContainer}>
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              style={style.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = style.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = style.button.backgroundColor)
              }
            >
              Back
            </button>
            <button
              type="submit"
              style={style.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = style.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = style.button.backgroundColor)
              }
            >
              Next
            </button>
          </div>
          <div style={style.signInLink} onClick={handleSignIn}>
            Already have an account? Sign In
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <form onSubmit={handleSubmit} style={style.form}>
          <label style={style.label}>
            Response Plan:
            <textarea
              name="responsePlan"
              value={formData.responsePlan}
              onChange={handleChange}
              style={style.textarea}
              required
            />
          </label>
          <label style={style.label}>
            Previous Experience:
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleChange}
              style={style.textarea}
              required
            />
          </label>
          <label style={style.label}>
            Upload Legal Documents (optional):
            <input
              type="file"
              name="legalDocuments"
              onChange={(e) =>
                setFormData({ ...formData, legalDocuments: e.target.files[0] })
              }
              style={style.input}
            />
          </label>
          <label style={style.label}>
            Bank Details:
            <input
              type="text"
              name="bankDetails"
              value={formData.bankDetails}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.checkboxLabel}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              required
            />
            Accept Terms and Conditions
          </label>
          <label style={style.checkboxLabel}>
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleCheckboxChange}
              required
            />
            Accept Privacy Policy
          </label>
          <label style={style.checkboxLabel}>
            <input
              type="checkbox"
              name="transparencyAgreement"
              checked={formData.transparencyAgreement}
              onChange={handleCheckboxChange}
              required
            />
            Agree to Transparency
          </label>
          <label style={style.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <label style={style.label}>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={style.input}
              required
            />
          </label>
          <div style={style.buttonContainer}>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              style={style.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = style.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = style.button.backgroundColor)
              }
            >
              Back
            </button>
            <button
              type="submit"
              style={style.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = style.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = style.button.backgroundColor)
              }
            >
              Submit
            </button>
          </div>
          <div style={style.signInLink} onClick={handleSignIn}>
            Already have an account? Sign In
          </div>
        </form>
      )}
    </div>
  );
};

export default OrganizationSignUp;
