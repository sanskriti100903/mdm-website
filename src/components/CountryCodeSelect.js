import React, { useState, useRef, useEffect } from 'react';
import { countries, getFlagUrl } from '../data/countries';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';

const CountryCodeSelect = ({ value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const selectedCountry = countries.find(country => country.code === value) || countries.find(country => country.iso === 'IN');
  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm) ||
    country.iso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (country) => {
    onChange({ target: { name: 'countryCode', value: country.code } });
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
  };

  return (
    <div className={`country-code-dropdown ${className}`} ref={dropdownRef}>
      <div 
        className={`country-code-trigger ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        <div className="selected-country">
          <img 
            src={getFlagUrl(selectedCountry.iso, 'flat', '24')} 
            alt={`${selectedCountry.name} flag`}
            className="flag-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
          />
          <FaGlobe className="flag-fallback" style={{ display: 'none' }} />
          <span className="country-code">{selectedCountry.code}</span>
        </div>
        <FaChevronDown className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </div>

      {isOpen && (
        <div className="country-code-dropdown-menu">
          <div className="search-container">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="country-search-input"
            />
          </div>
          
          <div className="countries-list">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={`${country.code}-${country.iso}`}
                  className={`country-option ${selectedCountry.code === country.code ? 'selected' : ''}`}
                  onClick={() => handleSelect(country)}
                >
                  <img 
                    src={getFlagUrl(country.iso, 'flat', '24')} 
                    alt={`${country.name} flag`}
                    className="flag-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline';
                    }}
                  />
                  <FaGlobe className="flag-fallback" style={{ display: 'none' }} />
                  <span className="country-info">
                    <span className="country-name">{country.name}</span>
                    <span className="country-code">{country.code}</span>
                  </span>
                </div>
              ))
            ) : (
              <div className="no-results">
                <FaGlobe className="me-2" />
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelect;
