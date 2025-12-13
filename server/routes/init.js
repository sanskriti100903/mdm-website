const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Initialize admin user (one-time setup)
router.post('/create-admin', async (req, res) => {
  try {
    // Check if any admin exists
    const existingAdmin = await Admin.findOne();
    
    if (existingAdmin) {
      return res.status(400).json({ 
        message: 'Admin user already exists',
        success: false 
      });
    }

    // Create the keshav admin user
    const admin = new Admin({
      username: 'keshav',
      email: 'keshav@mdmgroup.com',
      password: 'keshavb321', // This will be hashed automatically
      role: 'super-admin'
    });

    await admin.save();
    
    res.status(201).json({
      message: 'Admin user created successfully',
      success: true,
      admin: {
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({ 
      message: 'Failed to create admin user',
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
