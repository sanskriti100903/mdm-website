import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaStar, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const WhyMDMSection = () => {
  return (
    <section id="why-mdm" className="why-mdm-section">
      <Container>

        {/* Main Heading - Full Width Centered */}
        <Row className="mb-4">
          <Col lg={12}>
            <h3 className="welcome-title text-center">Welcome to MDM Group</h3>
          </Col>
        </Row>

        <Row className="align-items-start">
          {/* Logo Section - Left Side */}
          <Col lg={5} md={6} className="mb-4 mb-lg-0">
            <div className="why-mdm-logo-container">
              <div className="logo-wrapper">
                <img 
                  src="/assets/logo.png"
                  alt="MDM Group Logo" 
                  className="why-mdm-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="logo-placeholder" style={{display: 'none'}}>
                  <FaLeaf className="placeholder-icon" />
                  <span className="placeholder-text">MDM GROUP</span>
                  <small className="placeholder-since">Since 1989</small>
                </div>
              </div>
              
              {/* Key Highlights - Below Logo */}
              <div className="key-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">35+</div>
                  <div className="highlight-text">Years of Excellence</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-text">Quality Assured</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">50+</div>
                  <div className="highlight-text">Countries Served</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Content Section - Right Side */}
          <Col lg={7} md={6}>
            <div className="why-mdm-content">
              <div className="content-text">
                <p className="lead-paragraph">
                  With a legacy of excellence since 1989, MDM Group stands as a trusted manufacturer and exporter of premium pulses, rice, and wheat. From carefully selected farms to global markets, we ensure every grain meets the highest standards of purity, freshness, and quality.
                </p>
                
                <p className="description-paragraph">
                  Driven by tradition and powered by innovation, we combine age-old agricultural values with modern processing technology. Our commitment to quality, transparency, and sustainable sourcing has helped us earn the confidence of customers across the world—because at MDM Group, trust is grown as naturally as our grains.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyMDMSection;
