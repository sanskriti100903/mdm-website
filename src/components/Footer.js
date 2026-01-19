import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Hello! I'm interested in your premium quality pulses. Please provide more information.");
    window.open(`https://wa.me/91${number}?text=${message}`, '_blank');
  };

  const handlePhoneClick = (number) => {
    window.open(`tel:+91${number}`, '_self');
  };


  const handleHomeClick = () => {
    // Scroll to top when home is clicked
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleContactClick = () => {
    // Scroll to top when contact is clicked (after page loads)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer id="contact" className="footer-section-fullwidth">
      <div className="footer-main py-5">
        <div className="footer-container">
          <Row className="g-4">

            {/* Quick Links Menu */}
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-menu">
                <li><Link to="/" className="footer-menu-link" onClick={handleHomeClick}>Home</Link></li>
                <li><Link to="/about" className="footer-menu-link" onClick={handleHomeClick}>About Us</Link></li>
                <li><Link to="/products" className="footer-menu-link" onClick={handleHomeClick}>Products</Link></li>
                <li><Link to="/certifications" className="footer-menu-link" onClick={handleHomeClick}>Certifications</Link></li>
                <li><Link to="/contact" className="footer-menu-link" onClick={handleContactClick}>Contact</Link></li>
              </ul>
            </Col>

            {/* Products Menu */}
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-title">Our Products</h5>
              <ul className="footer-menu">
                <li><span className="footer-menu-text">Toor Dall</span></li>
                <li><span className="footer-menu-text">Moong Dall</span></li>
                <li><span className="footer-menu-text">Chana Dall</span></li>
                <li><span className="footer-menu-text">Urad Dall</span></li>
                <li><span className="footer-menu-text">Kabuli Chana</span></li>
                <li><span className="footer-menu-text">Maize</span></li>
                <li><span className="footer-menu-text">Chawla</span></li>
                <li><span className="footer-menu-text">Masoor Dall</span></li>
                <li><span className="footer-menu-text">Rajma</span></li>
              </ul>
            </Col>

            {/* Contact Information */}
            <Col lg={3} md={6} className="mb-4">
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
                    className="phone-link p-0 mb-2 d-block"
                    onClick={() => handlePhoneClick('7880010888')}
                  >
                    +91 7880010888
                  </Button>
                  <Button 
                    variant="link" 
                    className="phone-link p-0 mb-2 d-block"
                    onClick={() => handlePhoneClick('9302501585')}
                  >
                    +91 9302501585
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
                    className="whatsapp-btn mb-2 d-block"
                    onClick={() => handleWhatsAppClick('7880010888')}
                  >
                    <FaWhatsapp className="me-1" />
                    +91 7880010888
                  </Button>
                  <Button 
                    variant="success" 
                    size="sm" 
                    className="whatsapp-btn mb-2 d-block"
                    onClick={() => handleWhatsAppClick('9302501585')}
                  >
                    <FaWhatsapp className="me-1" />
                    +91 9302501585
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
            <Col lg={3} md={12} className="mb-4">
              <h5 className="footer-title">Our Locations</h5>
              
              {/* Office Address */}
              <div className="address-item mb-4">
                <h6 className="address-title">
                  <FaMapMarkerAlt className="me-2" />
                  Office
                </h6>
                <p className="address-text">
                  23/2, Sajan Nagar, Chitwad Road<br/>
                  Indore, MP - 452001<br/>
                  India
                </p>
              </div>

              {/* Factory Address */}
              <div className="address-item">
                <h6 className="address-title">
                  <FaMapMarkerAlt className="me-2" />
                  Factory
                </h6>
                <p className="address-text">
                  10, Gajanand Industrial Park<br/>
                  Nemawar Road, Ashrawad<br/>
                  Indore, MP - 452016
                </p>
              </div>
            </Col>
          </Row>
        </div>
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
        <div className="footer-container">
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright-text mb-0">
                © 2025 MDM Group. All rights reserved. | Since 1980
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="tagline-text mb-0">
                Premium Quality Pulses - Trusted Worldwide
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
