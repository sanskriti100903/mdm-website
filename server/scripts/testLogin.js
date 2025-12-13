const axios = require('axios');

async function testLogin() {
  try {
    const API_BASE_URL = 'https://mdm-website.onrender.com';
    
    console.log('Testing admin login API...');
    console.log(`URL: ${API_BASE_URL}/api/admin/login`);
    
    const response = await axios.post(`${API_BASE_URL}/api/admin/login`, {
      username: 'keshav',
      password: 'keshavb321'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Login successful!');
    console.log('Response:', response.data);
    
  } catch (error) {
    console.log('❌ Login failed!');
    
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Response:', error.response.data);
    } else if (error.request) {
      console.log('No response received:', error.request);
    } else {
      console.log('Error:', error.message);
    }
  }
}

testLogin();
