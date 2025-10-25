import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // High-quality pulse and lentil images showcasing different varieties
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      fallback: 'radial-gradient(circle at 30% 70%, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #FF7F50 100%)',
      alt: 'Close-up of premium yellow lentils and beans'
    },
    {
      src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      fallback: 'radial-gradient(circle at 70% 30%, #8B4513 0%, #D2691E 30%, #CD853F 60%, #F4A460 100%)',
      alt: 'Variety of pulses and legumes in sacks and containers'
    },
    {
      src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      fallback: 'radial-gradient(circle at 50% 50%, #8B0000 0%, #DC143C 30%, #FF6347 60%, #FFA07A 100%)',
      alt: 'Different types of red beans and kidney beans'
    },
    {
      src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      fallback: 'radial-gradient(circle at 40% 60%, #228B22 0%, #32CD32 30%, #90EE90 60%, #98FB98 100%)',
      alt: 'Glass jar filled with green lentils and mixed pulses'
    }
  ];

  const heroContent = [
    {
      title: "Since 1989 — Serving Trust in Every Grain",
      subtitle: "Heritage of Quality, Legacy of Trust",
      description: "Exporting the finest quality pulses worldwide with unmatched standards and unwavering commitment to excellence."
    },
    {
      title: "Global Quality. Indian Legacy",
      subtitle: "Meeting Global Standards",
      description: "Bridging traditional Indian heritage with international quality standards, delivering excellence across continents."
    },
    {
      title: "35+ Years of Trust. One Name — MDM Group",
      subtitle: "Since 1989, Nourishing the World",
      description: "Three and a half decades of consistent quality, reliability, and trust in premium pulse exports."
    },
    {
      title: "Since 1989, Nourishing the World with Quality Pulses",
      subtitle: "Heritage of Quality, Legacy of Trust",
      description: "From the heart of India to tables worldwide, ensuring premium nutrition and authentic taste in every grain."
    }
  ];

  // Preload images for faster loading
  useEffect(() => {
    const preloadImages = async () => {
      let loadedCount = 0;
      const totalImages = heroImages.length;
      
      const imagePromises = heroImages.map((heroImage, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            console.log(`Image ${index + 1} loaded successfully`);
            resolve(true);
          };
          img.onerror = () => {
            console.log(`Image ${index + 1} failed to load, using fallback`);
            resolve(false);
          };
          img.src = heroImage.src;
        });
      });
      
      try {
        const results = await Promise.all(imagePromises);
        const successfulLoads = results.filter(Boolean).length;
        console.log(`${successfulLoads}/${totalImages} images loaded successfully`);
        setImagesLoaded(successfulLoads > 0); // Set to true if at least one image loads
      } catch (error) {
        console.log('Error loading images, using fallbacks');
        setImagesLoaded(false);
      }
    };

    // Add a small delay to ensure component is mounted
    const timer = setTimeout(() => {
      preloadImages();
    }, 100);

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
            className={`hero-image ${index === currentImage ? 'active' : ''}`}
            style={{
              background: imagesLoaded 
                ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage.src})`
                : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ${heroImage.fallback}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
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
              <h1 className="hero-title mb-4">
                {heroContent[currentImage].title}
              </h1>
              
              <h2 className="hero-subtitle mb-4">
                {heroContent[currentImage].subtitle}
              </h2>
              
              <p className="hero-description mb-5">
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
                      <h5>35+ Years Legacy</h5>
                      <p>Trusted since 1989</p>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3 mb-3 cta-button">
                  Explore Products <FaArrowRight className="ms-2" />
                </Button>
                <Button variant="outline-light" size="lg" className="mb-3">
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
