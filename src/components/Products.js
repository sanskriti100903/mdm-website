import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaStar } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import FastLoadImage from './FastLoadImage';

const Products = () => {
  const products = [
    {
      name: "Toor Dall (Pigeon Pea)",
      image: "/toor.webp?v=3",
      varieties: ["Indian Toor Dall", "African Toor Dall"],
      description: "Sortex-cleaned Toor Dall of Indian and African origin, available in all qualities.",
      features: ["Indian & African Origin", "Sortex-cleaned", "All Qualities"],
      category: "Pulses"
    },
    {
      name: "Moong Dall",
      image: "/moong.jpg", 
      varieties: ["Moong Whole","Unskinned Split Moong", "Skinned Split Moong"],
      description: "Indian origin sortex-cleaned Moong Whole and Moong Dall, available in all qualities.",
      features: ["Indian Origin", "Sortex-cleaned", "All Qualities"],
      category: "Pulses"
    },
    {
      name: "Chana Dall ",
      image: "/chana.jpg",
      varieties: [],
      description: "Sortex-cleaned Chana Dall of Indian origin, available in all quality grades.",
      features: ["Indian Origin", "Sortex-cleaned", "All Quality Grades"],
      category: "Pulses"
    },
    {
      name: "Urad Dall",
      image: "/urad.jpg",
      varieties: ["urad whole","Skinned split urad", "Unskinned split urad", "Unskinned whole(Gota)"],
      description: "Sortex-cleaned Urad Whole and Urad Dall, available in all qualities and types.",
      features: ["Sortex-cleaned", "All Qualities", "All Types"],
      category: "Pulses"
    },
    {
      name: "Kabuli Chana (Chickpeas)",
      image: "/kabuli.webp?v=3",
      varieties: ["42/44 Count", "44/46 Count", "58/60 Count"],
      description: "Sortex-cleaned Kabuli Chana, available in all count grades.",
      features: ["Sortex-cleaned", "All Count Grades", "Premium Quality"],
      category: "Pulses"
    },
    {
      name: "Masoor Dall (Red Lentils)",
      image: "/masoor.webp?v=3",
      varieties: ["Whole Masoor", "Split Masoor", "Indian & Imported"],
      description: "Sortex-cleaned Masoor Whole and Masoor Dall, available in all quality grades.",
      features: ["Sortex-cleaned", "Whole & Split", "All Quality Grades"],
      category: "Pulses"
    },
    {
      name: "Rajma",
      image: "/rajma.webp?v=3",
      varieties: ["Chitra", "Red"],
      description: "Sortex-cleaned Rajma of Indian origin, available in all grades.",
      features: ["Indian Origin", "Sortex-cleaned", "All Grades"],
      category: "Pulses"
    },
    {
      name: "Jowar (Sorghum)",
      image: "/jowar.jpg",
      varieties: ["Flour Grade", "Feed Grade", "Whole"],
      description: "Sortex-cleaned Jowar available in Flour, Feed, and Whole forms, across all quality grades.",
      features: ["Sortex-cleaned", "Multiple Forms", "All Quality Grades"],
      category: "Grains"
    },
    {
      name: "Bajra (Pearl Millet)",
      image: "/bajra.jpg?v=3",
      varieties: ["Flour Grade", "Feed Grade"],
      description: "Sortex-cleaned Bajra available in Flour Grade and Feed Grade, in all qualities.",
      features: ["Sortex-cleaned", "Flour & Feed Grade", "All Qualities"],
      category: "Grains"
    },
    {
      name: "Maize (Corn / Makka)",
      image: "/corn.jpg",
      varieties: ["Corn Meal ", "Gacked Corn", "Feed Quality"],
      description: "Food-grade, feed-grade, and industrial maize available. Clean, machine-sorted, all quality options.",
      features: ["Multi-Grade", "Machine Sorted", "All Quality Options"],
      category: "Grains"
    },
    {
      name: "Wheat (Gehu)",
      image: "/wheat.webp?v=3",
      varieties: [],
      description: "Premium milling-grade and food-grade wheat. Available in all quality specifications.",
      features: ["Milling Grade", "Food Grade", "All Specifications"],
      category: "Grains"
    },
    {
      name: "Chawla (Lobia)",
      image: "/lobia.webp?v=3",
      varieties: ["Indian Quality", "Imported Quality", "All Grades"],
      description: "Sortex-cleaned Lobia, available in all quality grades.",
      features: ["Sortex-cleaned", "All Quality Grades", "High Quality"],
      category: "Pulses"
    },
    {
      name: "Rice (Chawal)",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Basmati", "Non-Basmati", "Sona Masoori"],
      description: "Basmati, Non-Basmati, Sona Masoori. Full range of qualities available.",
      features: ["Full Range", "All Qualities", "Multiple Varieties"],
      category: "Grains"
    },
    {
      name: "Soybean",
      image: "/soyabean.webp?v=3",
      varieties: ["Food Grade", "Oil Extraction"],
      description: "High-protein soybeans, ideal for food and oil extraction. Available in multiple quality grades.",
      features: ["High Protein", "Food & Oil Use"],
      category: "Grains"
    },
    {
      name: "Desi Chana (Brown Chickpeas)",
      image: "/channa.jpg",
      varieties: ["India Origin"],
      description: "Sortex-cleaned Whole Chana of Indian origin, available in all quality grades.",
      features: ["Indian Origin", "Sortex-cleaned", "All Quality Grades"],
      category: "Pulses"
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
                    <FastLoadImage 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      loading="lazy"
                      priority={index < 3}
                      quality="medium"
                      style={{ height: '250px', width: '100%', objectFit: 'cover' }}
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
                    <FastLoadImage 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      loading="lazy"
                      priority={index < 3}
                      quality="medium"
                      style={{ height: '250px', width: '100%', objectFit: 'cover' }}
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
