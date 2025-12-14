import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaStar, FaGlobe } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import LazyImage from './LazyImage';

const Products = () => {
  const products = [
    {
      name: "Toor Dal (Pigeon Pea / Arhar Dal)",
      image: "/toor.jpg",
      varieties: ["Desi Toor", "African Toor", "Sortexed Option"],
      description: "Available in Desi Toor and African Toor, all grades and qualities. Sortexed option available.",
      features: ["Desi & African", "All Grades", "Sortexed Available"],
      category: "Pulses"
    },
    {
      name: "Moong Dal (Green Gram / Mung Bean Split)",
      image: "/moong.jpg", 
      varieties: ["Mogar", "Skinned Split Moong", "Indian & Imported"],
      description: "Available in Mogar and Skinned Split Moong. Indian + imported varieties in all qualities.",
      features: ["Mogar Available", "Skinned Split", "Indian & Imported"],
      category: "Pulses"
    },
    {
      name: "Chana Dal (Split Bengal Gram / Chickpea Split)",
      image: "/chana.jpg",
      varieties: ["Consistent Grain Size", "All Qualities", "All Grades"],
      description: "High-quality processed Chana Dal with consistent grain size. All qualities and grades available.",
      features: ["Consistent Size", "All Qualities", "All Grades"],
      category: "Pulses"
    },
    {
      name: "Urad Dal",
      image: "/urad.png",
      varieties: ["Gota", "White Split", "Black Split"],
      description: "Premium Black Gram (Urad / Black Lentils) available in Gota, White Split, and Black Split varieties. Clean, consistent, and offered in all quality grades.",
      features: ["Multiple Varieties", "Clean & Consistent", "All Quality Grades"],
      category: "Pulses"
    },
    {
      name: "Kabuli Chana (Chickpeas / Garbanzo Beans)",
      image: "/kabuli.jpg",
      varieties: ["38/40 Count", "40/42 Count", "42/44 Count"],
      description: "Available in all size counts (38/40, 40/42, 42/44, etc.). Premium Indian & imported qualities.",
      features: ["All Size Counts", "Premium Quality", "Indian & Imported"],
      category: "Pulses"
    },
    {
      name: "Masoor Dal (Red Lentils / Lens Culinaris)",
      image: "/masoor.png",
      varieties: ["Whole Masoor", "Split Masoor", "Indian & Imported"],
      description: "Whole and split varieties available—Indian & imported. Uniform grain, multiple quality options.",
      features: ["Whole & Split", "Uniform Grain", "Multiple Quality Options"],
      category: "Pulses"
    },
    {
      name: "Rajma",
      image: "/rajma.jpg",
      varieties: ["Chitra", "Red", "Jammu"],
      description: "High-quality Kidney Beans available in Chitra, Red, and Jammu variants. Uniform size, well-cleaned, and offered in all grades and qualities.",
      features: ["Multiple Variants", "Uniform Size", "Well-Cleaned"],
      category: "Pulses"
    },
    {
      name: "Jowar (Sorghum)",
      image: "/jowar.jpg",
      varieties: ["All Grades", "Flour Grade", "Industrial Use"],
      description: "Machine-cleaned grains available in all grades. Suitable for flour and industrial use.",
      features: ["Machine Cleaned", "All Grades", "Multi-Purpose"],
      category: "Grains"
    },
    {
      name: "Bajra (Pearl Millet)",
      image: "/bajra.png",
      varieties: ["Uniform Grain Size", "All Qualities", "Indian Quality"],
      description: "High-quality Indian bajra with uniform grain size. All qualities available.",
      features: ["Uniform Size", "Indian Quality", "All Qualities"],
      category: "Grains"
    },
    {
      name: "Maize (Corn / Makka)",
      image: "/corn.jpg",
      varieties: ["Food Grade", "Feed Grade", "Industrial Grade"],
      description: "Food-grade, feed-grade, and industrial maize available. Clean, machine-sorted, all quality options.",
      features: ["Multi-Grade", "Machine Sorted", "All Quality Options"],
      category: "Grains"
    },
    {
      name: "Wheat (Gehu / Whole Wheat Grain)",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Milling Grade", "Food Grade", "All Quality Specs"],
      description: "Premium milling-grade and food-grade wheat. Available in all quality specifications.",
      features: ["Milling Grade", "Food Grade", "All Specifications"],
      category: "Grains"
    },
    {
      name: "Chawla / Lobia (Black-Eyed Beans / Cowpeas)",
      image: "/lobia.jpg",
      varieties: ["Indian Quality", "Imported Quality", "All Grades"],
      description: "High-quality Indian & imported black-eyed beans. All grades available.",
      features: ["Indian & Imported", "All Grades", "High Quality"],
      category: "Pulses"
    },
    {
      name: "Rice (Chawal / Oryza Sativa)",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Basmati", "Non-Basmati", "Sona Masoori", "Broken Rice"],
      description: "Basmati, Non-Basmati, Sona Masoori, and Broken Rice. Full range of qualities available.",
      features: ["Full Range", "All Qualities", "Multiple Varieties"],
      category: "Grains"
    },
    {
      name: "Soybean",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      varieties: ["Food Grade", "Oil Extraction", "Multiple Quality Grades"],
      description: "High-protein soybeans, ideal for food and oil extraction. Available in multiple quality grades.",
      features: ["High Protein", "Food & Oil Use", "Multiple Grades"],
      category: "Grains"
    },
    {
      name: "Desi Chana (Brown Chickpeas / Kala Chana)",
      image: "/chana.jpg",
      varieties: ["Machine Sorted", "Premium Grade", "Export Quality"],
      description: "Clean, machine-sorted grains with consistent quality.",
      features: ["Machine Sorted", "Consistent Quality", "Clean Grains"],
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
                    <LazyImage 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      fallback={
                        <div className="product-image-fallback" style={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: '#f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#999',
                          fontSize: '16px'
                        }}>
                          {product.name}
                        </div>
                      }
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
                    <LazyImage 
                      src={product.image}
                      alt={product.name}
                      className="product-detail-image"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      fallback={
                        <div className="product-image-fallback" style={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: '#f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#999',
                          fontSize: '16px'
                        }}>
                          {product.name}
                        </div>
                      }
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
