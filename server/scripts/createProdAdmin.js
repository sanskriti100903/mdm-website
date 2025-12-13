const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

// Use the production MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdm-website';

async function createProdAdmin() {
  try {
    console.log('Connecting to production database...');
    console.log('MongoDB URI:', MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')); // Hide credentials in log
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to production MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      $or: [{ username: 'keshav' }, { email: 'keshav@mdmgroup.com' }] 
    });
    
    if (existingAdmin) {
      console.log('✅ Admin user already exists in production database');
      console.log('Admin details:', {
        username: existingAdmin.username,
        email: existingAdmin.email,
        role: existingAdmin.role,
        isActive: existingAdmin.isActive
      });
      
      // Test password
      const isPasswordValid = await existingAdmin.comparePassword('keshavb321');
      console.log(`Password test: ${isPasswordValid ? '✅ VALID' : '❌ INVALID'}`);
      
      if (!isPasswordValid) {
        console.log('🔄 Updating password...');
        existingAdmin.password = 'keshavb321';
        await existingAdmin.save();
        console.log('✅ Password updated successfully');
      }
      
      return;
    }

    // Create new admin user
    console.log('Creating new admin user in production...');
    const admin = new Admin({
      username: 'keshav',
      email: 'keshav@mdmgroup.com',
      password: 'keshavb321', // This will be hashed automatically
      role: 'super-admin'
    });

    await admin.save();
    
    console.log('✅ Admin user created successfully in production!');
    console.log('==========================================');
    console.log(`Username: keshav`);
    console.log(`Email: keshav@mdmgroup.com`);
    console.log(`Password: keshavb321`);
    console.log(`Role: super-admin`);
    console.log('==========================================');

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.code === 11000) {
      console.log('This username or email is already taken in production.');
    }
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from database');
  }
}

createProdAdmin();
