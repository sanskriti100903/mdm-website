import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaComments, FaUsers, FaPaperPlane, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    customerType: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className="contact-section-modern">
      <div className="contact-background-pattern"></div>
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <div className="contact-header-modern">
              <span className="contact-badge">Let's Connect</span>
              <h2 className="contact-main-title">
                Get in <span className="title-highlight">Touch</span>
              </h2>
              <p className="contact-description">
                Ready to partner with us? We'd love to hear from you and discuss 
                how our premium quality pulses can serve your business needs.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Left Side - Contact Info */}
          <Col lg={5}>
            <div className="contact-info-modern">
              <h3 className="contact-info-title">Let's Start a Conversation</h3>
              <p className="contact-info-desc">
                We're here to help you find the perfect pulse solutions for your business. 
                Reach out to us through any of the channels below.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-content">
                    <h5>Call Us</h5>
                    <p>+91 XXX XXX XXXX</p>
                    <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="contact-method-item">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h5>Email Us</h5>
                    <p>info@mdmgroup.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="contact-method-item">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-content">
                    <h5>Visit Us</h5>
                    <p>Your Business Address</p>
                    <span>Open for business meetings</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col lg={7}>
            <div className="contact-form-modern">
              <div className="form-header">
                <h4>Send us a Message</h4>
                <p>Fill out the form below and we'll get back to you soon.</p>
              </div>
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Name Field */}
                  <Col md={6} className="mb-3">
                    <div className="modern-form-group">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        className="modern-input"
                        required
                      />
                      <label className="modern-label">
                        <FaUser className="label-icon" />
                        Your Name
                      </label>
                    </div>
                  </Col>

                  {/* Email Field */}
                  <Col md={6} className="mb-3">
                    <div className="modern-form-group">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        className="modern-input"
                        required
                      />
                      <label className="modern-label">
                        <FaEnvelope className="label-icon" />
                        Your Email
                      </label>
                    </div>
                  </Col>

                  {/* Customer Type Field */}
                  <Col md={6} className="mb-3">
                    <div className="modern-form-group">
                      <Form.Select
                        name="customerType"
                        value={formData.customerType}
                        onChange={handleChange}
                        className="modern-input modern-select"
                        required
                      >
                        <option value="">Select Customer Type</option>
                        <option value="retailer">Retailer</option>
                        <option value="wholesaler">Wholesaler</option>
                        <option value="exporters">Exporters</option>
                        <option value="modern-trade">Modern Trade</option>
                      </Form.Select>
                      <label className="modern-label">
                        <FaUsers className="label-icon" />
                        Customer Type
                      </label>
                    </div>
                  </Col>

                  {/* Phone Field */}
                  <Col md={6} className="mb-3">
                    <div className="modern-form-group">
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder=" "
                        value={formData.phone}
                        onChange={handleChange}
                        className="modern-input"
                        required
                      />
                      <label className="modern-label">
                        <FaPhone className="label-icon" />
                        Phone Number
                      </label>
                    </div>
                  </Col>

                  {/* Message Field */}
                  <Col md={12} className="mb-4">
                    <div className="modern-form-group">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleChange}
                        className="modern-input modern-textarea"
                        required
                      />
                      <label className="modern-label">
                        <FaComments className="label-icon" />
                        Your Message
                      </label>
                    </div>
                  </Col>

                  {/* Submit Button */}
                  <Col md={12}>
                    <Button type="submit" className="modern-submit-btn">
                      <span className="btn-text">Send Message</span>
                      <FaPaperPlane className="btn-icon" />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
