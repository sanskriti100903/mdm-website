import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaLeaf, FaStar } from 'react-icons/fa';

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      name: "Toor Dal",
      image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium quality Toor Dal, rich in protein and essential nutrients. Carefully processed to maintain natural taste and nutritional value.",
      features: ["High Protein", "Natural Processing", "Export Quality"]
    },
    {
      name: "Moong Dal",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Fresh and pure Moong Dal, perfect for daily cooking. Known for its digestibility and high nutritional content.",
      features: ["Easy to Digest", "Rich in Fiber", "Premium Grade"]
    },
    {
      name: "Chana Dal",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Golden yellow Chana Dal with authentic taste and aroma. Sourced from the finest farms and processed with care.",
      features: ["Rich in Protein", "Natural Color", "Farm Fresh"]
    },
    {
      name: "Urad Dal",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Pure black Urad Dal, essential for South Indian cuisine. Maintains traditional taste and quality standards.",
      features: ["Traditional Quality", "Pure & Natural", "Export Standard"]
    },
    {
      name: "Kabuli Chana",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Large, premium Kabuli Chana with excellent texture. Perfect for various culinary preparations worldwide.",
      features: ["Large Size", "Premium Quality", "Global Standards"]
    },
    {
      name: "Masoor Dal",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Red Masoor Dal with rich color and taste. Quick cooking and highly nutritious for healthy meals.",
      features: ["Quick Cooking", "Rich in Iron", "Nutritious"]
    },
    {
      name: "Rajma",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium quality Rajma beans, perfect for traditional recipes. Carefully selected and processed for best taste.",
      features: ["Premium Beans", "Traditional Taste", "Export Quality"]
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  };

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <Row className="mb-3">
          <Col lg={12} className="text-center">
            <div className="section-header-compact">
              <h2 className="section-title mb-0">
                Our Premium Products
              </h2>
            </div>
          </Col>
        </Row>

        <div className="products-carousel">
          <Row className="products-grid g-2">
            {getCurrentProducts().map((product, index) => (
              <Col lg={3} md={6} className="mb-3" key={`${currentIndex}-${index}`}>
                <Card className="product-card h-100">
                  <div className="product-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBwcm9kdWN0Lm5hbWUgKyAnPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="product-overlay">
                      <div className="product-features">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="feature-badge">
                            <FaLeaf className="me-1" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-name">
                      {product.name}
                      <FaStar className="quality-star ms-2" />
                    </Card.Title>
                    <Card.Text className="product-description flex-grow-1">
                      {product.description}
                    </Card.Text>
                    <Button variant="outline-primary" className="mt-auto">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Navigation Controls - Only Arrow Buttons */}
          {totalPages > 1 && (
            <div className="carousel-controls d-flex justify-content-center align-items-center mt-4">
              <Button 
                variant="outline-primary" 
                className="carousel-btn me-4"
                onClick={prevSlide}
              >
                <FaArrowLeft />
              </Button>
              
              <Button 
                variant="outline-primary" 
                className="carousel-btn ms-4"
                onClick={nextSlide}
              >
                <FaArrowRight />
              </Button>
            </div>
          )}
        </div>

        {/* Quality Assurance Section */}
        <Row className="mt-5 pt-5">
          <Col lg={10} className="mx-auto text-center">
            <div className="quality-section">
              <h3 className="quality-title mb-4">
                Premium Quality & Variety
              </h3>
              <p className="quality-description">
                Our extensive range of pulses represents the finest quality available in the market. 
                Each variety is carefully selected, processed using modern techniques, and packaged 
                to preserve freshness and nutritional value. With over 35 years of experience since 1989, 
                we ensure that every grain meets international export standards while maintaining 
                the authentic taste and quality our customers trust.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsSection;
