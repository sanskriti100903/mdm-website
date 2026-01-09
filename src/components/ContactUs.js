import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaUser,
  FaBuilding,
  FaComments,
  FaExternalLinkAlt,
  FaGlobe
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import CountryCodeSelect from './CountryCodeSelect';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    designation: '',
    customerType: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowAlert(false);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.companyName || !formData.designation || !formData.customerType || !formData.countryCode || !formData.phone || !formData.message) {
      setAlertType('danger');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      setLoading(false);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINTS.CONTACT_SUBMIT, formData);
      
      if (response.data.success) {
        setAlertType('success');
        setAlertMessage(response.data.message);
        setShowAlert(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          companyName: '',
          designation: '',
          customerType: '',
          countryCode: '+91',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      setAlertType('danger');
      if (error.response?.data?.message) {
        setAlertMessage(error.response.data.message);
      } else if (error.response?.data?.errors) {
        setAlertMessage(error.response.data.errors.join(', '));
      } else {
        setAlertMessage('Failed to submit your message. Please check your connection and try again.');
      }
      setShowAlert(true);
    } finally {
      setLoading(false);
      setTimeout(() => setShowAlert(false), 8000);
    }
  };

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Hello! I'm interested in your premium quality pulses. Please provide more information.");
    window.open(`https://wa.me/91${number}?text=${message}`, '_blank');
  };

  const handlePhoneClick = (number) => {
    window.open(`tel:+91${number}`, '_self');
  };

  const handleMapClick = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="contact-us-page">
      <Header />
      
      {/* Contact Us Hero Section */}
      <section className="contact-hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="contact-hero-title">Get in Touch</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="contact-form-card">
                <Card.Header className="contact-form-header">
                  <h3 className="mb-0">
                    <FaComments className="me-2" />
                    Send us a Message
                  </h3>
                </Card.Header>
                <Card.Body className="p-4">
                  {showAlert && (
                    <Alert variant={alertType} className="mb-4">
                      {alertMessage}
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaUser className="me-2" />
                            Your Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="contact-form-input"
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaEnvelope className="me-2" />
                            Your Email *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="contact-form-input"
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaBuilding className="me-2" />
                            Company Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            className="contact-form-input"
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaUser className="me-2" />
                            Designation *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            placeholder="Enter your designation"
                            className="contact-form-input"
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaBuilding className="me-2" />
                            Customer Type *
                          </Form.Label>
                          <Form.Select
                            name="customerType"
                            value={formData.customerType}
                            onChange={handleInputChange}
                            className="contact-form-input"
                            required
                          >
                            <option value="">Please select</option>
                            <option value="Retailer">Retailer</option>
                            <option value="Wholesaler">Wholesaler</option>
                            <option value="Exporters">Exporters</option>
                            <option value="Modern Trade">Modern Trade</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaPhone className="me-2" />
                            Phone Number *
                          </Form.Label>
                          <InputGroup>
                            <CountryCodeSelect
                              value={formData.countryCode}
                              onChange={handleInputChange}
                              className="country-code-select"
                            />
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              className="contact-form-input"
                              required
                            />
                          </InputGroup>
                          <Form.Text className="text-muted small mt-1">
                            <FaGlobe className="me-1" />
                            Select your country code and enter phone number
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="contact-form-label">
                            <FaComments className="me-2" />
                            Your Message *
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your requirements..."
                            className="contact-form-input"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <div className="text-center mt-4">
                      <Button 
                        type="submit" 
                        className="contact-submit-btn"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              className="me-2"
                            />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information Sidebar */}
            <Col lg={4}>
              <div className="contact-info-sidebar">
                {/* Contact Details */}
                <Card className="contact-info-card mb-4">
                  <Card.Header className="contact-info-header">
                    <h4 className="mb-0">Contact Information</h4>
                  </Card.Header>
                  <Card.Body>
                    {/* Phone Numbers */}
                    <div className="contact-info-item mb-4">
                      <h6 className="contact-info-subtitle">
                        <FaPhone className="me-2" />
                        Phone Numbers
                      </h6>
                      <div className="contact-info-content">
                        <Button 
                          variant="link" 
                          className="contact-info-link p-0 mb-2"
                          onClick={() => handlePhoneClick('7880010888')}
                        >
                          +91 7880010888
                        </Button>
                      </div>
                    </div>

                    {/* WhatsApp Numbers */}
                    <div className="contact-info-item mb-4">
                      <h6 className="contact-info-subtitle">
                        <FaWhatsapp className="me-2" />
                        WhatsApp
                      </h6>
                      <div className="contact-info-content">
                        <Button 
                          variant="success" 
                          size="sm" 
                          className="contact-whatsapp-btn mb-2"
                          onClick={() => handleWhatsAppClick('7880010888')}
                        >
                          <FaWhatsapp className="me-1" />
                          +91 7880010888
                        </Button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-info-item">
                      <h6 className="contact-info-subtitle">
                        <FaEnvelope className="me-2" />
                        Email
                      </h6>
                      <div className="contact-info-content">
                        <a href="mailto:manishdallmills@rediffmail.com" className="contact-email-link">
                          manishdallmills@rediffmail.com
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Address Information */}
                <Card className="contact-info-card">
                  <Card.Header className="contact-info-header">
                    <h4 className="mb-0">Our Locations</h4>
                  </Card.Header>
                  <Card.Body>
                    {/* Office Address */}
                    <div className="contact-info-item mb-4">
                      <h6 className="contact-info-subtitle">
                        <FaMapMarkerAlt className="me-2" />
                        Office
                      </h6>
                      <div className="contact-info-content">
                        <p className="contact-address-text mb-2">
                          23/2, Sajan Nagar, Chitwad Road<br/>
                          Indore, MP - 452001, India
                        </p>
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          onClick={() => handleMapClick('23/2, Sajan Nagar, Chitwad Road, Indore, MP - 452001, India')}
                          className="contact-map-btn"
                        >
                          <FaExternalLinkAlt className="me-1" />
                          View on Map
                        </Button>
                      </div>
                    </div>

                    {/* Factory Address */}
                    <div className="contact-info-item">
                      <h6 className="contact-info-subtitle">
                        <FaMapMarkerAlt className="me-2" />
                        Factory
                      </h6>
                      <div className="contact-info-content">
                        <p className="contact-address-text mb-2">
                          10, Gajanand Industrial Park<br/>
                          Nemawar Road, Ashrawad<br/>
                          Indore, MP - 452016
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
