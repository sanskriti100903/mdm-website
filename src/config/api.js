// API Configuration for MDM Website
const API_BASE_URL = 'https://mdm-website.onrender.com';

// API endpoints
export const API_ENDPOINTS = {
  // Contact endpoints
  CONTACT_SUBMIT: `${API_BASE_URL}/api/contact`,
  
  // Admin endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_REGISTER: `${API_BASE_URL}/api/admin`,
  
  // Health check
  HEALTH_CHECK: `${API_BASE_URL}/api/health`
};

// Default axios configuration
export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
};

export default API_BASE_URL;
