import React, { useState, useEffect, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: FaShieldAlt,
      title: "Quality & Safety",
      description: "Rigorous quality control with highest safety standards for consistent excellence.",
      color: "#28a745",
      gradient: "linear-gradient(135deg, #28a745, #20c997)"
    },
    {
      icon: FaGlobe,
      title: "Global Standards",
      description: "International certifications making us a trusted global supplier.",
      color: "#007bff",
      gradient: "linear-gradient(135deg, #007bff, #17a2b8)"
    },
    {
      icon: FaUsers,
      title: "Customer Relations",
      description: "Exceptional service and transparency for lasting partnerships.",
      color: "#fd7e14",
      gradient: "linear-gradient(135deg, #fd7e14, #ffc107)"
    },
    {
      icon: FaBoxes,
      title: "Product Variety",
      description: "Complete range of premium pulses from Toor to Rajma.",
      color: "#6f42c1",
      gradient: "linear-gradient(135deg, #6f42c1, #e83e8c)"
    },
    {
      icon: FaCertificate,
      title: "Certified Processing",
      description: "State-of-the-art facilities ensuring product integrity.",
      color: "#dc3545",
      gradient: "linear-gradient(135deg, #dc3545, #fd7e14)"
    },
    {
      icon: FaLeaf,
      title: "Natural Products",
      description: "Pure pulses without additives, preserving authentic taste.",
      color: "#20c997",
      gradient: "linear-gradient(135deg, #20c997, #28a745)"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Global Presence",
      description: "Worldwide distribution network across multiple countries.",
      color: "#ffc107",
      gradient: "linear-gradient(135deg, #ffc107, #fd7e14)"
    },
    {
      icon: FaAward,
      title: "35+ Years Legacy",
      description: "Excellence and trust since 1989 in pulses trading.",
      color: "#e83e8c",
      gradient: "linear-gradient(135deg, #e83e8c, #6f42c1)"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section py-5" ref={sectionRef}>
      <Container fluid className="px-0">
        <Row className="align-items-center min-vh-100 g-0">
          {/* Left Side - Big Heading */}
          <Col lg={5} className={`why-choose-left ${isVisible ? 'animate-in' : ''}`}>
            <div className="heading-container">
              <div className="heading-background-text">MDM</div>
              <h1 className="why-choose-main-title">
                <span className="title-line-1">Why Choose</span>
                <span className="title-line-2">MDM</span>
                <span className="title-question">?</span>
              </h1>
              <p className="why-choose-tagline">
                Quality so consistent, it defines our name.
              </p>
              <div className="heading-decorative-line"></div>
            </div>
          </Col>

          {/* Right Side - Feature Points */}
          <Col lg={7} className="why-choose-right">
            <div className="features-container">
              <Row className="g-3">
                {features.map((feature, index) => (
                  <Col md={6} className="mb-3" key={index}>
                    <div 
                      className={`feature-point ${isVisible ? 'feature-visible' : ''}`}
                      style={{ 
                        transitionDelay: isVisible ? `${index * 0.1}s` : '0s'
                      }}
                    >
                      <div className="feature-point-icon">
                        <feature.icon style={{ color: '#28a745' }} />
                      </div>
                      <div className="feature-point-content">
                        <h4 className="feature-point-title">
                          {feature.title}
                        </h4>
                        <p className="feature-point-description">
                          {feature.description}
                        </p>
                      </div>
                      <div 
                        className="feature-point-glow"
                        style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}
                      ></div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Trust Section */}
        <Row className="mt-5 pt-5">
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
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
