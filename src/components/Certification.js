import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate, FaAward, FaShieldAlt, FaLeaf, FaGlobe, FaStar } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const Certification = () => {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality in our products and services.",
      icon: FaCertificate,
      category: "Quality Management"
    },
    {
      id: 2,
      title: "HACCP Certified",
      description: "Hazard Analysis and Critical Control Points certification for food safety management.",
      icon: FaShieldAlt,
      category: "Food Safety"
    },
    {
      id: 3,
      title: "Organic Certification",
      description: "Certified organic processing facility ensuring natural and chemical-free products.",
      icon: FaLeaf,
      category: "Organic Standards"
    },
    {
      id: 4,
      title: "Export Excellence",
      description: "Government recognition for outstanding performance in export of agricultural products.",
      icon: FaGlobe,
      category: "Export Quality"
    },
    {
      id: 5,
      title: "FSSAI License",
      description: "Food Safety and Standards Authority of India license for food business operations.",
      icon: FaAward,
      category: "Food Authority"
    },
    {
      id: 6,
      title: "Premium Quality",
      description: "Industry recognition for maintaining premium quality standards in pulse processing.",
      icon: FaStar,
      category: "Quality Assurance"
    }
  ];

  return (
    <div className="certification-page">
      <Header />
      
      {/* Certification Hero Section */}
      <section className="products-hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="products-hero-title">Our Certifications</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications Grid Section */}
      <section className="certifications-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <p className="certifications-subtitle">
                Our commitment to quality and excellence is validated through various industry certifications and recognitions.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {certifications.map((cert) => (
              <Col lg={4} md={6} sm={12} key={cert.id}>
                <Card className="certification-card h-100">
                  <Card.Body className="text-center p-4">
                    <div className="certification-icon-container mb-3">
                      <cert.icon className="certification-icon" />
                    </div>
                    <Card.Title className="certification-title">
                      {cert.title}
                    </Card.Title>
                    <div className="certification-category mb-3">
                      {cert.category}
                    </div>
                    <Card.Text className="certification-description">
                      {cert.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Trust Section */}
      {/* <section className="certification-trust-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="trust-title">Trusted by Industry Standards</h2>
              <p className="trust-description">
                Our certifications reflect our unwavering commitment to quality, safety, and excellence. 
                Each certification represents rigorous testing, continuous improvement, and adherence to 
                international standards in pulse processing and food safety.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}

      <Footer />
    </div>
  );
};

export default Certification;
