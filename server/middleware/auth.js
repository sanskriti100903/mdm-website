const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'mdm-website-secret-key-2024';

// Generate JWT token
const generateToken = (adminId) => {
  return jwt.sign({ adminId }, JWT_SECRET, { expiresIn: '24h' });
};

// Verify JWT token middleware
const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin) {
      return res.status(401).json({ message: 'Invalid token. Admin not found.' });
    }

    if (!admin.isActive) {
      return res.status(401).json({ message: 'Account is deactivated.' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired.' });
    }
    res.status(500).json({ message: 'Token verification failed.', error: error.message });
  }
};

// Check if admin is super-admin
const requireSuperAdmin = (req, res, next) => {
  if (req.admin.role !== 'super-admin') {
    return res.status(403).json({ message: 'Access denied. Super admin required.' });
  }
  next();
};

module.exports = {
  generateToken,
  verifyToken,
  requireSuperAdmin
};
