import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaStar, FaGlobe } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const Products = () => {
  const products = [
    {
      name: "Toor Dal",
      image: "/toor.jpg",
      varieties: ["Desi Toor Dal", "Oily Toor Dal"],
      description: "Premium quality Toor Dal, rich in protein and essential nutrients. Carefully processed to maintain natural taste and nutritional value.",
      features: ["High Protein", "Natural Processing", "Export Quality"],
      category: "Pulses"
    },
    {
      name: "Moong Dal",
      image: "/moong.jpg", 
      varieties: ["Whole Moong", "Split Moong"],
      description: "Fresh and pure Moong Dal, perfect for daily cooking. Known for its digestibility and high nutritional content.",
      features: ["Easy to Digest", "Rich in Fiber", "Premium Grade"],
      category: "Pulses"
    },
    {
      name: "Chana Dal",
      image: "/chana.jpg",
      varieties: ["Bengal Gram", "Roasted Chana"],
      description: "Golden yellow Chana Dal with authentic taste and aroma. Sourced from the finest farms and processed with care.",
      features: ["Rich in Protein", "Natural Color", "Farm Fresh"],
      category: "Pulses"
    },
    {
      name: "Urad Dal",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Black Urad", "Split Urad"],
      description: "Pure black Urad Dal, essential for South Indian cuisine. Maintains traditional taste and quality standards.",
      features: ["Traditional Quality", "Pure & Natural", "Export Standard"],
      category: "Pulses"
    },
    {
      name: "Kabuli Chana",
      image: "/kabuli.jpg",
      varieties: ["Large Kabuli", "Premium Kabuli"],
      description: "Large, premium Kabuli Chana with excellent texture. Perfect for various culinary preparations worldwide.",
      features: ["Large Size", "Premium Quality", "Global Standards"],
      category: "Pulses"
    },
    {
      name: "Masoor Dal",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Red Masoor Dal", "Whole Masoor", "Split Masoor Dal"],
      description: "Red Masoor Dal with rich color and taste. Quick cooking and highly nutritious for healthy meals. Excellent source of iron and protein.",
      features: ["Quick Cooking", "Rich in Iron", "Nutritious"],
      category: "Pulses"
    },
    {
      name: "Rajma",
      image: "/rajma.jpg",
      varieties: ["Red Kidney Beans", "White Rajma", "Jammu Rajma"],
      description: "Premium quality Rajma beans, perfect for traditional recipes. Carefully selected and processed for best taste. Rich in protein and fiber.",
      features: ["Premium Beans", "Traditional Taste", "Export Quality"],
      category: "Pulses"
    },
    {
      name: "Jowar",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["White Jowar", "Red Jowar", "Hybrid Jowar"],
      description: "High-quality Jowar (Sorghum) grains, rich in fiber and gluten-free. Perfect for healthy and nutritious meals. Ancient grain with modern benefits.",
      features: ["Gluten-Free", "High Fiber", "Nutritious"],
      category: "Grains"
    },
    {
      name: "Bajra",
      image: "/bajra.jpg",
      varieties: ["Pearl Millet", "Hybrid Bajra", "Traditional Bajra"],
      description: "Premium Bajra (Pearl Millet) with excellent nutritional value. Rich in protein and essential minerals. Drought-resistant super grain.",
      features: ["High Protein", "Rich in Iron", "Mineral Rich"],
      category: "Grains"
    },
    {
      name: "Maize",
      image: "/corn.jpg",
      varieties: ["Yellow Maize", "White Maize", "Sweet Corn"],
      description: "Fresh and premium quality Maize (Corn) kernels. Versatile grain perfect for various food preparations. High energy content grain.",
      features: ["Versatile", "Fresh Quality", "Export Grade"],
      category: "Grains"
    },
    {
      name: "Wheat",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Durum Wheat", "Hard Wheat", "Soft Wheat"],
      description: "Superior quality Wheat grains with high protein content. Carefully selected for optimal nutrition and taste. Staple grain for global consumption.",
      features: ["High Protein", "Premium Grade", "Nutritious"],
      category: "Grains"
    },
    {
      name: "Lobia",
      image: "/lobia.jpg",
      varieties: ["Black-eyed Peas", "White Lobia", "Red Lobia"],
      description: "High-quality Lobia (Black-eyed peas) with rich protein content. Excellent for traditional Indian recipes and nutritious meals.",
      features: ["High Protein", "Traditional", "Nutritious"],
      category: "Pulses"
    },
    {
      name: "Rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Basmati Rice", "Non-Basmati Rice", "Parboiled Rice"],
      description: "Premium quality Rice with excellent aroma and taste. Perfect for daily consumption and export markets. Long grain aromatic varieties available.",
      features: ["Aromatic", "Premium Quality", "Export Standard"],
      category: "Grains"
    }
  ];

  return (
    <div className="products-page">
      <Header />
      
      {/* Products Hero Section */}
      <section className="products-hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="products-hero-title">Our Premium Products</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <Container>
          {/* Pulses Section */}
          <Row className="mb-5">
            <Col lg={12}>
              <h2 className="products-category-title">
                <FaLeaf className="me-2" />
                Premium Pulses
              </h2>
            </Col>
          </Row>
          
          <Row className="g-3 mb-5">
            {products.filter(product => product.category === "Pulses").map((product, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="product-detail-card h-100">
                  <div className="product-detail-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBwcm9kdWN0Lm5hbWUgKyAnPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="product-varieties-permanent">
                      {product.varieties.map((variety, idx) => (
                        <div key={idx} className="variety-item-permanent">
                          {variety}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-detail-name">
                      {product.name}
                      <FaStar className="quality-star ms-2" />
                    </Card.Title>
                    
                    <Card.Text className="product-detail-description">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Grains Section */}
          <Row className="mb-5">
            <Col lg={12}>
              <h2 className="products-category-title">
                <FaLeaf className="me-2" />
                Premium Grains & Cereals
              </h2>
            </Col>
          </Row>
          
          <Row className="g-3">
            {products.filter(product => product.category === "Grains").map((product, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="product-detail-card h-100">
                  <div className="product-detail-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBwcm9kdWN0Lm5hbWUgKyAnPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="product-varieties-permanent">
                      {product.varieties.map((variety, idx) => (
                        <div key={idx} className="variety-item-permanent">
                          {variety}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-detail-name">
                      {product.name}
                      <FaStar className="quality-star ms-2" />
                    </Card.Title>
                    
                    <Card.Text className="product-detail-description">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
