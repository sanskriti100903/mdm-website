const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdm-website';

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const username = 'keshav'; // Default username
    const email = 'keshav@mdmgroup.com'; // Default email
    const password = 'keshavb321'; // Default password

    // Check if any admin already exists (only allow one admin)
    const existingAdmin = await Admin.findOne({});
    if (existingAdmin) {
      console.log('Admin user already exists. Only one admin account is allowed.');
      console.log('Use username: keshav, password: keshavb321');
      process.exit(0);
    }

    // Create admin user
    const admin = new Admin({
      username,
      email,
      password, // This will be hashed automatically
      role: 'super-admin'
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log('Role: super-admin');
    console.log('\n⚠️  IMPORTANT: Keep your credentials secure!');

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createAdmin();
