import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaUsers, 
  FaBoxes, 
  FaCertificate, 
  FaLeaf, 
  FaMapMarkerAlt, 
  FaAward 
} from 'react-icons/fa';
import OptimizedLogo from './OptimizedLogo';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Quality & Safety",
      description: "Rigorous quality control measures ensure every product meets the highest safety standards and maintains consistent quality.",
      color: "#28a745"
    },
    {
      icon: FaGlobe,
      title: "Global Standards",
      description: "Our products comply with international quality standards and certifications, making us a trusted global supplier.",
      color: "#007bff"
    },
    {
      icon: FaUsers,
      title: "Customer Relations",
      description: "Building lasting relationships through exceptional service, transparency, and commitment to customer satisfaction.",
      color: "#fd7e14"
    },
    {
      icon: FaBoxes,
      title: "Variety of Products",
      description: "Comprehensive range of premium pulses including Toor, Moong, Chana, Urad, Kabuli Chana, Masoor, and Rajma.",
      color: "#6f42c1"
    },
    {
      icon: FaCertificate,
      title: "Certified Processing",
      description: "State-of-the-art processing facilities with international certifications ensuring product integrity and quality.",
      color: "#dc3545"
    },
    {
      icon: FaLeaf,
      title: "Natural Products",
      description: "Naturally processed pulses without artificial additives, preserving nutritional value and authentic taste.",
      color: "#20c997"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Global Presence",
      description: "Serving customers worldwide with reliable supply chain and distribution network across multiple countries.",
      color: "#ffc107"
    },
    {
      icon: FaAward,
      title: "35+ Years Legacy",
      description: "Since 1989, we've built a reputation for excellence, trust, and reliability in the pulses trading industry.",
      color: "#e83e8c"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section py-3">
      <Container>
        <Row className="mb-3">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-header">
              <h2 className="section-title">
                Why Choose MDM ?
              </h2>
            </div>
          </Col>
        </Row>

        {/* Logo Section
        <Row className="mb-5">
          <Col lg={4} className="mx-auto text-center">
            <div className="logo-showcase">
              <OptimizedLogo 
                height="120px" 
                className="showcase-logo"
                showText={true}
                textSize="2rem"
                animate={true}
              />
              <p className="logo-tagline mt-3">Premium Quality Pulses</p>
            </div>
          </Col>
        </Row> */}

        <Row>
          {features.map((feature, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div 
                    className="feature-icon-container mb-3"
                    style={{ color: feature.color }}
                  >
                    <feature.icon className="feature-icon-large" />
                  </div>
                  <Card.Title className="feature-title">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="feature-description">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Trust Section */}
        {/* <Row className="mt-5 pt-5">
          <Col lg={10} className="mx-auto">
            <div className="trust-section text-center">
              <h3 className="trust-title mb-4">
                Trusted by Customers Worldwide Since 1989
              </h3>
              <Row>
                <Col md={4} className="mb-3">
                  <div className="stat-item">
                    <h4 className="stat-number">35+</h4>
                    <p className="stat-label">Years of Excellence</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="stat-item">
                    <h4 className="stat-number">7+</h4>
                    <p className="stat-label">Premium Products</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="stat-item">
                    <h4 className="stat-number">100%</h4>
                    <p className="stat-label">Quality Assured</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default WhyChooseUs;
