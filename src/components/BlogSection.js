import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import OptimizedLogo from './OptimizedLogo';
import LazyImage from './LazyImage';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Journey of Premium Pulses: From Farm to Global Markets",
      excerpt: "Discover how MDM Group has been maintaining quality standards since 1980, ensuring every grain meets international export requirements.",
      image: "/assets/blog-pulses-journey.jpg",
      date: "October 15, 2024",
      author: "MDM Group",
      category: "Quality Assurance",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Global Standards in Pulse Processing: Our Commitment to Excellence",
      excerpt: "Learn about our state-of-the-art processing facilities and how we maintain global quality standards in every step of production.",
      image: "/assets/blog-processing.jpg",
      date: "October 10, 2024",
      author: "MDM Group",
      category: "Processing",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "45+ Years of Trust: Building Relationships Across Continents",
      excerpt: "The story of how MDM Group has built lasting relationships with customers worldwide through consistent quality and reliable service.",
      image: "/assets/blog-trust.jpg",
      date: "October 5, 2024",
      author: "MDM Group",
      category: "Legacy",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="blog-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-header">
              <h2 className="section-title">
                Latest from MDM Group
                <span className="since-badge ms-3">Since 1980</span>
              </h2>
              <p className="section-description">
                Stay updated with our latest insights, quality processes, and industry expertise. 
                Learn more about our commitment to premium quality pulses and global standards.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {blogPosts.map((post) => (
            <Col lg={4} md={6} className="mb-4" key={post.id}>
              <Card className="blog-card h-100">
                <div className="blog-image-container">
                  <LazyImage 
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    fallback={
                      <div className="blog-image-fallback">
                        <div className="fallback-content">
                          <OptimizedLogo 
                            height="60px" 
                            className="blog-logo"
                            showText={true}
                            textSize="1rem"
                            animate={false}
                          />
                          <div className="fallback-category">
                            <FaLeaf className="me-2" />
                            {post.category}
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <div className="blog-image-fallback" style={{display: 'none'}}>
                    <div className="fallback-content">
                      <OptimizedLogo 
                        height="60px" 
                        className="blog-logo"
                        showText={true}
                        textSize="1rem"
                        animate={false}
                      />
                      <div className="fallback-category">
                        <FaLeaf className="me-2" />
                        {post.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="blog-overlay">
                    <div className="blog-meta">
                      <span className="blog-category">
                        <FaLeaf className="me-1" />
                        {post.category}
                      </span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <div className="blog-meta-info mb-3">
                    <small className="text-muted">
                      <FaCalendarAlt className="me-1" />
                      {post.date}
                    </small>
                    <small className="text-muted ms-3">
                      <FaUser className="me-1" />
                      {post.author}
                    </small>
                  </div>
                  
                  <Card.Title className="blog-title">
                    {post.title}
                  </Card.Title>
                  
                  <Card.Text className="blog-excerpt flex-grow-1">
                    {post.excerpt}
                  </Card.Text>
                  
                  <Button variant="outline-primary" className="mt-auto blog-read-more">
                    Read More <FaArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Blog CTA Section */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="blog-cta">
              <OptimizedLogo 
                height="80px" 
                className="blog-cta-logo mb-3"
                showText={true}
                textSize="1.5rem"
                animate={true}
              />
              <h3 className="blog-cta-title">Stay Connected with MDM Group</h3>
              <p className="blog-cta-description">
                Subscribe to our newsletter for the latest updates on quality processes, 
                industry insights, and premium pulse innovations since 1980.
              </p>
              <Button variant="primary" size="lg" className="cta-button">
                Subscribe Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
