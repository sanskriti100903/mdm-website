import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';

const OptimizedHeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
  
  // Optimized hero images with progressive loading
  const heroImages = [
    {
      src: '/hero1.jpg',
      webp: '/hero1.webp', // Add WebP versions for better compression
      fallback: 'radial-gradient(circle at 30% 70%, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #FF7F50 100%)',
      alt: 'Premium quality mixed pulses and lentils',
      priority: 'high' // Load first
    },
    {
      src: '/hero2.jpg',
      webp: '/hero2.webp',
      fallback: 'radial-gradient(circle at 70% 30%, #8B4513 0%, #D2691E 30%, #CD853F 60%, #F4A460 100%)',
      alt: 'Variety of pulses and legumes in sacks and containers',
      priority: 'medium'
    },
    {
      src: '/hero3.png',
      webp: '/hero3.webp',
      fallback: 'radial-gradient(circle at 50% 50%, #8B0000 0%, #DC143C 30%, #FF6347 60%, #FFA07A 100%)',
      alt: 'Different types of red beans and kidney beans',
      priority: 'medium'
    },
    {
      src: '/hero4.jpg',
      webp: '/hero4.webp',
      fallback: 'radial-gradient(circle at 40% 60%, #228B22 0%, #32CD32 30%, #90EE90 60%, #98FB98 100%)',
      alt: 'Glass jar filled with green lentils and mixed pulses',
      priority: 'low' // Load last due to large size
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
    const loadImage = (heroImage, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        // Try WebP first, fallback to original format
        const testWebP = () => {
          const webpImg = new Image();
          webpImg.onload = () => {
            setLoadedImages(prev => new Set([...prev, index]));
            if (index === 0) setIsFirstImageLoaded(true);
            resolve(true);
          };
          webpImg.onerror = () => {
            // Fallback to original format
            img.onload = () => {
              setLoadedImages(prev => new Set([...prev, index]));
              if (index === 0) setIsFirstImageLoaded(true);
              resolve(true);
            };
            img.onerror = () => resolve(false);
            img.src = heroImage.src;
          };
          webpImg.src = heroImage.webp;
        };

        // Check if browser supports WebP
        if (window.createImageBitmap) {
          testWebP();
        } else {
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, index]));
            if (index === 0) setIsFirstImageLoaded(true);
            resolve(true);
          };
          img.onerror = () => resolve(false);
          img.src = heroImage.src;
        }
      });
    };

    // Load first image immediately
    loadImage(heroImages[0], 0);

    // Load other images with delay based on priority
    const loadRemainingImages = async () => {
      // Wait for first image to load
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Load medium priority images
      const mediumPriorityImages = heroImages
        .map((img, index) => ({ ...img, index }))
        .filter(img => img.priority === 'medium');
      
      for (const img of mediumPriorityImages) {
        await loadImage(img, img.index);
        await new Promise(resolve => setTimeout(resolve, 200)); // Small delay between loads
      }

      // Load low priority images last
      const lowPriorityImages = heroImages
        .map((img, index) => ({ ...img, index }))
        .filter(img => img.priority === 'low');
      
      for (const img of lowPriorityImages) {
        await loadImage(img, img.index);
      }
    };

    loadRemainingImages();
  }, []);

  // Auto-rotation with better timing
  useEffect(() => {
    if (!isFirstImageLoaded) return; // Don't start rotation until first image loads

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isFirstImageLoaded, heroImages.length]);

  const getImageSource = (heroImage, index) => {
    if (!loadedImages.has(index)) {
      return null; // Don't show image until loaded
    }

    // Try to use WebP if supported and loaded
    const supportsWebP = window.createImageBitmap;
    return supportsWebP ? heroImage.webp : heroImage.src;
  };

  const getBackgroundStyle = (heroImage, index) => {
    const imageSource = getImageSource(heroImage, index);
    
    if (imageSource) {
      return {
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageSource})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    
    return {
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ${heroImage.fallback}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        {heroImages.map((heroImage, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImage ? 'active' : ''} ${index === 0 ? 'hero-first' : ''}`}
            style={getBackgroundStyle(heroImage, index)}
            aria-label={heroImage.alt}
          />
        ))}
        
        {/* Loading indicator - only show if first image isn't loaded */}
        {!isFirstImageLoaded && (
          <div className="hero-loading">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading premium content...</p>
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
      
      {/* Image indicators - only show loaded images */}
      <div className="hero-indicators">
        {heroImages.map((heroImage, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''} ${loadedImages.has(index) ? 'loaded' : 'loading'}`}
            onClick={() => loadedImages.has(index) && setCurrentImage(index)}
            aria-label={`Switch to ${heroImage.alt}`}
            title={heroImage.alt}
            disabled={!loadedImages.has(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default OptimizedHeroSection;
