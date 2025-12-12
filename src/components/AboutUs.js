import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  const timelineData = [
    {
      year: "1980",
      description: "Manish Dal Mill was established, marking the beginning of our family's journey in pulses processing under the leadership of Mr. Munnalal Bansal."
    },
    {
      year: "2002",
      description: "With increasing market demand, Ashish Pulses was established by Mr. Munnalal Bansal, adding new product lines and enhancing our processing capacity."
    },
    {
      year: "2009",
      description: "Keshav Pulses was set up by Mr. Munnalal Bansal, further strengthening our presence in the domestic pulses market."
    },
    {
      year: "2012",
      description: "The next generation stepped forward with Raghav Pulses, founded by Mr. Manish Bansal & Mr. Ashish Bansal, introducing modern practices and upgraded infrastructure."
    },
    {
      year: "2024",
      description: "MDM Proteins Pvt. Ltd. was established by Mr. Manish Bansal & Mr. Ashish Bansal, focusing on advanced technology and large-scale processing."
    },
    {
      year: "2025",
      description: "The company began exporting all pulses and grains globally, expanding its footprint across international markets."
    },
    {
      year: "NOW",
      description: "Group of Companies: Manish Dal Mill, Ashish Pulses, Keshav Pulses, Raghav Pulses, MDM Proteins Pvt. Ltd."
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
                From a modest start in 1980 to becoming a trusted name in the pulses and grains industry, Manish Dal Mill has steadily grown by embracing quality, innovation, and integrity. What began as a small mill founded by Mr. Munnala Bansal has today evolved into a multi-facility agro-processing group with a strong presence in both domestic and international markets.
              </p>
              <p className="section-description">
                Over the past four decades, we have expanded our capabilities from traditional milling to advanced processing, sorting, and global trading. With state-of-the-art infrastructure, a skilled team, and a commitment to consistent quality, MDM Group now caters to customers across India and around the world.
              </p>
              <p className="section-description">
                Carrying forward the legacy of our founder, we continue to uphold the core values of purity, trust, and reliability—ensuring that every grain and pulse we deliver meets the highest standards of excellence.
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
