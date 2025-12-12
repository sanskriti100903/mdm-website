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
      fullForm: "Quality Management System",
      logo: "/ISO 9001.png",
      useIcon: false
    },
    {
      id: 2,
      title: "ISO 22000:2018",
      fullForm: "Food Safety Management",
      logo: "/ISO 20000.png",
      useIcon: false
    },
    {
      id: 3,
      title: "FSSAI",
      fullForm: "Food Safety Standards Authority of India",
      logo: "/fssai.png",
      useIcon: false
    },
    {
      id: 4,
      title: "APEDA",
      fullForm: "Agricultural & Processed Food Products Export Development Authority",
      logo: "/apeda.png",
      useIcon: false
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
          
          <Row className="g-4 justify-content-center">
            {certifications.map((cert) => (
              <Col lg={4} md={6} sm={12} key={cert.id}>
                <Card className="certification-card h-100">
                  <Card.Body className="text-center p-4">
                    <div className="certification-icon-container mb-3">
                      {cert.useIcon ? (
                        <cert.icon className="certification-icon" />
                      ) : (
                        <img 
                          src={cert.logo} 
                          alt={cert.title} 
                          className="certification-logo"
                          style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <Card.Title className="certification-title">
                      {cert.title}
                    </Card.Title>
                    <Card.Text className="certification-description">
                      {cert.fullForm}
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
