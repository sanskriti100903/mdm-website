const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdm-website';

async function verifyAdmin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Find the keshav admin user
    const admin = await Admin.findOne({ username: 'keshav' });
    
    if (!admin) {
      console.log('❌ Admin user "keshav" not found in database');
      return;
    }

    console.log('✅ Admin user found:');
    console.log('==========================================');
    console.log(`Username: ${admin.username}`);
    console.log(`Email: ${admin.email}`);
    console.log(`Role: ${admin.role}`);
    console.log(`Is Active: ${admin.isActive}`);
    console.log(`Created At: ${admin.createdAt}`);
    console.log(`Last Login: ${admin.lastLogin || 'Never'}`);
    console.log('==========================================');

    // Test password comparison
    const testPassword = 'keshavb321';
    const isPasswordValid = await admin.comparePassword(testPassword);
    
    console.log(`\n🔐 Password Test for "${testPassword}": ${isPasswordValid ? '✅ VALID' : '❌ INVALID'}`);
    
    if (!isPasswordValid) {
      console.log('\n⚠️  Password does not match. This could be the issue.');
      console.log('💡 Consider resetting the password or checking if a different password was set.');
    }

    if (!admin.isActive) {
      console.log('\n⚠️  Admin account is INACTIVE. This will prevent login.');
    }

  } catch (error) {
    console.error('❌ Error verifying admin:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

verifyAdmin();
