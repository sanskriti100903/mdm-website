import React, { useState, useEffect } from 'react';

const OptimizedLogo = ({ 
  className = '', 
  height = '50px', 
  showText = true, 
  textSize = '1.5rem',
  animate = false 
}) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Preload the logo for faster subsequent loads
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.onerror = () => {
      setLogoError(true);
      setLogoLoaded(true);
    };
    img.src = '/assets/logonew.jpg';
  }, []);

  if (!logoLoaded) {
    // Loading placeholder
    return (
      <div className={`logo-loading ${className}`} style={{ height }}>
        <div className="logo-skeleton" style={{ 
          width: height, 
          height, 
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />
      </div>
    );
  }

  if (logoError) {
    // Fallback text logo
    return (
      <div className={`logo-fallback ${className} ${animate ? 'logo-animate' : ''}`}>
        <div className="logo-text-container">
          <h3 className="logo-text" style={{ fontSize: textSize, margin: 0 }}>
            MDM GROUP
          </h3>
          {showText && (
            <span className="since-text" style={{ fontSize: `calc(${textSize} * 0.6)` }}>
              Since 1980
            </span>
          )}
        </div>
      </div>
    );
  }

  // Actual logo
  return (
    <div className={`logo-container ${className} ${animate ? 'logo-animate' : ''}`}>
      <img 
        src="/assets/logonew.jpg" 
        alt="MDM Group Logos - Premium Quality Pulses Since 1980" 
        className="logo-img"
        style={{ 
          height, 
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain'
        }}
        loading="eager" // Load immediately for above-the-fold content
      />
    </div>
  );
};

export default OptimizedLogo;
