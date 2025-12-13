const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdm-website';

async function debugLogin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const username = 'keshav';
    const password = 'keshavb321';

    console.log('=== DEBUGGING LOGIN PROCESS ===');
    console.log(`Input username: "${username}"`);
    console.log(`Input password: "${password}"`);
    console.log(`Username toLowerCase(): "${username.toLowerCase()}"`);

    // Step 1: Check username restriction
    if (username.toLowerCase() !== 'keshav') {
      console.log('❌ Username restriction failed');
      return;
    } else {
      console.log('✅ Username restriction passed');
    }

    // Step 2: Find admin by username or email
    const admin = await Admin.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: username.toLowerCase() }
      ]
    });

    if (!admin) {
      console.log('❌ Admin not found with query:');
      console.log({
        $or: [
          { username: username.toLowerCase() },
          { email: username.toLowerCase() }
        ]
      });
      
      // Let's check what's actually in the database
      const allAdmins = await Admin.find({}, 'username email');
      console.log('All admins in database:', allAdmins);
      return;
    } else {
      console.log('✅ Admin found:', {
        username: admin.username,
        email: admin.email,
        isActive: admin.isActive
      });
    }

    // Step 3: Check if active
    if (!admin.isActive) {
      console.log('❌ Admin account is not active');
      return;
    } else {
      console.log('✅ Admin account is active');
    }

    // Step 4: Check password
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      console.log('❌ Password comparison failed');
      
      // Let's test with different variations
      const variations = [password, password.trim(), password.toLowerCase()];
      for (const variation of variations) {
        const testResult = await admin.comparePassword(variation);
        console.log(`Testing "${variation}": ${testResult ? '✅' : '❌'}`);
      }
      return;
    } else {
      console.log('✅ Password comparison passed');
    }

    console.log('\n🎉 All checks passed - login should work!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

debugLogin();
