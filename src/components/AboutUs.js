import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  const timelineData = [
    {
      year: "1960",
      description: "M/s Ramsahaya Pannalal established by proprietor Ramniwas Ji Agrawal in our home in Indore, India"
    },
    {
      year: "1979",
      description: "Open a new firm \"Ramniwas Jagdishchandra\" and started milling pulses"
    },
    {
      year: "1996",
      description: "Set up our first manufacturing plant in Indore"
    },
    {
      year: "2006",
      description: "Established our second manufacturing unit for milling unhusked pulses"
    },
    {
      year: "2018",
      description: "From Indore to the globe – started exporting pulses"
    },
    {
      year: "2023",
      description: "Established our third and fully automatic plant"
    },
    {
      year: "Now",
      description: "Group of Companies: Ramniwas Jagdishchandra, R J Pulses, R J Agro Industries"
    }
  ];

  const leadershipTeam = [
    {
      name: "Ramniwas Ji Agrawal",
      position: "Director",
      image: "https://via.placeholder.com/300x300/15803d/ffffff?text=Director",
      description: "Founder and visionary leader with over 60 years of experience in pulse processing industry."
    },
    {
      name: "Jagdish Agrawal",
      position: "Sub-Director",
      image: "https://via.placeholder.com/300x300/16a34a/ffffff?text=Sub-Director",
      description: "Strategic leader driving innovation and expansion in global markets."
    },
    {
      name: "Rajesh Kumar",
      position: "Head of Operations",
      image: "https://via.placeholder.com/300x300/22c55e/ffffff?text=Head",
      description: "Overseeing manufacturing operations and quality control across all facilities."
    },
    {
      name: "Priya Sharma",
      position: "Sub-Head Marketing",
      image: "https://via.placeholder.com/300x300/4ade80/ffffff?text=Sub-Head",
      description: "Leading marketing initiatives and brand development for global expansion."
    }
  ];

  return (
    <div className="about-us-page">
      <Header />
      
      {/* About Us Hero Section */}
      <section className="products-hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="products-hero-title">About MDM Group</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="timeline-title text-center mb-5">Our Journey Through Time</h2>
              <div className="timeline-container">
                <div className="timeline-line"></div>
                {timelineData.map((item, index) => (
                  <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-marker">
                      <div className="timeline-diamond"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-item-year">{item.year}</h3>
                      <p className="timeline-item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="leadership-title text-center mb-5">Our Leadership Team</h2>
              <p className="leadership-subtitle text-center mb-5">
                Meet the visionary leaders who drive our company's success and innovation
              </p>
            </div>
          </div>
          <div className="row">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="leadership-card">
                  <div className="leadership-image-container">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="leadership-image"
                    />
                    <div className="leadership-overlay">
                      <div className="leadership-overlay-content">
                        <h4 className="leadership-name">{leader.name}</h4>
                        <p className="leadership-position">{leader.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className="leadership-info">
                    <h4 className="leadership-card-name">{leader.name}</h4>
                    <p className="leadership-card-position">{leader.position}</p>
                    <p className="leadership-description">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title">Our Legacy</h2>
              <p className="section-description">
                From humble beginnings in 1960 to becoming a leading pulse processing company, 
                MDM Group has consistently evolved to meet the changing needs of the global market. 
                Our journey spans over six decades of dedication, innovation, and unwavering commitment 
                to quality.
              </p>
              <p className="section-description">
                Today, we operate multiple state-of-the-art manufacturing facilities and export 
                our premium pulses worldwide, maintaining the trust and quality standards established 
                by our founder, Ramniwas Ji Agrawal.
              </p>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-description">
                To be the global leader in pulse processing, delivering premium quality products 
                while maintaining sustainable practices and contributing to food security worldwide.
              </p>
              <h2 className="section-title mt-4">Our Mission</h2>
              <p className="section-description">
                To provide the highest quality pulses through innovative processing techniques, 
                sustainable farming partnerships, and a commitment to excellence that honors 
                our rich heritage while embracing modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
