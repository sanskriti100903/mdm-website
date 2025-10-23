import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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
        <Navbar.Brand href="#home" className="brand-logo">
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
            <Nav.Link href="#home" onClick={handleNavClick} className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick} className="nav-item">
              About Us
            </Nav.Link>
            <Nav.Link href="#products" onClick={handleNavClick} className="nav-item">
              Products
            </Nav.Link>
            <Nav.Link href="#certificates" onClick={handleNavClick} className="nav-item">
              Certificates
            </Nav.Link>
            <Button 
              href="#contact" 
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
