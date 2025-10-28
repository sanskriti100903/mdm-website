import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import OptimizedLogo from './OptimizedLogo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionNavClick = (sectionId) => {
    setExpanded(false);
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBrandClick = () => {
    setExpanded(false);
    // Scroll to top when brand/logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo" onClick={handleBrandClick}>
          <div className="logo-brand-container">
            <OptimizedLogo 
              height="65px" 
              className="header-logo"
              showText={false}
              animate={false}
            />
            <div className="brand-text-container">
              <h1 className="brand-name">MDM GROUP</h1>
              <span className="brand-tagline">Since 1989</span>
            </div>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" onClick={handleNavClick} className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick} className="nav-item">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/products" onClick={handleNavClick} className="nav-item">
              Products
            </Nav.Link>
            <Nav.Link onClick={() => handleSectionNavClick('certificates')} className="nav-item" style={{cursor: 'pointer'}}>
              Certificates
            </Nav.Link>
            <Button 
              as={Link}
              to="/contact" 
              onClick={handleNavClick} 
              className="contact-btn ms-2"
              variant="outline-primary"
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
