import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import OptimizedHeroSection from './components/OptimizedHeroSection';
import WhyMDMSection from './components/WhyMDMSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Certification from './components/Certification';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import FloatingActionButtons from './components/FloatingActionButtons';
// import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

// Home Page Component
const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <OptimizedHeroSection />
      <WhyMDMSection />
      <ProductsSection />
      <WhyChooseUs />
      {/* <BlogSection /> */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <FloatingActionButtons />
    </Router>
  );
}

export default App;
