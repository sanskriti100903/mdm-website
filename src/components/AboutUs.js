import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  const timelineData = [
    {
      year: "1980",
      description: "Manish Bansal established Manish Dall Mill, beginning our journey in pulse processing"
    },
    {
      year: "2002",
      description: "Ashish Bansal founded Ashish Pulses, expanding our family business operations"
    },
    {
      year: "2009",
      description: "Keshav Bansal launched Keshav Pulses, further strengthening our market presence"
    },
    {
      year: "2012",
      description: "Raghav Bansal established Raghav Pulses, continuing the family legacy in pulse industry"
    },
    {
      year: "2024",
      description: "MDM Proteins Pvt Ltd founded, marking our expansion into protein processing and modern manufacturing"
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
                To become a globally recognized and trusted agro-processing group, known for quality, innovation, and a strong legacy built over generations.
              </p>
              <h2 className="section-title mt-4">Our Mission</h2>
              <p className="section-description">
                To deliver premium-quality pulses and grains through modern processing, ethical business practices, and continuous improvement—while expanding our presence across India and international markets.
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
