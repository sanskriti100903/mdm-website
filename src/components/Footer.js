import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import OptimizedLogo from './OptimizedLogo';

const Footer = () => {
  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Hello! I'm interested in your premium quality pulses. Please provide more information.");
    window.open(`https://wa.me/91${number}?text=${message}`, '_blank');
  };

  const handlePhoneClick = (number) => {
    window.open(`tel:+91${number}`, '_self');
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-main py-5">
        <Container>
          <Row>
            {/* Company Info */}
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-brand">
                <OptimizedLogo 
                  height="60px" 
                  className="footer-logo mb-3"
                  showText={true}
                  textSize="1.2rem"
                  animate={false}
                />
                <p className="footer-description">
                  Premium quality pulses exporter and retailer since 1989. 
                  Trusted globally for our commitment to quality, safety, and customer satisfaction.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>

            {/* Contact Information */}
            <Col lg={4} md={6} className="mb-4">
              <h5 className="footer-title">Contact Information</h5>
              
              {/* Phone Numbers */}
              <div className="contact-item mb-3">
                <h6 className="contact-subtitle">
                  <FaPhone className="me-2" />
                  Phone Numbers
                </h6>
                <div className="phone-numbers">
                  <Button 
                    variant="link" 
                    className="phone-link p-0 me-3 mb-2"
                    onClick={() => handlePhoneClick('9302501585')}
                  >
                    +91 9302501585
                  </Button>
                  <Button 
                    variant="link" 
                    className="phone-link p-0 mb-2"
                    onClick={() => handlePhoneClick('9827030585')}
                  >
                    +91 9827030585
                  </Button>
                </div>
              </div>

              {/* WhatsApp Numbers */}
              <div className="contact-item mb-3">
                <h6 className="contact-subtitle">
                  <FaWhatsapp className="me-2" />
                  WhatsApp
                </h6>
                <div className="whatsapp-numbers">
                  <Button 
                    variant="success" 
                    size="sm" 
                    className="whatsapp-btn me-2 mb-2"
                    onClick={() => handleWhatsAppClick('9893028822')}
                  >
                    <FaWhatsapp className="me-1" />
                    +91 9893028822
                  </Button>
                  <Button 
                    variant="success" 
                    size="sm" 
                    className="whatsapp-btn mb-2"
                    onClick={() => handleWhatsAppClick('9300030585')}
                  >
                    <FaWhatsapp className="me-1" />
                    +91 9300030585
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <h6 className="contact-subtitle">
                  <FaEnvelope className="me-2" />
                  Email
                </h6>
                <a href="mailto:manishdallmills@rediffmail.com" className="email-link">
                  manishdallmills@rediffmail.com
                </a>
              </div>
            </Col>

            {/* Addresses */}
            <Col lg={4} md={12} className="mb-4">
              <h5 className="footer-title">Our Locations</h5>
              
              {/* Office Address */}
              <div className="address-item mb-4">
                <h6 className="address-title">
                  <FaMapMarkerAlt className="me-2" />
                  Office Address
                </h6>
                <p className="address-text">
                  23/2, Sajan Nagar, Chitwad Road<br/>
                  Indore, Madhya Pradesh - 452001<br/>
                  India
                </p>
              </div>

              {/* Factory Address */}
              <div className="address-item">
                <h6 className="address-title">
                  <FaMapMarkerAlt className="me-2" />
                  Factory Address
                </h6>
                <p className="address-text">
                  10, Gajanand Industrial Park 8 Mill<br/>
                  Nemawar Road, Ashrawad Buzurg<br/>
                  Indore, Madhya Pradesh - 452016<br/>
                  India
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Map Section */}
      {/* <div className="map-section py-4">
        <Container>
          <Row>
            <Col lg={12}>
              <h5 className="map-title text-center mb-4">Find Us Here</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890123!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MDM Group Office Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* Footer Bottom */}
      <div className="footer-bottom py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright-text mb-0">
                © 2024 MDM Group. All rights reserved. | Since 1989
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="tagline-text mb-0">
                Premium Quality Pulses - Trusted Worldwide
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
