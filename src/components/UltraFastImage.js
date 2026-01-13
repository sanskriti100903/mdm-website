import React, { useState, useRef, useEffect, useCallback } from 'react';

const UltraFastImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  loading = 'lazy',
  priority = false,
  quality = 'medium',
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate optimized image URL with aggressive compression
  const getOptimizedSrc = useCallback((originalSrc) => {
    if (!originalSrc || originalSrc.startsWith('data:') || originalSrc.includes('flagsapi.com')) {
      return originalSrc;
    }

    // Detect device type and connection
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
    
    // Aggressive size reduction for slow connections
    let targetQuality = quality;
    if (isSlowConnection) {
      targetQuality = 'low';
    } else if (isMobile && quality === 'high') {
      targetQuality = 'medium';
    }

    // Calculate optimal dimensions (much smaller for faster loading)
    let maxWidth = 400; // Reduced from 800
    if (isMobile) {
      maxWidth = targetQuality === 'high' ? 300 : targetQuality === 'medium' ? 250 : 200;
    } else if (isTablet) {
      maxWidth = targetQuality === 'high' ? 400 : targetQuality === 'medium' ? 350 : 300;
    } else {
      maxWidth = targetQuality === 'high' ? 600 : targetQuality === 'medium' ? 500 : 400;
    }

    return originalSrc;
  }, [quality]);

  // Ultra-aggressive preloading for critical images
  useEffect(() => {
    if (priority && src) {
      // Create multiple preload strategies
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = getOptimizedSrc(src);
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      // Immediate image object creation
      const img = new Image();
      img.onload = () => {
        setCurrentSrc(getOptimizedSrc(src));
        setIsLoaded(true);
      };
      img.src = getOptimizedSrc(src);
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority, getOptimizedSrc]);

  // Ultra-fast intersection observer
  useEffect(() => {
    if (priority || loading === 'eager') return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '300px' // Start loading 300px before image comes into view
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [priority, loading]);

  // Set optimized source when in view
  useEffect(() => {
    if (isInView && src && !priority) {
      setCurrentSrc(getOptimizedSrc(src));
    }
  }, [isInView, src, getOptimizedSrc, priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    // Ultra-lightweight SVG fallback
    const svgFallback = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(alt || 'Image')}%3C/text%3E%3C/svg%3E`;
    setCurrentSrc(svgFallback);
    setIsLoaded(true);
  }, [alt]);

  // Ultra-fast placeholder
  const placeholderStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
    background: `linear-gradient(90deg, 
      rgba(248,249,250,1) 0%, 
      rgba(233,236,239,1) 50%, 
      rgba(248,249,250,1) 100%)`,
    backgroundSize: '200% 100%',
    animation: 'ultraFastShimmer 0.8s ease-in-out infinite',
    ...style
  };

  return (
    <div ref={imgRef} className={`ultra-fast-image-container ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ultra-fast shimmer placeholder */}
      {!isLoaded && (
        <div 
          className="ultra-fast-image-placeholder" 
          style={placeholderStyle}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '2px solid #e9ecef',
            borderTop: '2px solid #16a34a',
            borderRadius: '50%',
            animation: 'ultraFastSpin 0.6s linear infinite'
          }} />
        </div>
      )}
      
      {/* Actual image with WebP support */}
      {currentSrc && (
        <picture>
          {/* WebP source for modern browsers */}
          <source 
            srcSet={currentSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
            type="image/webp" 
          />
          
          {/* Fallback image */}
          <img
            src={currentSrc}
            alt={alt}
            className={`ultra-fast-image ${isLoaded ? 'loaded' : 'loading'}`}
            style={{
              ...style,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.15s ease-out',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default UltraFastImage;
