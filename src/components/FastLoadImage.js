import React, { useState, useEffect } from 'react';

const FastLoadImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  loading = 'lazy',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
    // Simple fallback
    const fallback = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%23999' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(alt || 'Image')}%3C/text%3E%3C/svg%3E`;
    setImageSrc(fallback);
    setIsLoaded(true);
  };

  return (
    <div className={`fast-load-image-container ${className}`} style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      {!isLoaded && !hasError && (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e9ecef',
            borderTop: '3px solid #16a34a',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`fast-load-image ${isLoaded ? 'loaded' : 'loading'}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          {...props}
        />
      )}
    </div>
  );
};

export default FastLoadImage;
