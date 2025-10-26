import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaUser,
  FaBuilding,
  FaComments,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    customerType: '',
    phone: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.customerType || !formData.phone || !formData.message) {
      setAlertType('danger');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType('danger');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      setAlertType('danger');
      setAlertMessage('Please enter a valid 10-digit phone number.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    setAlertType('success');
    setAlertMessage('Thank you for your message! We will get back to you soon.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      customerType: '',
      phone: '',
      message: ''
    });
    
    setTimeout(() => setShowAlert(false), 5000);
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
              <h1 className="contact-hero-title">Contact Us</h1>
              <p className="contact-hero-description">
                Get in touch with us for premium quality pulses, rice, and wheat. 
                We're here to serve your business needs with excellence.
              </p>
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
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="contact-form-input"
                            required
                          />
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
                      <Button type="submit" className="contact-submit-btn">
                        Send Message
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
                          className="contact-info-link p-0 me-3 mb-2"
                          onClick={() => handlePhoneClick('9302501585')}
                        >
                          +91 9302501585
                        </Button>
                        <Button 
                          variant="link" 
                          className="contact-info-link p-0 mb-2"
                          onClick={() => handlePhoneClick('9827030585')}
                        >
                          +91 9827030585
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
                          className="contact-whatsapp-btn me-2 mb-2"
                          onClick={() => handleWhatsAppClick('9893028822')}
                        >
                          <FaWhatsapp className="me-1" />
                          +91 9893028822
                        </Button>
                        <Button 
                          variant="success" 
                          size="sm" 
                          className="contact-whatsapp-btn mb-2"
                          onClick={() => handleWhatsAppClick('9300030585')}
                        >
                          <FaWhatsapp className="me-1" />
                          +91 9300030585
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
                          Indore, MP - 452001<br/>
                          India
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
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          onClick={() => handleMapClick('10, Gajanand Industrial Park, Nemawar Road, Ashrawad, Indore, MP - 452016')}
                          className="contact-map-btn"
                        >
                          <FaExternalLinkAlt className="me-1" />
                          View on Map
                        </Button>
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
