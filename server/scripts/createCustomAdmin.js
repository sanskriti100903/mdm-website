const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdm-website';

async function createCustomAdmin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Get command line arguments
    const args = process.argv.slice(2);
    
    if (args.length < 3) {
      console.log('Usage: node createCustomAdmin.js <username> <email> <password> [role]');
      console.log('Example: node createCustomAdmin.js john john@example.com mypassword123 admin');
      console.log('Roles: admin (default) or super-admin');
      process.exit(1);
    }

    const [username, email, password, role = 'admin'] = args;

    // Validate role
    if (!['admin', 'super-admin'].includes(role)) {
      console.log('Error: Role must be either "admin" or "super-admin"');
      process.exit(1);
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (existingAdmin) {
      console.log('Error: Admin user already exists with this username or email');
      process.exit(1);
    }

    // Validate input
    if (username.length < 3) {
      console.log('Error: Username must be at least 3 characters long');
      process.exit(1);
    }

    if (password.length < 6) {
      console.log('Error: Password must be at least 6 characters long');
      process.exit(1);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Error: Please provide a valid email address');
      process.exit(1);
    }

    // Create admin user
    const admin = new Admin({
      username,
      email,
      password, // This will be hashed automatically
      role
    });

    await admin.save();
    
    console.log('✅ Admin user created successfully!');
    console.log('==========================================');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Role: ${role}`);
    console.log('==========================================');
    console.log('\n🔐 You can now login at: http://localhost:3000/admin/login');
    console.log('⚠️  Keep your credentials secure!');

  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    
    if (error.code === 11000) {
      console.log('This username or email is already taken.');
    }
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createCustomAdmin();
