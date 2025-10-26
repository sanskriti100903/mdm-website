import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaStar } from 'react-icons/fa';

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      name: "Toor Dal",
      image: "/toor.jpg",
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
      image: "/chana.jpg",
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
      image: "/kabuli.jpg",
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
      image: "/rajma.jpg",
      description: "Premium quality Rajma beans, perfect for traditional recipes. Carefully selected and processed for best taste.",
      features: ["Premium Beans", "Traditional Taste", "Export Quality"]
    },
    {
      name: "Jowar",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-quality Jowar (Sorghum) grains, rich in fiber and gluten-free. Perfect for healthy and nutritious meals.",
      features: ["Gluten-Free", "High Fiber", "Nutritious"]
    },
    {
      name: "Bajra",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium Bajra (Pearl Millet) with excellent nutritional value. Rich in protein and essential minerals.",
      features: ["High Protein", "Rich in Iron", "Mineral Rich"]
    },
    {
      name: "Maize",
      image: "/corn.jpg",
      description: "Fresh and premium quality Maize (Corn) kernels. Versatile grain perfect for various food preparations.",
      features: ["Versatile", "Fresh Quality", "Export Grade"]
    },
    {
      name: "Wheat",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Superior quality Wheat grains with high protein content. Carefully selected for optimal nutrition and taste.",
      features: ["High Protein", "Premium Grade", "Nutritious"]
    },
    {
      name: "Rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium quality Rice with excellent aroma and taste. Perfect for daily consumption and export markets.",
      features: ["Aromatic", "Premium Quality", "Export Standard"]
    },
    {
      name: "Lobia",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-quality Lobia (Black-eyed peas) with rich protein content. Excellent for traditional Indian recipes.",
      features: ["High Protein", "Traditional", "Nutritious"]
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  };

  return (
    <section id="products" className="products-section">
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
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Dot Indicators */}
          {totalPages > 1 && (
            <div className="carousel-indicators d-flex justify-content-center align-items-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </Container>
    </section>
  );
};

export default ProductsSection;
