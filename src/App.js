import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
// import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      {/* <BlogSection /> */}
      <Footer />
    </div>
  );
}

export default App;
