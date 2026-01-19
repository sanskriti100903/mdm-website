import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // High-quality pulse and lentil images showcasing different varieties
  const heroImages = [
    {
      src: '/hero1.jpg',
      fallback: 'radial-gradient(circle at 30% 70%, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #FF7F50 100%)',
      alt: 'Premium quality mixed pulses and lentils'
    },
    {
      src: '/hero2.jpg',
      fallback: 'radial-gradient(circle at 70% 30%, #8B4513 0%, #D2691E 30%, #CD853F 60%, #F4A460 100%)',
      alt: 'Variety of pulses and legumes in sacks and containers'
    },
    {
      src: '/hero3.jpg',
      fallback: 'radial-gradient(circle at 50% 50%, #8B0000 0%, #DC143C 30%, #FF6347 60%, #FFA07A 100%)',
      alt: 'Different types of red beans and kidney beans'
    },
    {
      src: '/hero4.jpg?v=3',
      fallback: 'radial-gradient(circle at 40% 60%, #228B22 0%, #32CD32 30%, #90EE90 60%, #98FB98 100%)',
      alt: 'Glass jar filled with green lentils and mixed pulses'
    }
  ];

  const heroContent = [
    {
      title: "Built on Quality, Backed by Trust",
      subtitle: "Heritage of Quality, Legacy of Trust",
      description: "Exporting the finest quality pulses worldwide with unmatched standards and unwavering commitment to excellence."
    },
    {
      title: "Built on Quality, Backed by Trust",
      subtitle: "Meeting Global Standards",
      description: "Bridging traditional Indian heritage with international quality standards, delivering excellence across continents."
    },
    {
      title: "India's Pride, Trusted Worldwide",
      subtitle: "Since 1980, Nourishing the World",
      description: "Four and a half decades of consistent quality, reliability, and trust in premium pulse exports."
    },
    {
      title: "India's Pride, Trusted Worldwide",
      subtitle: "Heritage of Quality, Legacy of Trust",
      description: "From the heart of India to tables worldwide, ensuring premium nutrition and authentic taste in every grain."
    }
  ];

  // Progressive image loading - load first image immediately, others on demand
  useEffect(() => {
    const loadImageProgressively = async () => {
      // Load first image immediately for faster initial display
      const firstImg = new Image();
      firstImg.onload = () => {
        console.log('First image loaded successfully');
        setImagesLoaded(true);
      };
      firstImg.onerror = () => {
        console.log('First image failed, using fallback');
        setImagesLoaded(false);
      };
      firstImg.src = heroImages[0].src;

      // Load remaining images in background with delays
      setTimeout(() => {
        heroImages.slice(1).forEach((heroImage, index) => {
          setTimeout(() => {
            const img = new Image();
            img.onload = () => console.log(`Background image ${index + 2} loaded`);
            img.onerror = () => console.log(`Background image ${index + 2} failed`);
            img.src = heroImage.src;
          }, index * 1000); // 1 second delay between each image
        });
      }, 2000); // Start loading others after 2 seconds
    };

    const timer = setTimeout(loadImageProgressively, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Increased to 6 seconds for better readability

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        {heroImages.map((heroImage, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImage ? 'active' : ''} ${index === 0 ? 'hero-first' : ''}`}
            style={{
              background: imagesLoaded 
                ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage.src})`
                : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ${heroImage.fallback}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1a1a1a'
            }}
            aria-label={heroImage.alt}
          />
        ))}
        
        {/* Loading indicator */}
        {!imagesLoaded && (
          <div className="hero-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
      
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={8} md={10} className="mx-auto text-center">
            <div className="hero-text-content">
              <h1 className="hero-title-enhanced mb-5">
                {heroContent[currentImage].title}
              </h1>
              
              <p className="hero-description-enhanced mb-5">
                {heroContent[currentImage].description}
              </p>
              
              <div className="hero-features mb-5">
                <Row>
                  <Col md={4} className="mb-3">
                    <div className="feature-item">
                      <FaGlobe className="feature-icon" />
                      <h5>Global Reach</h5>
                      <p>Exporting worldwide</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="feature-item">
                      <FaShieldAlt className="feature-icon" />
                      <h5>Premium Quality</h5>
                      <p>International standards</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="feature-item">
                      <FaStar className="feature-icon" />
                      <h5>45+ Years Legacy</h5>
                      <p>Trusted since 1980</p>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="hero-buttons">
                <Button as={Link} to="/products" variant="primary" size="lg" className="me-3 mb-3 cta-button">
                  Explore Products <FaArrowRight className="ms-2" />
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg" className="mb-3 contact-button">
                  Contact Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Image indicators */}
      <div className="hero-indicators">
        {heroImages.map((heroImage, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Switch to ${heroImage.alt}`}
            title={heroImage.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
